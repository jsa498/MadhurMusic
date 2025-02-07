'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, User2, Music, Check, X, Users2 } from 'lucide-react';
import { Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import HeroSection from '@/components/ui/hero-section';
import Modal from '@/components/ui/modal';

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

function LoadingCard() {
  return (
    <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-[#333333] animate-pulse">
      <div className="p-8 space-y-4">
        <div className="h-4 bg-gray-800 rounded w-3/4" />
        <div className="h-4 bg-gray-800 rounded w-1/2" />
      </div>
    </div>
  );
}

export default function Register() {
  const [currentStep, setCurrentStep] = useState('personal');
  const [showExperiencePopup, setShowExperiencePopup] = useState(false);
  const [showClassTypesPopup, setShowClassTypesPopup] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    email: '',
    phone: '',
    experience: '',
    selectedClasses: [] as string[],
    additionalInfo: ''
  });
  const [showModal, setShowModal] = useState(false);

  // Add useEffect to control navbar visibility
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      if (showExperiencePopup || showClassTypesPopup) {
        navbar.style.display = 'none';
      } else {
        navbar.style.display = 'block';
      }
    }
    
    // Cleanup function
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
  };

  const handleClassSelection = (classId: string) => {
    setFormData(prev => {
      const isSelected = prev.selectedClasses.includes(classId);
      const updatedClasses = isSelected
        ? prev.selectedClasses.filter(id => id !== classId)
        : [...prev.selectedClasses, classId];
      
      return {
        ...prev,
        selectedClasses: updatedClasses
      };
    });
  };

  const handleExperienceSelection = (level: string) => {
    setFormData(prev => ({ ...prev, experience: level }));
    setShowExperiencePopup(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(true);
  };

  const handleNext = () => {
    if (currentStep === 'personal') setCurrentStep('class');
  };

  const handlePrevious = () => {
    if (currentStep === 'class') setCurrentStep('personal');
  };

  const getSelectedClassesDisplay = () => {
    return formData.selectedClasses
      .map(id => classTypes.find(type => type.id === id)?.label)
      .filter(Boolean)
      .join(', ');
  };

  return (
    <div className="min-h-screen bg-black">
      <Suspense fallback={<div className="h-[60vh] bg-gray-900 animate-pulse" />}>
        <HeroSection
          title="Register Now"
          subtitle="Begin your musical journey with us"
          backgroundImage="/hero-bg.jpg"
        />
      </Suspense>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="container mx-auto px-4 py-20"
        >
          <Suspense fallback={<LoadingCard />}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto bg-[#1A1A1A] rounded-[2rem] p-8 border border-[#333333]"
            >
              {/* Navigation Tabs */}
              <div className={`flex justify-center mb-12 transition-opacity duration-300 ${(showExperiencePopup || showClassTypesPopup) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="inline-flex rounded-full bg-[#1A1A1A]/80 backdrop-blur-xl p-1.5 border border-[#333333]">
                  {steps.map((step) => (
                    <button
                      key={step.id}
                      onClick={() => setCurrentStep(step.id)}
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
                          required
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#333333] text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300"
                          placeholder="Enter parent&apos;s name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Child&apos;s Name *</label>
                        <input
                          type="text"
                          name="childName"
                          value={formData.childName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#333333] text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300"
                          placeholder="Enter child&apos;s name"
                        />
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
                          required
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#333333] text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300"
                          placeholder="Enter phone number"
                        />
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
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#333333] text-left text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300"
                        >
                          {formData.experience || 'Select your experience level'}
                        </button>
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2">Class Types *</label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowClassTypesPopup(true)}
                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#333333] text-left text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300"
                          >
                            {formData.selectedClasses.length > 0
                              ? getSelectedClassesDisplay()
                              : 'Select class types'}
                          </button>
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
                          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-semibold rounded-full transition-all duration-300"
                        >
                          Register Now
                          <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </Suspense>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title="Registration Submitted"
            description="Thank you for registering with Madhur Gurmat Sangeet Vidyala."
          />
        )}
      </AnimatePresence>

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
    </div>
  );
} 