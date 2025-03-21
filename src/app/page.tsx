'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Music, ChevronRight, Award, BookOpen } from 'lucide-react';
import HeroSection from '@/components/ui/hero-section';
import { useImageLoad } from '@/hooks/useImageLoad';

export default function Home() {
  const storyImageLoaded = useImageLoad('/Mgsv photos/mission.jpeg');

  const firstClassImageLoaded = useImageLoad('/Mgsv photos/IMG_7860.JPG');
  const secondClassImageLoaded = useImageLoad('/Mgsv photos/IMG_5002.PNG');
  const thirdClassImageLoaded = useImageLoad('/Mgsv photos/IMG_7861.JPG');

  const classImagesLoaded = [firstClassImageLoaded, secondClassImageLoaded, thirdClassImageLoaded];
  const classImages = [
    '/Mgsv photos/IMG_7860.JPG',
    '/Mgsv photos/IMG_5002.PNG',
    '/Mgsv photos/IMG_7861.JPG'
  ];

  // Type the ref as HTMLDivElement.
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [carouselWidth, setCarouselWidth] = useState(0);
  // Use a motion value to track the x position.
  const x = useMotionValue(0);

  useEffect(() => {
    if (carouselContainerRef.current) {
      // Since the content is duplicated (using [...Array(2)]), one full cycle is half the scrollWidth.
      const totalWidth = carouselContainerRef.current.scrollWidth / 2;
      setCarouselWidth(totalWidth);
      // Start the auto-play animation from x = 0 to -totalWidth with duration 140.
      controls.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            duration: 140,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        }
      });
    }
    // Removed carouselContainerRef.current from dependency array.
  }, [controls]);

  const handleDragEnd = () => {
    const currentX = x.get();
    // Immediately set the motion value to the current x to prevent any overshoot.
    x.set(currentX);
    // Restart auto-play after a slight delay with duration 140.
    setTimeout(() => {
      controls.start({
        x: [currentX, currentX - carouselWidth],
        transition: {
          x: {
            duration: 140,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        }
      });
    }, 300);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <HeroSection
        isHomePage
        title="MGS VIDYALA"
        subtitle="Discover the rich heritage of Gurmat Sangeet through expert guidance and traditional teaching methods"
        backgroundImage="/hero-bg.jpg"
        buttonText="Start Your Journey"
        buttonLink="/register"
        priority={true}
      />

      {/* About Preview Section */}
      <section className="relative py-24">
        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: storyImageLoaded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 max-w-xl"
              >
                <h2 className="text-5xl font-bold bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent">
                  Our Story
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  With over 20 years of experience, we&apos;ve guided hundreds of students in mastering Gurmat Sangeet through authentic teaching methods and dedicated mentorship.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-xl p-6 border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-[#C6A355] mb-2">500+</div>
                    <div className="text-gray-300 text-lg">Students Taught</div>
                  </div>
                  <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-xl p-6 border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-[#C6A355] mb-2">20+</div>
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
                  animate={{ opacity: storyImageLoaded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[300px] md:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-700 group shadow-2xl"
                >
                  <Image
                    src="/Mgsv photos/IMG-20200226-WA0131.JPG"
                    alt="Our Story"
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
                  animate={{ opacity: storyImageLoaded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[300px] md:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-700 group shadow-2xl"
                >
                  <Image
                    src="/Mgsv photos/IMG-20180806-WA0021.jpeg"
                    alt="Our Story"
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

      {/* Photo Gallery Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent mb-6">
              Our Gallery
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Glimpses of our vibrant community and musical journey
            </p>
          </motion.div>

          <div 
            className="relative overflow-hidden cursor-grab active:cursor-grabbing"
            ref={carouselContainerRef}
          >
            <motion.div
              drag="x"
              dragMomentum={false}
              dragConstraints={{ left: -carouselWidth, right: 0 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileTap={{ cursor: "grabbing" }}
              onDragStart={() => controls.stop()}
              onDragEnd={handleDragEnd}
              style={{ x }}
              animate={controls}
              className="flex gap-6 w-fit will-change-transform"
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6">
                  {[
                    "/Mgsv photos/1.png",
                    "/Mgsv photos/2.png",
                    "/Mgsv photos/3.png",
                    "/Mgsv photos/6.jpg",
                    "/Mgsv photos/86004a69-c3a3-4b08-8632-fa9f46e3e2b9.jpg",
                    "/Mgsv photos/h.JPG",
                    "/Mgsv photos/IMG-20180806-WA0021.jpeg",
                    "/Mgsv photos/IMG_5904.jpg",
                    "/Mgsv photos/IMG-20190810-WA0020.JPG",
                    "/Mgsv photos/IMG-20200226-WA0021.JPG",
                    "/Mgsv photos/IMG-20200226-WA0086.JPG",
                    "/Mgsv photos/IMG-20200226-WA0122.JPG",
                    "/Mgsv photos/IMG-20200226-WA0123.JPG",
                    "/Mgsv photos/IMG-20200226-WA0131.JPG",
                    "/Mgsv photos/IMG_7914.jpg",
                    "/Mgsv photos/IMG_0378.jpg",
                    "/Mgsv photos/IMG_5977.jpg",
                    "/Mgsv photos/IMG_0379.jpg",
                    "/Mgsv photos/IMG_0380.jpg",
                    "/Mgsv photos/IMG_5980.jpg",
                    "/Mgsv photos/IMG_5984.jpg",
                    "/Mgsv photos/IMG_6144.jpeg",
                    "/Mgsv photos/IMG_5985.jpg",
                    "/Mgsv photos/IMG_5988.jpg",
                    "/Mgsv photos/IMG_6145.jpeg",
                    "/Mgsv photos/IMG_0385.jpg",
                    "/Mgsv photos/IMG_6147.jpeg",
                    "/Mgsv photos/IMG_0386.jpg",
                    "/Mgsv photos/IMG_6148.jpeg",
                    "/Mgsv photos/IMG_0387.jpg",
                    "/Mgsv photos/IMG_6149.jpeg",
                    "/Mgsv photos/IMG_0388.jpg",
                    "/Mgsv photos/IMG_0389.jpg",
                    "/Mgsv photos/IMG_0390.jpg",
                    "/Mgsv photos/IMG_0391.jpg",
                    "/Mgsv photos/IMG_0392.jpg",
                    "/Mgsv photos/IMG_0393.jpg",
                    "/Mgsv photos/IMG_0394.jpg",
                    "/Mgsv photos/IMG_0395.jpg",
                    "/Mgsv photos/IMG_4057.PNG",
                    "/Mgsv photos/IMG_5001.PNG",
                    "/Mgsv photos/IMG_5002.PNG",
                    "/Mgsv photos/IMG_5037.JPG",
                    "/Mgsv photos/IMG_5041.JPG",
                    "/Mgsv photos/IMG_5611.JPG",
                    "/Mgsv photos/IMG_7836.JPG",
                    "/Mgsv photos/IMG_7837.JPG",
                    "/Mgsv photos/IMG_7860.JPG",
                    "/Mgsv photos/IMG_7861.JPG",
                    "/Mgsv photos/mission.jpeg"
                  ].map(image => (
                    <div
                      key={`${setIndex}-${image}`}
                      className="relative w-[450px] h-[300px] rounded-[2rem] overflow-hidden border border-[#333333] group"
                    >
                      <Image
                        src={image}
                        alt="Gallery Image"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="450px"
                        loading={image === "/Mgsv photos/IMG_7914.jpg" ? "eager" : "lazy"}
                        priority={image === "/Mgsv photos/IMG_7914.jpg"}
                        quality={image === "/Mgsv photos/IMG_7914.jpg" ? 100 : 75}
                        onError={() => {
                          console.error(`Error loading image ${image}`);
                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded image ${image}`);
                        }}
                        style={
                          image === "/Mgsv photos/h.JPG" ? {
                            objectFit: "cover",
                            scale: "1",
                            objectPosition: "center 20%"
                          } : image === "/Mgsv photos/IMG_0378.jpg" ? {
                            objectFit: "cover",
                            scale: "1",
                            objectPosition: "center 30%"
                          } : image === "/Mgsv photos/IMG_7914.jpg" ? {
                            objectFit: "cover",
                            scale: "1.2",
                            objectPosition: "center 40%",
                            width: "100%",
                            height: "100%",
                            transform: "scale(1) translateY(-5%)"
                          } : image === "/Mgsv photos/IMG_6145.jpeg" ? {
                            objectFit: "cover",
                            scale: "1",
                            objectPosition: "center 50%",
                            width: "100%",
                            height: "100%",
                            transform: "scale(1) translateY(0%)"
                          } : image === "/Mgsv photos/IMG_6147.jpeg" ? {
                            objectFit: "cover",
                            scale: "1",
                            objectPosition: "center 40%",
                            width: "100%",
                            height: "100%",
                            transform: "scale(1) translateY(0%)"
                          } : image === "/Mgsv photos/IMG_5988.jpg" ? {
                            objectFit: "cover",
                            scale: "1.1",
                            objectPosition: "center 40%",
                            width: "100%",
                            height: "100%",
                            transform: "scale(1.2) translateY(-12%)"
                          } : image === "/Mgsv photos/IMG_5985.jpg" ? {
                            objectFit: "cover",
                            scale: "1.2",
                            objectPosition: "center 40%",
                            width: "100%",
                            height: "100%",
                            transform: "scale(1.1) translateY(-10%)"
                          } : undefined
                        }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classes Preview Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1A1A1A]/50 to-black" />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent mb-6">
              Our Classes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of classes designed to nurture your musical journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Tanti Saaj",
                icon: <Music className="w-8 h-8" />,
                description: "Master the fundamentals of Gurmat Sangeet string instruments with comprehensive training in ragas, taal, and traditional techniques.",
                image: classImages[0],
                objectPosition: "center 59%"
              },
              {
                title: "Gurmat Kirtan",
                icon: <BookOpen className="w-8 h-8" />,
                description: "Learn the sacred art of Gurmat Kirtan with proper techniques and understanding of ragas, from basic compositions to advanced kirtans.",
                image: classImages[1],
                objectPosition: "center 80%"
              },
              {
                title: "Tabla",
                icon: <Award className="w-8 h-8" />,
                description: "Discover the rhythmic world of tabla through systematic training in various taals and traditional compositions.",
                image: classImages[2],
                objectPosition: "center 70%"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: classImagesLoaded[index] ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#1A1A1A]/80 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-700"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectPosition: item.objectPosition }}
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="inline-flex items-center px-4 py-2 rounded-lg bg-black/50 backdrop-blur-md border border-white/5 shadow-lg">
                        <div className="w-1 h-6 bg-[#C6A355] mr-3"></div>
                        <h3 className="text-xl font-medium tracking-wide text-white/95">
                          {item.title}
                        </h3>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments Preview Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-[#1A1A1A]/80 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent mb-4">
                  Traditional Instruments
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  From Tanpuras to Tablas, discover our curated collection of premium Indian classical instruments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/instruments"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A355]/20 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#C6A355] text-[#C6A355] hover:bg-[#C6A355]/10 rounded-xl transition-all duration-300"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['Tanpura', 'Tabla', 'Dilruba', 'Harmonium'].map(instrument => (
                  <div
                    key={instrument}
                    className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-[#333333] hover:border-[#C6A355]/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#C6A355]/10 group-hover:bg-[#C6A355] flex items-center justify-center mb-3 transition-all duration-300">
                      <Music className="w-5 h-5 text-[#C6A355] group-hover:text-black transition-colors duration-300" />
                    </div>
                    <p className="text-white text-sm font-medium group-hover:text-[#DFB87A] transition-colors duration-300">
                      {instrument}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section className="relative py-20 mt-4 md:mt-12">
        <div className="absolute inset-0 mx-4">
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
            <div className="absolute inset-0 bg-black">
              <Image 
                src="/logo.png" 
                alt="Madhur Gurmat Sangeet Vidyala"
                fill
                className="object-cover brightness-75"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <div className="text-center bg-black/10 backdrop-blur-sm rounded-[2rem] p-6 md:p-10 border border-white/10 max-w-[90%] md:max-w-2xl mx-auto shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to Begin Your Musical Journey?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-10">
              Join our community and experience the difference of learning with dedicated professionals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/register" 
                className="inline-flex items-center px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-medium text-base md:text-lg w-full sm:w-auto justify-center"
              >
                Register Now <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 md:px-8 py-2.5 md:py-3 rounded-full border border-[#DFB87A] text-[#DFB87A] hover:bg-[#DFB87A]/10 transition-colors text-base md:text-lg w-full sm:w-auto justify-center"
              >
                Contact Us <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
