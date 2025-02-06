'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
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
              About Our Academy
            </h1>
            <p className="text-xl text-white">
              Preserving and teaching the rich heritage of Indian classical music
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.1 }}
            className="bg-black/50 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#C6A355]/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-6 gold-gradient-text">Our Mission</h2>
                <p className="text-white mb-6">
                  At Madhur Gurmat Sangeet Vidyala, our mission is to preserve and promote the rich heritage of Indian classical music through authentic teaching methods and dedicated mentorship.
                </p>
                <p className="text-white">
                  We strive to create an environment where students can immerse themselves in the traditional art form while developing their musical abilities under expert guidance.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.1 }}
                className="relative h-[400px] rounded-[2rem] overflow-hidden border border-[#C6A355]/20"
              >
                <Image
                  src="/mission.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </motion.div>
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="bg-black/50 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#C6A355]/20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 gold-gradient-text">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Tradition",
                  description: "Upholding the authenticity and purity of classical music traditions"
                },
                {
                  title: "Excellence",
                  description: "Striving for the highest standards in music education and performance"
                },
                {
                  title: "Dedication",
                  description: "Fostering a deep commitment to learning and artistic growth"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-black/40 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#C6A355]/10"
                >
                  <h3 className="text-xl font-semibold mb-4 text-center text-[#DFB87A]">{value.title}</h3>
                  <p className="text-white text-center">{value.description}</p>
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="bg-black/50 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#C6A355]/20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 gold-gradient-text">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Guru Ji",
                  role: "Founder & Principal Instructor",
                  image: "/team/guru.jpg"
                },
                {
                  name: "Dr. Sharma",
                  role: "Senior Instructor",
                  image: "/team/instructor1.jpg"
                },
                {
                  name: "Mrs. Kaur",
                  role: "Vocal Instructor",
                  image: "/team/instructor2.jpg"
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-black/40 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#C6A355]/10"
                >
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#C6A355]/50">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center text-[#DFB87A]">{member.name}</h3>
                  <p className="text-white text-center">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 