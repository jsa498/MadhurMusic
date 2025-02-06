'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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
      <section className="-mt-24 lg:-mt-28 py-32 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gold-gradient-text">
              Register for Classes
            </h1>
            <p className="text-xl text-white">
              Begin your musical journey with us today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-black/50 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#C6A355]/20"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-[#DFB87A] mb-2">
                  Full Name *
                </label>
                <input
                  {...register('fullName')}
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#C6A355]/20 text-white placeholder-[#C6A355]/50 focus:outline-none focus:border-[#DFB87A] transition-colors"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[#DFB87A] mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#C6A355]/20 text-white placeholder-[#C6A355]/50 focus:outline-none focus:border-[#DFB87A] transition-colors"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-[#DFB87A] mb-2">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#C6A355]/20 text-white placeholder-[#C6A355]/50 focus:outline-none focus:border-[#DFB87A] transition-colors"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-[#DFB87A] mb-2">
                  Age *
                </label>
                <input
                  {...register('age')}
                  type="number"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#C6A355]/20 text-white placeholder-[#C6A355]/50 focus:outline-none focus:border-[#DFB87A] transition-colors"
                  placeholder="Enter your age"
                />
                {errors.age && (
                  <p className="mt-1 text-sm text-red-500">{errors.age.message}</p>
                )}
              </div>

              {/* Course Level */}
              <div>
                <label htmlFor="course" className="block text-[#DFB87A] mb-2">
                  Course Level *
                </label>
                <select
                  {...register('course')}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#C6A355]/20 text-white placeholder-[#C6A355]/50 focus:outline-none focus:border-[#DFB87A] transition-colors"
                >
                  <option value="" className="text-white bg-black">Select course level</option>
                  <option value="beginner" className="text-white bg-black">Beginner</option>
                  <option value="intermediate" className="text-white bg-black">Intermediate</option>
                  <option value="advanced" className="text-white bg-black">Advanced</option>
                </select>
                {errors.course && (
                  <p className="mt-1 text-sm text-red-500">{errors.course.message}</p>
                )}
              </div>

              {/* Instrument */}
              <div>
                <label htmlFor="instrument" className="block text-[#DFB87A] mb-2">
                  Instrument *
                </label>
                <select
                  {...register('instrument')}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#C6A355]/20 text-white placeholder-[#C6A355]/50 focus:outline-none focus:border-[#DFB87A] transition-colors"
                >
                  <option value="" className="text-white bg-black">Select instrument</option>
                  <option value="vocal" className="text-white bg-black">Vocal</option>
                  <option value="harmonium" className="text-white bg-black">Harmonium</option>
                  <option value="tabla" className="text-white bg-black">Tabla</option>
                  <option value="other" className="text-white bg-black">Other</option>
                </select>
                {errors.instrument && (
                  <p className="mt-1 text-sm text-red-500">{errors.instrument.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[#DFB87A] mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#C6A355]/20 text-white placeholder-[#C6A355]/50 focus:outline-none focus:border-[#DFB87A] transition-colors resize-none"
                  placeholder="Any additional information you would like to share"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`gold-button w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-500 text-center">
                  Registration submitted successfully! We will contact you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 