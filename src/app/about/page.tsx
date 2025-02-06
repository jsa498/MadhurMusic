'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative -mt-24 lg:-mt-28 py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/about-bg.jpg"
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
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-center text-white/90">
              Preserving and promoting the rich heritage of Indian classical music through education and performance.
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Blend */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-50 to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-900">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-6">
                  At Madhur Gurmat Sangeet Vidyala, we are dedicated to preserving and promoting the rich tradition of Indian classical music. Our mission is to create a nurturing environment where students can learn, grow, and excel in their musical journey.
                </p>
                <p className="text-gray-600">
                  We believe in providing comprehensive education that covers both theoretical knowledge and practical training, ensuring our students develop a deep understanding and appreciation of this ancient art form.
                </p>
              </div>
              <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-lg">
                <Image
                  src="/mission.jpg"
                  alt="Music class in session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-900">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our teaching and performances.",
                  icon: "🎯"
                },
                {
                  title: "Tradition",
                  description: "We honor and preserve the traditional methods of Indian classical music.",
                  icon: "🏛️"
                },
                {
                  title: "Innovation",
                  description: "We embrace modern teaching methods while respecting traditional values.",
                  icon: "💡"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gradient-to-b from-orange-50 to-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Teachers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Guru Ji",
                    role: "Founder & Principal Teacher",
                    image: "/teacher1.jpg"
                  },
                  {
                    name: "Ustad Sahib",
                    role: "Senior Vocal Teacher",
                    image: "/teacher2.jpg"
                  },
                  {
                    name: "Pandit Ji",
                    role: "Instrumental Teacher",
                    image: "/teacher3.jpg"
                  }
                ].map((teacher, index) => (
                  <motion.div
                    key={teacher.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-6 text-center group hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{teacher.name}</h3>
                    <p className="text-white/80">{teacher.role}</p>
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