// src/app/register/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, User2, Music, Check, X, Users2 } from 'lucide-react';
import HeroSection from '@/components/ui/hero-section';
import emailjs from '@emailjs/browser';

const steps = [
  {
    id: 'personal',
    name: 'Personal',
    icon: <User2 className="w-5 h-5" />
  },
  {
    id: 'class',
    name: 'Class',
    icon: <Music className="w-5 h-5" />
  }
];

const classTypes = [
  { 
    id: 'tanti_saaj', 
    label: 'Tanti Saaj',
    icon: <Music className="w-6 h-6" />,
    description: 'Learn traditional string instruments and ragas'
  },
  { 
    id: 'gurmat_kirtan', 
    label: 'Gurmat Kirtan',
    icon: <Users2 className="w-6 h-6" />,
    description: 'Master the art of Gurmat Kirtan and compositions'
  },
  { 
    id: 'tabla', 
    label: 'Tabla',
    icon: <Music className="w-6 h-6" />,
    description: 'Learn rhythmic patterns and tabla techniques'
  }
];

const experienceLevels = [
  { 
    id: 'beginner', 
    label: 'Beginner',
    icon: <Users2 className="w-6 h-6" />,
    description: 'New to music or just starting your journey'
  },
  { 
    id: 'intermediate', 
    label: 'Intermediate',
    icon: <Users2 className="w-6 h-6" />,
    description: 'Have some experience and looking to improve'
  },
  { 
    id: 'advanced', 
    label: 'Advanced',
    icon: <Users2 className="w-6 h-6" />,
    description: 'Experienced musician seeking to master the art'
  }
];

export default function Register() {
  const [currentStep, setCurrentStep] = useState('personal');
  const [showExperiencePopup, setShowExperiencePopup] = useState(false);
  const [showClassTypesPopup, setShowClassTypesPopup] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    parentName: '',
    childName: '',
    phone: '',
    experience: '',
    selectedClasses: ''
  });
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    email: '',
    phone: '',
    experience: '',
    selectedClasses: [] as string[],
    additionalInfo: ''
  });

  // Hide navbar when modals are open
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      if (showExperiencePopup || showClassTypesPopup) {
        navbar.style.display = 'none';
      } else {
        navbar.style.display = 'block';
      }
    }
    return () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.display = 'block';
      }
    };
  }, [showExperiencePopup, showClassTypesPopup]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleClassSelection = (classId: string) => {
    setFormData(prev => {
      const isSelected = prev.selectedClasses.includes(classId);
      const updatedClasses = isSelected
        ? prev.selectedClasses.filter(id => id !== classId)
        : [...prev.selectedClasses, classId];
      
      // Clear the selectedClasses error when user makes a selection
      if (errors.selectedClasses) {
        setErrors(prev => ({ ...prev, selectedClasses: '' }));
      }
      
      return {
        ...prev,
        selectedClasses: updatedClasses
      };
    });
  };

  const handleExperienceSelection = (level: string) => {
    setFormData(prev => ({ ...prev, experience: level }));
    if (errors.experience) {
      setErrors(prev => ({ ...prev, experience: '' }));
    }
    setShowExperiencePopup(false);
  };

  // Updated: Always update error messages immediately
  const validatePersonalStep = () => {
    const newErrors = {
      parentName: '',
      childName: '',
      phone: '',
      experience: '',
      selectedClasses: ''
    };
    let isValid = true;

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent\'s name is required';
      isValid = false;
    }

    if (!formData.childName.trim()) {
      newErrors.childName = 'Child\'s name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    setErrors(prev => ({ ...prev, ...newErrors }));
    return isValid;
  };

  const validateClassStep = () => {
    const newErrors = {
      parentName: '',
      childName: '',
      phone: '',
      experience: '',
      selectedClasses: ''
    };
    let isValid = true;

    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
      isValid = false;
    }

    if (formData.selectedClasses.length === 0) {
      newErrors.selectedClasses = 'Please select at least one class';
      isValid = false;
    }

    setErrors(prev => ({ ...prev, ...newErrors }));
    return isValid;
  };

  const handleNext = () => {
    // Validate personal step immediately; if invalid, errors will show on this tab.
    if (currentStep === 'personal' && validatePersonalStep()) {
      setCurrentStep('class');
      // Clear errors when moving to next step
      setErrors({
        parentName: '',
        childName: '',
        phone: '',
        experience: '',
        selectedClasses: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate both steps before submission
    if (!validatePersonalStep()) {
      setCurrentStep('personal');
      return;
    }
    if (!validateClassStep()) {
      setCurrentStep('class');
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

      const templateParams = {
        parent_name: formData.parentName,
        child_name: formData.childName,
        email: formData.email || "No email provided",
        phone: formData.phone,
        experience_level: formData.experience,
        class_types: getSelectedClassesDisplay(),
        additional_info: formData.additionalInfo || "No additional information provided"
      };

      console.log('Sending registration with data:', templateParams);

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        console.log('Registration successful, showing notification');
        setShowSuccessNotification(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({
            parentName: '',
            childName: '',
            email: '',
            phone: '',
            experience: '',
            selectedClasses: [],
            additionalInfo: ''
          });
          setCurrentStep('personal');
          setShowSuccessNotification(false);
        }, 5000);
      } else {
        throw new Error('Failed to send registration');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Failed to submit registration. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep === 'class') setCurrentStep('personal');
  };

  const Modal = ({ 
    isOpen, 
    onClose, 
    title, 
    subtitle,
    children,
    showDoneButton,
    onDone
  }: { 
    isOpen: boolean; 
    onClose: () => void; 
    title: string;
    subtitle: string;
    children: React.ReactNode;
    showDoneButton?: boolean;
    onDone?: () => void;
  }) => {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`relative w-full max-w-lg bg-[#1A1A1A] rounded-[2rem] flex flex-col max-h-[85vh] transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Header */}
          <div className="p-6 border-b border-[#333333]">
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{subtitle}</p>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 min-h-0">
            {children}
          </div>

          {/* Footer with Done Button */}
          {showDoneButton && (
            <div className="p-6 border-t border-[#333333]">
              <button
                type="button"
                onClick={onDone}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-semibold rounded-full transition-all duration-300"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const getSelectedClassesDisplay = () => {
    return formData.selectedClasses
      .map(id => classTypes.find(type => type.id === id)?.label)
      .filter(Boolean)
      .join(', ');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccessNotification && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <div className="w-full max-w-md bg-[#1A1A1A] rounded-[2rem] p-8 border border-[#C6A355]/20 shadow-2xl">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#C6A355]/20 flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#DFB87A]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Registration Successful!</h3>
                <p className="text-gray-400 text-lg">
                  One of our instructors will contact you within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`transition-opacity duration-300 ${(showExperiencePopup || showClassTypesPopup) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <HeroSection
          title="Start Your Journey"
          subtitle="Register for classes and embark on your musical journey with us"
          backgroundImage="/hero-bg.jpg"
        />
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {/* Navigation Tabs */}
            <div className={`flex justify-center mb-12 transition-opacity duration-300 ${(showExperiencePopup || showClassTypesPopup) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div className="inline-flex rounded-full bg-[#1A1A1A]/80 backdrop-blur-xl p-1.5 border border-[#333333]">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => {
                      setCurrentStep(step.id);
                      setErrors({
                        parentName: '',
                        childName: '',
                        phone: '',
                        experience: '',
                        selectedClasses: ''
                      });
                    }}
                    className={`flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      currentStep === step.id
                        ? 'bg-[#C6A355] text-black'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="mr-2">{step.icon}</span>
                    {step.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Container */}
            <div className={`bg-[#1A1A1A]/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-[#333333] transition-opacity duration-300 ${(showExperiencePopup || showClassTypesPopup) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent">
                Register for Classes
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information Step */}
                {currentStep === 'personal' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Parent&apos;s Name *</label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${errors.parentName ? 'border-red-500' : 'border-[#333333]'} text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300`}
                        placeholder="Enter parent's name"
                      />
                      {errors.parentName && (
                        <p className="mt-2 text-red-500 text-sm">{errors.parentName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Child&apos;s Name *</label>
                      <input
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${errors.childName ? 'border-red-500' : 'border-[#333333]'} text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300`}
                        placeholder="Enter child's name"
                      />
                      {errors.childName && (
                        <p className="mt-2 text-red-500 text-sm">{errors.childName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#333333] text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300"
                        placeholder="Enter email (optional)"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${errors.phone ? 'border-red-500' : 'border-[#333333]'} text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300`}
                        placeholder="Enter phone number"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Class Preferences Step */}
                {currentStep === 'class' && (
                  <div className="space-y-6">
                    <div className="relative">
                      <label className="block text-gray-300 mb-2">Your Experience Level *</label>
                      <button
                        type="button"
                        onClick={() => setShowExperiencePopup(true)}
                        className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${errors.experience ? 'border-red-500' : 'border-[#333333]'} text-left text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300`}
                      >
                        {formData.experience || 'Select your experience level'}
                      </button>
                      {errors.experience && (
                        <p className="mt-2 text-red-500 text-sm">{errors.experience}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Class Types *</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowClassTypesPopup(true)}
                          className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${errors.selectedClasses ? 'border-red-500' : 'border-[#333333]'} text-left text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300`}
                        >
                          {formData.selectedClasses.length > 0
                            ? getSelectedClassesDisplay()
                            : 'Select class types'}
                        </button>
                        {errors.selectedClasses && (
                          <p className="mt-2 text-red-500 text-sm">{errors.selectedClasses}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Additional Information</label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#333333] text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300 min-h-[120px]"
                        placeholder="Any additional information you would like to share"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep !== 'personal' && (
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="px-6 py-3 text-[#C6A355] hover:text-[#DFB87A] transition-colors duration-300"
                    >
                      Previous
                    </button>
                  )}
                  <div className="ml-auto">
                    {currentStep === 'personal' ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-semibold rounded-full transition-all duration-300"
                      >
                        Next
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-semibold rounded-full transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Experience Level Modal */}
        <Modal
          isOpen={showExperiencePopup}
          onClose={() => setShowExperiencePopup(false)}
          title="Select Experience Level"
          subtitle="Choose your current level of musical experience"
        >
          <div className="space-y-3">
            {experienceLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => handleExperienceSelection(level.label)}
                className="w-full flex items-start gap-4 p-4 rounded-xl hover:bg-[#333333] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#333333] group-hover:bg-[#C6A355] flex items-center justify-center transition-colors">
                  <div className="text-[#C6A355] group-hover:text-black transition-colors">
                    {level.icon}
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium text-white group-hover:text-[#C6A355] transition-colors">
                    {level.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {level.description}
                  </div>
                </div>
                {formData.experience === level.label && (
                  <Check className="w-5 h-5 text-[#C6A355] mt-1" />
                )}
              </button>
            ))}
          </div>
        </Modal>

        {/* Class Types Modal */}
        <Modal
          isOpen={showClassTypesPopup}
          onClose={() => setShowClassTypesPopup(false)}
          title="Select Class Types"
          subtitle="Choose one or more classes you're interested in"
          showDoneButton
          onDone={() => setShowClassTypesPopup(false)}
        >
          <div className="space-y-3">
            {classTypes.map((classType) => (
              <div
                key={classType.id}
                onClick={() => handleClassSelection(classType.id)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  formData.selectedClasses.includes(classType.id)
                    ? 'bg-[#C6A355]/20 border-[#C6A355]'
                    : 'bg-[#1A1A1A] border-[#333333]'
                } border hover:border-[#C6A355]/50`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    formData.selectedClasses.includes(classType.id)
                      ? 'bg-[#C6A355]'
                      : 'bg-[#333333]'
                  }`}>
                    <div className={`transition-colors duration-300 ${formData.selectedClasses.includes(classType.id) ? 'text-black' : 'text-[#C6A355]'}`}>
                      {classType.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      formData.selectedClasses.includes(classType.id)
                        ? 'text-[#C6A355]'
                        : 'text-white'
                    }`}>
                      {classType.label}
                    </h3>
                    <p className="text-gray-400 text-sm">{classType.description}</p>
                  </div>
                  <div className={`flex-shrink-0 transition-opacity duration-300 ${formData.selectedClasses.includes(classType.id) ? 'opacity-100' : 'opacity-0'}`}>
                    <Check className="w-5 h-5 text-[#C6A355]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal>
      </section>
    </div>
  );
}
