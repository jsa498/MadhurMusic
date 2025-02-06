'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Please enter a valid age',
  }),
  course: z.enum(['beginner', 'intermediate', 'advanced'], {
    required_error: 'Please select a course level',
  }),
  instrument: z.enum(['vocal', 'harmonium', 'tabla', 'other'], {
    required_error: 'Please select an instrument',
  }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Registration failed');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Registration error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Traditional Indian Music"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black" />
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Register for Classes
              </h1>
              <p className="text-xl text-gray-300">
                Begin your musical journey with us today
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 -mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-[#1A1A1A] rounded-[2.5rem] p-10 border border-[#333333]"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-gray-400 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('fullName')}
                  type="text"
                  className="w-full px-6 py-4 rounded-full bg-[#0D0D0D] border border-[#333333] text-white placeholder-gray-600 focus:outline-none focus:border-[#C6A355] transition-colors"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-500 pl-6">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-6 py-4 rounded-full bg-[#0D0D0D] border border-[#333333] text-white placeholder-gray-600 focus:outline-none focus:border-[#C6A355] transition-colors"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 pl-6">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-400 mb-2">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-6 py-4 rounded-full bg-[#0D0D0D] border border-[#333333] text-white placeholder-gray-600 focus:outline-none focus:border-[#C6A355] transition-colors"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-500 pl-6">{errors.phone.message}</p>
                )}
              </div>

              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-gray-400 mb-2">
                  Age *
                </label>
                <input
                  {...register('age')}
                  type="number"
                  className="w-full px-6 py-4 rounded-full bg-[#0D0D0D] border border-[#333333] text-white placeholder-gray-600 focus:outline-none focus:border-[#C6A355] transition-colors"
                  placeholder="Enter your age"
                />
                {errors.age && (
                  <p className="mt-2 text-sm text-red-500 pl-6">{errors.age.message}</p>
                )}
              </div>

              {/* Course Level */}
              <div>
                <label htmlFor="course" className="block text-gray-400 mb-2">
                  Course Level *
                </label>
                <select
                  {...register('course')}
                  className="w-full px-6 py-4 rounded-full bg-[#0D0D0D] border border-[#333333] text-white placeholder-gray-600 focus:outline-none focus:border-[#C6A355] transition-colors appearance-none"
                >
                  <option value="" className="bg-[#0D0D0D]">Select course level</option>
                  <option value="beginner" className="bg-[#0D0D0D]">Beginner</option>
                  <option value="intermediate" className="bg-[#0D0D0D]">Intermediate</option>
                  <option value="advanced" className="bg-[#0D0D0D]">Advanced</option>
                </select>
                {errors.course && (
                  <p className="mt-2 text-sm text-red-500 pl-6">{errors.course.message}</p>
                )}
              </div>

              {/* Instrument */}
              <div>
                <label htmlFor="instrument" className="block text-gray-400 mb-2">
                  Instrument *
                </label>
                <select
                  {...register('instrument')}
                  className="w-full px-6 py-4 rounded-full bg-[#0D0D0D] border border-[#333333] text-white placeholder-gray-600 focus:outline-none focus:border-[#C6A355] transition-colors appearance-none"
                >
                  <option value="" className="bg-[#0D0D0D]">Select instrument</option>
                  <option value="vocal" className="bg-[#0D0D0D]">Vocal</option>
                  <option value="harmonium" className="bg-[#0D0D0D]">Harmonium</option>
                  <option value="tabla" className="bg-[#0D0D0D]">Tabla</option>
                  <option value="other" className="bg-[#0D0D0D]">Other</option>
                </select>
                {errors.instrument && (
                  <p className="mt-2 text-sm text-red-500 pl-6">{errors.instrument.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-6 py-4 rounded-[2rem] bg-[#0D0D0D] border border-[#333333] text-white placeholder-gray-600 focus:outline-none focus:border-[#C6A355] transition-colors resize-none"
                  placeholder="Any additional information you would like to share"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#C6A355] hover:bg-[#DFB87A] text-black text-lg font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-full">
                  <p className="text-green-500 text-center">
                    Registration submitted successfully! We will contact you soon.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-full">
                  <p className="text-red-500 text-center">
                    Something went wrong. Please try again later.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 