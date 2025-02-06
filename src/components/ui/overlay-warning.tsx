'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OverlayWarning() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('devfloe-warning-accepted');
    if (accepted === 'true') {
      setHasAccepted(true);
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('devfloe-warning-accepted', 'true');
    setHasAccepted(true);
    setIsVisible(false);
  };

  if (!isVisible || hasAccepted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black/80 rounded-[2.5rem] p-8 md:p-12 max-w-2xl mx-auto border border-[#C6A355]/20 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 gold-gradient-text">
              Welcome DevFloe Customer!
            </h2>
            <div className="space-y-4 text-white mb-8">
              <p>
                This website is currently under development and is not ready for release.
                This is a template version that requires further updates and customization.
              </p>
              <p>
                Please note that some features may be incomplete or subject to change.
                Would you like to proceed and view the website in its current state?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleAccept}
                className="gold-button"
              >
                Yes, Let Me See
              </button>
              <a
                href="https://devfloe.com"
                className="px-6 py-2 rounded-full border border-[#C6A355] text-[#DFB87A] hover:bg-[#C6A355]/10 transition-colors"
              >
                Return to DevFloe
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 