'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, BookOpen, Star, Award } from 'lucide-react';

const courses = [
  {
    title: 'Vocal Training',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Master the fundamentals of Indian classical vocal music with comprehensive training in ragas, taal, and voice culture.',
    duration: '6-12 months',
    schedule: 'Flexible Timings',
    image: '/courses/vocal.jpg',
    features: [
      'Personalized attention',
      'Voice culture exercises',
      'Raga practice',
      'Taal training',
      'Performance opportunities'
    ]
  },
  {
    title: 'Harmonium',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Learn to play harmonium with proper techniques and understanding of ragas, from basic notes to advanced compositions.',
    duration: '8-14 months',
    schedule: 'Weekend Classes',
    image: '/courses/harmonium.jpg',
    features: [
      'Instrument basics',
      'Note progression',
      'Raga theory',
      'Classical compositions',
      'Accompaniment skills'
    ]
  },
  {
    title: 'Tabla',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Discover the rhythmic world of tabla through systematic training in various taals and traditional compositions.',
    duration: '12-18 months',
    schedule: 'Evening Classes',
    image: '/courses/tabla.jpg',
    features: [
      'Basic techniques',
      'Taal system',
      'Traditional compositions',
      'Solo performance',
      'Accompaniment training'
    ]
  }
];

export default function Courses() {
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
                Our Programs
              </h1>
              <p className="text-xl text-gray-300">
                Comprehensive music education programs designed for all skill levels
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Small Batch Size",
                description: "Personal attention for every student"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Flexible Schedule",
                description: "Classes that fit your timeline"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Expert Teachers",
                description: "Learn from experienced masters"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-[2rem] p-8 border border-[#333333] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#C6A355] flex items-center justify-center mx-auto mb-6">
                  <div className="text-black">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-[2.5rem] overflow-hidden border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {course.levels.map((level) => (
                        <span
                          key={level}
                          className="px-4 py-1.5 bg-[#C6A355] text-black text-sm font-medium rounded-full"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-300 text-lg mb-8">{course.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#C6A355]/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#C6A355]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="text-white text-lg">{course.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#C6A355]/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-[#C6A355]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Schedule</p>
                      <p className="text-white text-lg">{course.schedule}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {course.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#C6A355]" />
                        <span className="text-gray-300 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/register"
                    className="block w-full px-8 py-4 bg-[#C6A355] hover:bg-[#DFB87A] text-black font-semibold rounded-full text-lg text-center transition-all duration-300"
                  >
                    Enroll Now
                  </Link>
                </div>
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
            <div className="w-16 h-16 rounded-full bg-[#C6A355] flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Start Your Musical Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join our community of passionate learners and begin your journey in Indian classical music
            </p>
            <Link
              href="/register"
              className="inline-block px-10 py-4 bg-[#C6A355] hover:bg-[#DFB87A] text-black text-lg font-semibold rounded-full transition-all duration-300"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 