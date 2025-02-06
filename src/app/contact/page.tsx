'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
              Contact Us
            </h1>
            <p className="text-xl text-white">
              Get in touch with us for any inquiries about our music programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#C6A355]/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  info: "info@mgsvidyala.com",
                  description: "Send us an email anytime"
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone",
                  info: "+1 (123) 456-7890",
                  description: "Mon-Fri from 9am to 6pm"
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Location",
                  info: "123 Music Street",
                  description: "New York, NY 10001"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-black/40 backdrop-blur-sm rounded-[2rem] p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#C6A355]/10"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#DFB87A] to-[#C6A355] flex items-center justify-center text-black">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#DFB87A]">{item.title}</h3>
                  <p className="text-white font-medium mb-2">{item.info}</p>
                  <p className="text-white/80">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 gold-gradient-text">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[#DFB87A] mb-2">
                      Name
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#C6A355]/20 text-white placeholder-[#C6A355]/50 focus:outline-none focus:border-[#DFB87A] transition-colors"
                      placeholder="Your name"
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#DFB87A] mb-2">
                      Email
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#C6A355]/20 text-white placeholder-[#C6A355]/50 focus:outline-none focus:border-[#DFB87A] transition-colors"
                      placeholder="Your email"
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[#DFB87A] mb-2">
                    Subject
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#C6A355]/20 text-white placeholder-[#C6A355]/50 focus:outline-none focus:border-[#DFB87A] transition-colors"
                    placeholder="Message subject"
                    required
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#DFB87A] mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#C6A355]/20 text-white placeholder-[#C6A355]/50 focus:outline-none focus:border-[#DFB87A] transition-colors resize-none"
                    placeholder="Your message"
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`gold-button ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Status Messages */}
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
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 