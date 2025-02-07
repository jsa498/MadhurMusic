'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import HeroSection from '@/components/ui/hero-section';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with us for any questions or inquiries about our music programs"
        backgroundImage="/hero-bg.jpg"
      />

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1A1A1A] rounded-2xl p-8 border border-[#333333]"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone",
                  info: "+1 (604) 700-7466",
                  subInfo: null
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  info: "mgsvidyala@gmail.com",
                  subInfo: null
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Location",
                  info: "123 Music Street",
                  subInfo: "New York, NY 10001"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Hours",
                  info: "Mon-Fri: 9am to 6pm",
                  subInfo: "Sat-Sun: Closed"
                }
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#C6A355] flex items-center justify-center flex-shrink-0">
                    <div className="text-black">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-[#C6A355]">{item.info}</p>
                    {item.subInfo && <p className="text-gray-400">{item.subInfo}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1A1A1A] rounded-2xl p-8 border border-[#333333]"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Send Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-[#333333] text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A355] transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-[#333333] text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A355] transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-[#333333] text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A355] transition-colors"
                  placeholder="(123) 456-7890"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-[#333333] text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A355] transition-colors resize-none"
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-[#C6A355] hover:bg-[#DFB87A] text-black font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-green-500 text-center">
                  Message sent successfully! We&apos;ll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-500 text-center">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 