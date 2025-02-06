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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  // ====== Navbar Hide/Show on Scroll ======
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      
      if (currentScrollY > lastScrollY) {
        if (currentScrollY > 50) {
          setIsVisible(false);
        }
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    bg-black/10 backdrop-blur-lg shadow-lg rounded-full
    ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ====== Logo ====== */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Madhur Gurmat Sangeet Vidyala" 
                width={48} 
                height={48} 
                className="h-12 w-auto" 
              />
            </Link>
          </div>

          {/* ====== Desktop Navigation ====== */}
          <div className="hidden md:flex items-center justify-center space-x-1">
            <AnimatePresence mode="wait">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    relative px-4 py-2 transition-colors rounded-md
                    ${item.path === pathname ? 'text-white' : 'text-white/75'}
                  `}
                  onMouseOver={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(pathname)}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.path === hoveredPath && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-white/10 rounded-md -z-0"
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
              className="px-6 py-2 text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 rounded-full transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          {/* ====== Mobile Menu Button ====== */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-500 transition-colors p-2 relative z-50"
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
              className="bg-black/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
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
                            ? 'text-black font-semibold bg-white/90' 
                            : 'text-white hover:text-orange-500 font-normal'
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
                  <span className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-full">
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