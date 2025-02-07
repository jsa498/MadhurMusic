'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  isHomePage?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
  isHomePage = false,
}: HeroProps) {
  return (
    <section className={`relative ${isHomePage ? 'h-[70vh] md:h-[85vh]' : 'h-[50vh] md:h-[60vh]'} mt-4 md:mt-12`}>
      {/* Background Container */}
      <div className="absolute inset-0 mx-4">
        <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
          {/* Background Image */}
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover scale-100 md:scale-[1.02] object-center md:object-[50%_35%] brightness-75"
            priority
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        </div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`
            text-center 
            bg-black/10 
            backdrop-blur-sm 
            rounded-[2rem] 
            p-8 md:p-10
            border border-white/10 
            max-w-[90%] 
            ${isHomePage ? 'md:max-w-2xl' : 'md:max-w-3xl'}
            mx-auto
            shadow-2xl
          `}
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 drop-shadow-lg"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-center mb-8 md:mb-10 max-w-2xl mx-auto drop-shadow-lg text-gray-100"
          >
            {subtitle}
          </motion.p>

          {/* Button */}
          {buttonText && buttonLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href={buttonLink}
                className="
                  inline-block
                  bg-gradient-to-r from-[#DFB87A] to-[#C6A355]
                  hover:from-[#C6A355] hover:to-[#DFB87A]
                  text-black 
                  px-8 md:px-10 
                  py-3 md:py-4 
                  rounded-full 
                  text-lg md:text-xl
                  font-bold 
                  transition-all 
                  duration-300 
                  hover:shadow-[0_0_30px_rgba(198,163,85,0.3)]
                  transform hover:scale-105
                "
              >
                {buttonText}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 