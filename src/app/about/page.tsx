'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Music, Award, Users } from 'lucide-react';

export default function About() {
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
                Our Story
              </h1>
              <p className="text-xl text-gray-300">
                Preserving and teaching the rich heritage of Indian classical music for generations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1A1A1A] rounded-[2.5rem] p-10 border border-[#333333]"
            >
              <h2 className="text-4xl font-bold mb-8 text-white">Our Mission</h2>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  At Madhur Gurmat Sangeet Vidyala, our mission is to preserve and promote the rich heritage of Indian classical music through authentic teaching methods and dedicated mentorship.
                </p>
                <p className="text-gray-300 text-lg">
                  We strive to create an environment where students can immerse themselves in the traditional art form while developing their musical abilities under expert guidance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-[#333333]"
            >
              <Image
                src="/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
              { number: "500+", label: "Students Taught", icon: <Users className="w-8 h-8" /> },
              { number: "50+", label: "Expert Instructors", icon: <GraduationCap className="w-8 h-8" /> },
              { number: "100%", label: "Dedication", icon: <Music className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-[2rem] p-8 border border-[#333333] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#C6A355] flex items-center justify-center mx-auto mb-6">
                  <div className="text-black">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
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
                name: "Guru Ji",
                role: "Founder & Principal Instructor",
                bio: "A master of traditional Indian classical music with over 20 years of teaching experience.",
                image: "/team/guru.jpg"
              },
              {
                name: "Dr. Sharma",
                role: "Senior Vocal Instructor",
                bio: "Specializes in classical vocal training and has trained numerous professional singers.",
                image: "/team/instructor1.jpg"
              },
              {
                name: "Mrs. Kaur",
                role: "Instrumental Instructor",
                bio: "Expert in multiple traditional instruments with a passion for teaching young musicians.",
                image: "/team/instructor2.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-[2rem] p-8 border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300"
              >
                <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-2 border-[#C6A355]/50">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white text-center">{member.name}</h3>
                <p className="text-[#C6A355] mb-4 text-center text-lg">{member.role}</p>
                <p className="text-gray-400 text-center text-lg">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-[2rem] p-8 border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#C6A355] text-center">{value.title}</h3>
                <p className="text-gray-400 text-center text-lg">{value.description}</p>
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
              Start Your Journey With Us
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join our community and experience the difference of learning with dedicated professionals.
            </p>
            <button className="px-10 py-4 bg-[#C6A355] hover:bg-[#DFB87A] text-black text-lg font-semibold rounded-full transition-all duration-300">
              Book a Free Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 