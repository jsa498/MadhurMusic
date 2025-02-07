'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, BookOpen, Star, ChevronRight } from 'lucide-react';
import HeroSection from '@/components/ui/hero-section';
import { useImageLoad } from '@/hooks/useImageLoad';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      when: "beforeChildren",
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const classes = [
  {
    title: 'Tanti Saaj',
    description: 'Master the fundamentals of Indian classical string instruments with comprehensive training in ragas, taal, and traditional techniques.',
    image: '/Mgsv photos/IMG_5041.JPG',
    features: [
      'Personalized attention',
      'Traditional techniques',
      'Raga practice',
      'Taal training',
      'Performance opportunities'
    ],
    scheduleOptions: [
      'Flexible Timings',
      'Weekend Classes',
      'Evening Classes'
    ]
  },
  {
    title: 'Gurmat Kirtan',
    description: 'Learn the sacred art of Gurmat Kirtan with proper techniques and understanding of ragas, from basic compositions to advanced kirtans.',
    image: '/Mgsv photos/c3f107bf-f274-43a9-b6e2-ecdc7b3db2f6.jpg',
    features: [
      'Instrument basics',
      'Raga theory',
      'Classical compositions',
      'Kirtan techniques',
      'Accompaniment skills'
    ],
    scheduleOptions: [
      'Flexible Timings',
      'Weekend Classes',
      'Evening Classes'
    ]
  },
  {
    title: 'Tabla',
    description: 'Discover the rhythmic world of tabla through systematic training in various taals and traditional compositions.',
    image: '/Mgsv photos/IMG_5001.PNG',
    features: [
      'Basic techniques',
      'Taal system',
      'Traditional compositions',
      'Solo performance',
      'Accompaniment training'
    ],
    scheduleOptions: [
      'Flexible Timings',
      'Weekend Classes',
      'Evening Classes'
    ]
  }
];

export default function Classes() {
  // Move hook calls to the top level
  const firstImageLoaded = useImageLoad('/Mgsv photos/IMG_5041.JPG');
  const secondImageLoaded = useImageLoad('/Mgsv photos/c3f107bf-f274-43a9-b6e2-ecdc7b3db2f6.jpg');
  const thirdImageLoaded = useImageLoad('/Mgsv photos/IMG_5001.PNG');
  
  // Create an array of loading states that corresponds to the classes array
  const classImagesLoaded = [firstImageLoaded, secondImageLoaded, thirdImageLoaded];

  return (
    <div className="min-h-screen bg-black">
      <HeroSection
        title="Our Classes"
        subtitle="Comprehensive music education programs designed for all skill levels"
        backgroundImage="/hero-bg.jpg"
        buttonText="Register Now"
        buttonLink="/register"
      />

      {/* Features Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1A1A1A]/50 to-black" />
        <div className="container relative mx-auto px-4">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Batch Size",
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
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-gradient-to-b from-[#1A1A1A]/95 to-black/95 backdrop-blur-xl rounded-[2rem] p-10 border border-[#333333] hover:border-[#C6A355] transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#C6A355]/10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#DFB87A] to-[#C6A355] p-[2px] mb-8 group-hover:scale-110 transition-all duration-500">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-black to-[#1A1A1A] flex items-center justify-center">
                    <div className="text-[#C6A355] transform group-hover:scale-110 transition-all duration-500">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DFB87A] to-[#C6A355] mb-4 group-hover:scale-105 transition-all duration-500">{feature.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative overflow-hidden">
            <motion.div
              animate={{
                x: [0, -100 + '%']
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                  repeatDelay: 0
                }
              }}
              className="flex gap-4 w-fit"
            >
              {[...Array(8)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-4">
                  {[
                    {
                      icon: <Users className="w-8 h-8" />,
                      title: "Batch Size",
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
                  ].map((feature) => (
                    <div
                      key={`${setIndex}-${feature.title}`}
                      className="bg-[#1A1A1A] rounded-[2rem] p-6 border border-[#333333] text-center min-w-[250px]"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#C6A355]/10 flex items-center justify-center mx-auto mb-4">
                        <div className="text-[#C6A355]">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">{feature.title}</div>
                      <div className="text-gray-400 text-sm">{feature.description}</div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Classes Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1A1A1A]/50 to-black" />
        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <motion.div
                key={classItem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: classImagesLoaded[index] ? 1 : 0, y: classImagesLoaded[index] ? 0 : 20 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-700 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={classItem.image}
                    alt={classItem.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="absolute bottom-6 left-6 z-10">
                    <div className="inline-flex items-center px-4 py-2 rounded-lg bg-black/50 backdrop-blur-md border border-white/5 shadow-lg">
                      <div className="w-1 h-6 bg-[#C6A355] mr-3"></div>
                      <h3 className="text-xl font-medium tracking-wide text-white/95">{classItem.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-300 text-lg mb-8">{classItem.description}</p>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#C6A355]/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-[#C6A355]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Available Schedules</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {classItem.scheduleOptions.map((schedule) => (
                          <span
                            key={schedule}
                            className="px-3 py-1 bg-[#C6A355]/10 text-[#C6A355] text-sm rounded-full"
                          >
                            {schedule}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {classItem.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#C6A355]" />
                        <span className="text-gray-300 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/register"
                    className="block w-full px-8 py-4 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-semibold rounded-full text-lg text-center transition-all duration-300 shadow-lg hover:shadow-[#C6A355]/20"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="relative py-20 mt-4 md:mt-12">
        {/* Background Container */}
        <div className="absolute inset-0 mx-4">
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-black">
              <Image 
                src="/logo.png" 
                alt="Madhur Gurmat Sangeet Vidyala"
                fill
                className="object-cover brightness-75"
                sizes="100vw"
              />
            </div>
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          </div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <div className="text-center bg-black/10 backdrop-blur-sm rounded-[2rem] p-6 md:p-10 border border-white/10 max-w-[90%] md:max-w-2xl mx-auto shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-10">
              Join our classes and begin your musical journey with expert guidance.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-medium text-base md:text-lg w-full sm:w-auto justify-center"
            >
              Register Now <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 