'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Music, Award, Users, Clock } from 'lucide-react';
import HeroSection from '@/components/ui/hero-section';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useImageLoad } from '@/hooks/useImageLoad';

export default function About() {
  const missionImageLoaded = useImageLoad('/Mgsv photos/IMG-20180806-WA0021.jpeg');

  return (
    <div className="min-h-screen bg-black">
      <HeroSection
        title="Our Story"
        subtitle="Preserving and teaching the rich heritage of Gurmat Sangeet for generations"
        backgroundImage="/hero-bg.jpg"
      />

      {/* Mission Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: missionImageLoaded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 max-w-xl"
              >
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent">Our Mission</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-1.5 h-8 bg-[#C6A355] rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-[#C6A355]">Heritage</h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Preserving and promoting the rich heritage of Gurmat Sangeet through authentic teaching methods and dedicated mentorship.
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 mt-8">
                    <div className="w-1.5 h-8 bg-[#C6A355] rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-[#C6A355]">Environment</h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Creating an immersive space where students develop their musical abilities under expert guidance.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: missionImageLoaded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[300px] md:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-700 group shadow-2xl"
                >
                  <Image
                    src="/Mgsv photos/IMG-20180806-WA0021.jpeg"
                    alt="Our Mission"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 50vw"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: missionImageLoaded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[300px] md:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-700 group shadow-2xl"
                >
                  <Image
                    src="/Mgsv photos/IMG-20200226-WA0131.JPG"
                    alt="Our Mission"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 50vw"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {[
              { 
                number: "20+", 
                label: "Years Experience", 
                icon: <Award className="w-8 h-8" />,
                description: "Decades of teaching excellence"
              },
              { 
                number: "500+", 
                label: "Students Taught", 
                icon: <Users className="w-8 h-8" />,
                description: "Building a thriving community"
              },
              { 
                number: "Flexible", 
                label: "Class Timings", 
                icon: <Clock className="w-8 h-8" />,
                description: "Learn at your convenience"
              },
              { 
                number: "100%", 
                label: "Dedication", 
                icon: <Music className="w-8 h-8" />,
                description: "Committed to student success"
              }
            ].map((stat, _) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: _ * 0.1 }}
                className="bg-[#1A1A1A] rounded-[2rem] p-8 border border-[#333333] text-center hover:border-[#C6A355]/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#C6A355]/10 group-hover:bg-[#C6A355] flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                  <div className="text-[#C6A355] group-hover:text-black transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#C6A355] transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-400 text-lg font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
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
                      number: "20+", 
                      label: "Years Experience", 
                      icon: <Award className="w-8 h-8" />,
                      description: "Decades of teaching excellence"
                    },
                    { 
                      number: "500+", 
                      label: "Students Taught", 
                      icon: <Users className="w-8 h-8" />,
                      description: "Building a thriving community"
                    },
                    { 
                      number: "Flexible", 
                      label: "Class Timings", 
                      icon: <Clock className="w-8 h-8" />,
                      description: "Learn at your convenience"
                    },
                    { 
                      number: "100%", 
                      label: "Dedication", 
                      icon: <Music className="w-8 h-8" />,
                      description: "Committed to student success"
                    }
                  ].map((stat) => (
                    <div
                      key={`${setIndex}-${stat.label}`}
                      className="bg-[#1A1A1A] rounded-[2rem] p-6 border border-[#333333] text-center min-w-[250px]"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#C6A355]/10 flex items-center justify-center mx-auto mb-4">
                        <div className="text-[#C6A355]">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-400 text-base font-medium mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-500">{stat.description}</div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Meet Our Expert Instructors
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Manjit Singh",
                role: "PRINCIPAL INSTRUCTOR",
                bio: "A master of Gurmat Sangeet with over 20 years of teaching experience.",
                image: "/Mgsv photos/IMG_7836.JPG"
              },
              {
                name: "Hargun Singh",
                role: "FOUNDER & INSTRUCTOR",
                bio: "Expert in multiple traditional instruments with a passion for teaching young musicians.",
                image: "/Mgsv photos/IMG_8107.JPG",
                objectPosition: "50% 73%",
                scale: 1.2
              },
              {
                name: "Gurnoor Singh",
                role: "SENIOR INSTRUCTOR",
                bio: "Expert in multiple traditional instruments with a passion for teaching young musicians.",
                image: "/Mgsv photos/IMG_7837.JPG"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "tween",
                  ease: "easeOut"
                }}
                className="relative h-[400px] rounded-[2.5rem] overflow-hidden group"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  style={{ 
                    objectPosition: member.objectPosition || "center center",
                    transform: `scale(${member.scale || 1})`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    {/* Name with vertical line */}
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-1 h-6 bg-[#C6A355]" />
                      <h3 className="text-xl font-medium text-white/95">{member.name}</h3>
                    </div>
                    
                    {/* Role */}
                    <p className="text-sm font-medium text-white/90 tracking-wide mb-2">{member.role}</p>
                    
                    {/* Bio */}
                    <p className="text-white/80 text-sm italic leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tradition",
                description: "Upholding the authenticity and purity of classical music traditions passed down through generations."
              },
              {
                title: "Excellence",
                description: "Striving for the highest standards in music education and performance through rigorous training."
              },
              {
                title: "Dedication",
                description: "Fostering a deep commitment to learning and artistic growth in every student we teach."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="bg-[#1A1A1A] rounded-[2rem] p-8 border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-700"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#C6A355] text-center">{value.title}</h3>
                <p className="text-gray-400 text-center text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Start Your Journey With Us
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-10">
              Join our community and experience the difference of learning with dedicated professionals.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-medium text-base md:text-lg"
            >
              Register Now <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 