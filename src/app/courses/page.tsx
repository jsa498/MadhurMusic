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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="-mt-24 lg:-mt-28 py-32 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gold-gradient-text">
              Our Courses
            </h1>
            <p className="text-xl text-white">
              Comprehensive music education programs for all skill levels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="bg-black/50 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#C6A355]/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#C6A355]/10"
                >
                  <div className="relative h-48">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-1 bg-[#DFB87A] text-black rounded-full text-sm font-medium">
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-[#DFB87A]">{course.title}</h3>
                    <p className="text-white mb-4">{course.description}</p>
                    <div className="mb-6">
                      <span className="text-sm font-medium text-[#DFB87A]">
                        Duration: {course.duration}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-8">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex items-center text-white">
                          <svg
                            className="w-4 h-4 mr-2 text-[#DFB87A]"
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
                    <Link href="/register" className="gold-button w-full text-center block">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="bg-black/50 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#C6A355]/20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 gold-gradient-text">
              Our Learning Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Personalized Attention',
                  description: 'Individual focus on each student\'s progress and development',
                  icon: '👤'
                },
                {
                  title: 'Traditional Methods',
                  description: 'Learn authentic techniques passed down through generations',
                  icon: '🏛️'
                },
                {
                  title: 'Regular Practice',
                  description: 'Structured practice sessions with expert guidance',
                  icon: '🎵'
                },
                {
                  title: 'Performance Opportunities',
                  description: 'Regular concerts and recitals to build confidence',
                  icon: '🎭'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-black/40 backdrop-blur-sm rounded-[2rem] p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#C6A355]/10"
                >
                  <div className="text-4xl mb-4 bg-gradient-to-br from-[#DFB87A] to-[#C6A355] text-transparent bg-clip-text">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#DFB87A]">{item.title}</h3>
                  <p className="text-white">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 