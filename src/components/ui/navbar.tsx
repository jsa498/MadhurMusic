'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  // ====== State Management ======
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  // ====== Body Scroll Lock for Mobile Menu ======
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // ====== Update Hovered Path when Route Changes ======
  useEffect(() => {
    setHoveredPath(pathname);
  }, [pathname]);

  // ====== Navigation Items ======
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/courses', name: 'Courses' },
    { path: '/register', name: 'Register' },
    { path: '/contact', name: 'Contact' }
  ];

  // ====== Dynamic Navbar Classes ======
  const navClasses = `
    fixed z-[100] transition-all duration-300 
    w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] 
    left-1/2 -translate-x-1/2 top-2 lg:top-4
    bg-black/10 backdrop-blur-xl shadow-lg rounded-full border border-[#C6A355]/20
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ====== Logo ====== */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C6A355]/50">
                <Image 
                  src="/logo.png" 
                  alt="Madhur Gurmat Sangeet Vidyala" 
                  width={48} 
                  height={48}
                  className="object-cover scale-150"
                  priority 
                />
              </div>
            </Link>
          </div>

          {/* ====== Desktop Navigation ====== */}
          <div className="hidden md:flex items-center justify-center space-x-1">
            <AnimatePresence mode="sync">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    relative px-4 py-2 transition-colors rounded-md
                    ${item.path === pathname ? 'text-[#DFB87A]' : 'text-[#C6A355]'}
                    hover:text-[#DFB87A]
                  `}
                  onMouseOver={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(pathname)}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.path === hoveredPath && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-[#C6A355]/10 rounded-md -z-0"
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.5,
                      }}
                    />
                  )}
                </Link>
              ))}
            </AnimatePresence>
          </div>

          {/* ====== Desktop CTA Button ====== */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/register"
              className="px-6 py-2 text-black bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-[#C6A355]/20 hover:scale-105"
            >
              Enroll Now
            </Link>
          </div>

          {/* ====== Mobile Menu Button ====== */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#C6A355] hover:text-[#DFB87A] transition-colors p-2 relative z-50"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ====== Mobile Navigation Dropdown ====== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 md:hidden"
          >
            <motion.div
              className="bg-black/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-[#C6A355]/20"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <div className="flex flex-col p-6 space-y-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center"
                    >
                      <span
                        className={`
                          px-6 py-2 text-lg transition-all duration-300 rounded-full
                          ${isActive 
                            ? 'text-black font-semibold bg-gradient-to-r from-[#DFB87A] to-[#C6A355]' 
                            : 'text-[#C6A355] hover:text-[#DFB87A] font-normal'
                          }
                        `}
                      >
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center"
                >
                  <span className="px-6 py-2 text-lg font-semibold text-black bg-gradient-to-r from-[#DFB87A] to-[#C6A355] rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Enroll Now
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 