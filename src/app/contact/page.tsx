'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import HeroSection from '@/components/ui/hero-section';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      phone: '',
      message: ''
    };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const formatMessage = () => {
    return `Name: ${formData.fullName}
${formData.email ? `Email: ${formData.email}` : ''}
Phone: ${formData.phone}

Message:
${formData.message}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Format phone number to standard format
    const cleanPhone = '+16047007466';
    const encodedMessage = encodeURIComponent(formatMessage());

    // Try SMS first for all devices
    try {
      // Different formats for iOS and Android
      const messageUrl = `sms:${cleanPhone}${
        /iPhone|iPad|iPod/i.test(navigator.userAgent) ? '&' : '?'
      }body=${encodedMessage}`;

      window.location.href = messageUrl;

      // If SMS fails (after a short delay), fall back to email
      setTimeout(() => {
        const currentUrl = window.location.href;
        if (currentUrl === messageUrl) {
          const emailUrl = `mailto:mgsvidyala@gmail.com?subject=New Message from ${formData.fullName}&body=${encodedMessage}`;
          window.location.href = emailUrl;
        }
      }, 500);
    } catch (err) {
      console.error('Failed to open SMS:', err);
      // Fallback to email if SMS fails
      const emailUrl = `mailto:mgsvidyala@gmail.com?subject=New Message from ${formData.fullName}&body=${encodedMessage}`;
      window.location.href = emailUrl;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries about our music classes"
        backgroundImage="/hero-bg.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="lg:bg-[#1A1A1A]/80 lg:backdrop-blur-xl lg:rounded-[2rem] lg:p-12 lg:border lg:border-[#333333] h-fit">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="group lg:bg-black/30 lg:p-6 lg:rounded-xl lg:border lg:border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] lg:bg-[#C6A355]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-[#C6A355]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a 
                        href="tel:+16047007466" 
                        className="text-white hover:text-[#DFB87A] transition-colors text-lg font-medium"
                      >
                        +1 (604) 700-7466
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group lg:bg-black/30 lg:p-6 lg:rounded-xl lg:border lg:border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] lg:bg-[#C6A355]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-[#C6A355]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">Email</p>
                      <a 
                        href="mailto:mgsvidyala@gmail.com" 
                        className="text-white hover:text-[#DFB87A] transition-colors text-lg font-medium break-all"
                      >
                        mgsvidyala@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group lg:bg-black/30 lg:p-6 lg:rounded-xl lg:border lg:border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] lg:bg-[#C6A355]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-[#C6A355]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white text-lg font-medium">Lower Mainland, BC</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="group lg:bg-black/30 lg:p-6 lg:rounded-xl lg:border lg:border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] lg:bg-[#C6A355]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-[#C6A355]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">Hours</p>
                      <p className="text-white text-lg font-medium">Flexible Class Timings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1A1A1A]/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-[#333333]">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent">
                Send Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                      errors.fullName ? 'border-red-500' : 'border-[#333333]'
                    } text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300`}
                    placeholder="Enter your name"
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#333333] text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300"
                    placeholder="Enter your email (optional)"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                      errors.phone ? 'border-red-500' : 'border-[#333333]'
                    } text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                      errors.message ? 'border-red-500' : 'border-[#333333]'
                    } text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300 min-h-[120px]`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-2 text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A355]/20 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 