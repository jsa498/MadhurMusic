'use client';

import { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Music, ChevronRight, Award, BookOpen } from 'lucide-react';
import HeroSection from '@/components/ui/hero-section';

function GalleryImage({ image, setIndex }: { image: string; setIndex: number }) {
  return (
    <div
      key={`${setIndex}-${image}`}
      className="relative w-[450px] h-[300px] rounded-[2rem] overflow-hidden border border-[#333333] group"
    >
      <Image
        src={image}
        alt="Gallery Image"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 450px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

function LoadingCard() {
  return (
    <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-[#333333] animate-pulse">
      <div className="h-56 bg-gray-800" />
      <div className="p-8 space-y-4">
        <div className="h-4 bg-gray-800 rounded w-3/4" />
        <div className="h-4 bg-gray-800 rounded w-1/2" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Suspense fallback={<div className="h-[85vh] bg-gray-900 animate-pulse" />}>
        <HeroSection
          isHomePage
          title="MADHUR GURMAT"
          subtitle="Discover the rich heritage of Indian classical music through expert guidance and traditional teaching methods"
          backgroundImage="/hero-bg.jpg"
          buttonText="Start Your Journey"
          buttonLink="/register"
        />
      </Suspense>

      {/* About Preview Section */}
      <AnimatePresence>
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative py-24"
        >
          <div className="container relative mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-5xl font-bold bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent">Our Story</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  With over 20 years of experience, we&apos;ve guided hundreds of students in mastering Indian classical music through authentic teaching methods and dedicated mentorship.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-[#C6A355] mb-3">500+</div>
                    <div className="text-gray-300 text-lg">Students Taught</div>
                  </div>
                  <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-[#C6A355] mb-3">20+</div>
                    <div className="text-gray-300 text-lg">Years Experience</div>
                  </div>
                </div>
                <Link 
                  href="/about" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A355]/20 transform hover:scale-105"
                >
                  Discover Our Legacy
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3 }}
                className="relative h-[400px] rounded-[2.5rem] overflow-hidden border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300 group shadow-2xl"
              >
                <Image
                  src="/Mgsv photos/mission.jpeg"
                  alt="Our Story"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </motion.div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Photo Gallery Carousel */}
      <AnimatePresence>
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative py-20 overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent mb-6">Our Gallery</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Glimpses of our vibrant community and musical journey
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ x: 0 }}
                animate={{
                  x: [0, -200 + '%'],
                }}
                transition={{
                  x: {
                    duration: 240,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }
                }}
                className="flex gap-6 w-fit"
              >
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-6">
                    {[
                      "/Mgsv photos/3.png",
                      "/Mgsv photos/2.png",
                      "/Mgsv photos/1.png",
                      "/Mgsv photos/IMG_7837.JPG",
                      "/Mgsv photos/IMG_7836.JPG",
                      "/Mgsv photos/mission.jpeg",
                      "/Mgsv photos/6.jpg",
                      "/Mgsv photos/c3f107bf-f274-43a9-b6e2-ecdc7b3db2f6.jpg",
                      "/Mgsv photos/IMG_5611.JPG",
                      "/Mgsv photos/IMG_5041.JPG",
                      "/Mgsv photos/IMG_5037.JPG",
                      "/Mgsv photos/IMG_5002.PNG",
                      "/Mgsv photos/IMG_5001.PNG",
                      "/Mgsv photos/IMG_4057.PNG",
                      "/Mgsv photos/IMG-20200226-WA0131.JPG",
                      "/Mgsv photos/IMG-20200226-WA0122.JPG",
                      "/Mgsv photos/IMG-20200226-WA0123.JPG",
                      "/Mgsv photos/IMG-20200226-WA0086.JPG",
                      "/Mgsv photos/IMG-20200226-WA0021.JPG",
                      "/Mgsv photos/IMG-20190810-WA0020.JPG",
                      "/Mgsv photos/3e2dcedb-0315-4065-873c-10fed4345d36.jpg",
                      "/Mgsv photos/86004a69-c3a3-4b08-8632-fa9f46e3e2b9.jpg"
                    ].map((image) => (
                      <GalleryImage key={`${setIndex}-${image}`} image={image} setIndex={setIndex} />
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Classes Preview Section */}
      <AnimatePresence>
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative py-20"
        >
          <Suspense fallback={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </div>
          }>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1A1A1A]/50 to-black" />
            <div className="container relative mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent mb-6">Our Classes</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose from our comprehensive range of classes designed to nurture your musical journey
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: "Tanti Saaj",
                    icon: <Music className="w-8 h-8" />,
                    description: "Master the fundamentals of Indian classical string instruments with comprehensive training in ragas, taal, and traditional techniques.",
                    image: "/Mgsv photos/IMG_5611.JPG"
                  },
                  {
                    title: "Gurmat Kirtan",
                    icon: <BookOpen className="w-8 h-8" />,
                    description: "Learn the sacred art of Gurmat Kirtan with proper techniques and understanding of ragas, from basic compositions to advanced kirtans.",
                    image: "/Mgsv photos/c3f107bf-f274-43a9-b6e2-ecdc7b3db2f6.jpg"
                  },
                  {
                    title: "Tabla",
                    icon: <Award className="w-8 h-8" />,
                    description: "Discover the rhythmic world of tabla through systematic training in various taals and traditional compositions.",
                    image: "/Mgsv photos/IMG_5002.PNG"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group bg-[#1A1A1A]/80 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-6 right-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-lg bg-black/50 backdrop-blur-md border border-white/5 shadow-lg">
                          <div className="w-1 h-6 bg-[#C6A355] mr-3"></div>
                          <h3 className="text-xl font-medium tracking-wide text-white/95">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-300 text-lg mb-6">{item.description}</p>
                      <div className="flex justify-center">
                        <Link
                          href="/classes"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-[#C6A355]/20"
                        >
                          View All Classes
                          <ChevronRight className="w-5 h-5 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Suspense>
        </motion.section>
      </AnimatePresence>

      {/* Registration CTA Section */}
      <AnimatePresence>
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative py-20 mt-4 md:mt-12"
        >
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
            <div className="text-center bg-black/10 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 border border-white/10 max-w-[90%] md:max-w-2xl mx-auto shadow-2xl">
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to Begin Your Musical Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Join our community and experience the difference of learning with dedicated professionals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/register" 
                  className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-medium"
                >
                  Register Now <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-3 rounded-full border border-[#DFB87A] text-[#DFB87A] hover:bg-[#DFB87A]/10 transition-colors"
                >
                  Contact Us <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}

