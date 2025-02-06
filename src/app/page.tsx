'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
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
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white" />
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 max-w-4xl mx-auto shadow-2xl border border-[#C6A355]">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center gold-gradient-text">
              MADHUR GURMAT
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center text-black">
              Discover the rich heritage of Indian classical music through expert guidance and traditional teaching methods
            </p>
            <div className="text-center">
              <Link href="/register" className="gold-button">
                Start Your Journey
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#C6A355]"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gold-gradient-text">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Instructors",
                  description: "Learn from experienced teachers who are masters in traditional Indian classical music",
                  icon: "🎵"
                },
                {
                  title: "Comprehensive Curriculum",
                  description: "Structured learning path covering theory, practice, and performance aspects",
                  icon: "📚"
                },
                {
                  title: "Personalized Attention",
                  description: "Small batch sizes ensuring individual attention and faster progress",
                  icon: "👤"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white backdrop-blur-sm rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-[#C6A355]"
                >
                  <div className="bg-gradient-to-br from-[#DFB87A] to-[#C6A355] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-[#C6A355]">{feature.title}</h3>
                  <p className="text-black text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C6A355] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#DFB87A] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#C6A355] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-lg rounded-[2.5rem] p-12 relative overflow-hidden border border-[#C6A355]"
          >
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gold-gradient-text">
                Begin Your Musical Journey Today
              </h2>
              <p className="text-xl mb-12 text-black">
                Join our community of passionate learners and start your journey in Indian classical music
              </p>
              <Link href="/register" className="gold-button">
                Enroll Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
