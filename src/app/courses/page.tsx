'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    title: 'Beginner Vocal Training',
    description: 'Start your journey in Indian classical music with fundamental vocal techniques and basic ragas.',
    duration: '6 months',
    level: 'Beginner',
    image: '/vocal-training.jpg',
    features: [
      'Basic vocal exercises',
      'Introduction to sargam',
      'Simple ragas',
      'Rhythm training',
    ],
  },
  {
    title: 'Intermediate Harmonium',
    description: 'Learn to play harmonium with proper techniques and understanding of ragas.',
    duration: '8 months',
    level: 'Intermediate',
    image: '/harmonium.jpg',
    features: [
      'Advanced harmonium techniques',
      'Raga elaboration',
      'Accompaniment skills',
      'Performance preparation',
    ],
  },
  {
    title: 'Advanced Tabla',
    description: 'Master the art of tabla with complex rhythms and traditional compositions.',
    duration: '12 months',
    level: 'Advanced',
    image: '/tabla.jpg',
    features: [
      'Complex rhythmic patterns',
      'Traditional compositions',
      'Solo performance techniques',
      'Advanced taal knowledge',
    ],
  },
];

export default function Courses() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative -mt-24 lg:-mt-28 py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/courses-bg.jpg"
            alt="Musical instruments"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-orange-50/90" />
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 max-w-4xl mx-auto shadow-2xl border border-white/20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100">
              Our Courses
            </h1>
            <p className="text-xl md:text-2xl text-center text-white/90">
              Comprehensive music education programs for all skill levels
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Blend */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-50 to-transparent" />
      </section>

      {/* Courses Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gradient-to-b from-orange-50 to-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-48">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-1 bg-white/90 backdrop-blur-sm text-orange-600 rounded-full text-sm font-medium">
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="mb-6">
                      <span className="text-sm font-medium text-gray-500">
                        Duration: {course.duration}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-8">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <svg
                            className="w-4 h-4 mr-2 text-orange-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/register"
                      className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">
                Our Learning Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    title: 'Personalized Attention',
                    description: 'Individual focus on each student\'s progress and development.',
                    icon: '👤',
                  },
                  {
                    title: 'Traditional Methods',
                    description: 'Learn authentic techniques passed down through generations.',
                    icon: '🏛️',
                  },
                  {
                    title: 'Regular Practice',
                    description: 'Structured practice sessions with expert guidance.',
                    icon: '🎵',
                  },
                  {
                    title: 'Performance Opportunities',
                    description: 'Regular concerts and recitals to build confidence.',
                    icon: '🎭',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-6 text-center group hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
    </div>
  );
} 