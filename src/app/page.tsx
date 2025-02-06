'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Music, GraduationCap, Users, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen -mt-24 lg:-mt-28 flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Traditional Indian Music"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4"
        >
          <div className="bg-[#1A1A1A]/80 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 max-w-4xl mx-auto shadow-2xl border border-[#333333]">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-white">
              MADHUR GURMAT
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-center text-gray-300">
              Discover the rich heritage of Indian classical music through expert guidance and traditional teaching methods
            </p>
            <div className="text-center">
              <Link 
                href="/register" 
                className="inline-flex items-center px-10 py-4 bg-[#C6A355] hover:bg-[#DFB87A] text-black text-lg font-semibold rounded-full transition-all duration-300"
              >
                Start Your Journey
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Why Choose Us?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                description: "Learn from experienced teachers who are masters in traditional Indian classical music",
                icon: <GraduationCap className="w-8 h-8" />
              },
              {
                title: "Comprehensive Curriculum",
                description: "Structured learning path covering theory, practice, and performance aspects",
                icon: <Music className="w-8 h-8" />
              },
              {
                title: "Personalized Attention",
                description: "Small batch sizes ensuring individual attention and faster progress",
                icon: <Users className="w-8 h-8" />
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-[2.5rem] p-10 border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#C6A355] flex items-center justify-center mx-auto mb-6">
                  <div className="text-black">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white text-center">{feature.title}</h3>
                <p className="text-gray-400 text-lg text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] rounded-[2.5rem] p-16 border border-[#333333] text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Begin Your Musical Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join our community of passionate learners and start your journey in Indian classical music
            </p>
            <Link 
              href="/register" 
              className="inline-flex items-center px-10 py-4 bg-[#C6A355] hover:bg-[#DFB87A] text-black text-lg font-semibold rounded-full transition-all duration-300"
            >
              Enroll Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
