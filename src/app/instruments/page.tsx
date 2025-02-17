'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Music, X } from 'lucide-react';

export default function Instruments() {
  const [selectedInstrument, setSelectedInstrument] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });

  const instruments = [
    { 
      id: 'tanpura', 
      name: 'Tanpura', 
      description: 'Traditional drone instrument essential for Indian classical music',
      longDescription: 'The Tanpura is a long-necked plucked string instrument that provides the harmonic drone for other instruments or vocals in Indian classical music. Its rich, resonant sound creates the foundation for musical performances.'
    },
    { 
      id: 'tabla', 
      name: 'Tabla', 
      description: 'Pair of hand drums central to Indian classical music',
      longDescription: 'The Tabla is a pair of hand drums that are the principal percussion instrument in Hindustani classical music. The right drum (dahina) provides the main rhythmic beats while the left drum (bayan) provides bass.'
    },
    { 
      id: 'dilruba', 
      name: 'Dilruba', 
      description: 'Bowed string instrument with a distinctive sound',
      longDescription: 'The Dilruba is a bowed string instrument that combines the properties of a sitar and sarangi. It produces a soulful, melodious sound perfect for both solo performances and accompaniment.'
    },
    { 
      id: 'harmonium', 
      name: 'Harmonium', 
      description: 'Reed organ commonly used in devotional music',
      longDescription: 'The Harmonium is a free-standing keyboard instrument that produces sound with a bellows-driven reed organ. It is widely used in Indian classical and devotional music, providing both melodic and harmonic support.'
    },
    { 
      id: 'rabab', 
      name: 'Rabab', 
      description: 'Ancient stringed instrument with historical significance',
      longDescription: 'The Rabab is a lute-like instrument with a deep, warm tone. It has historical significance in Sikh musical traditions and is particularly associated with the performance of Gurbani Kirtan.'
    },
    { 
      id: 'saranda', 
      name: 'Saranda', 
      description: 'Bowed string instrument from Punjab',
      longDescription: 'The Saranda is a bowed string instrument traditionally used in Punjab. It has a rich, resonant sound and is particularly suited for accompanying vocal music and folk traditions.'
    },
    { 
      id: 'taus', 
      name: 'Taus', 
      description: 'Peacock-shaped bowed string instrument of Sikh heritage',
      longDescription: 'The Taus, meaning peacock, is a unique bowed string instrument shaped like a peacock. It was created during the time of the Sikh Gurus and produces a deep, resonant sound similar to the human voice.'
    },
    { 
      id: 'esraj', 
      name: 'Esraj', 
      description: 'Elegant bowed instrument combining sitar and violin elements',
      longDescription: 'The Esraj is a bowed instrument that combines elements of the sitar and violin. It produces a sweet, melodious sound and is particularly well-suited for performing classical ragas and devotional music.'
    },
    { 
      id: 'sarangi', 
      name: 'Sarangi', 
      description: 'Versatile bowed instrument known for emotional expression',
      longDescription: 'The Sarangi is a bowed string instrument known for its ability to closely imitate the human voice. It has a rich, haunting tone and is considered one of the most expressive instruments in Indian classical music.'
    },
    { 
      id: 'swarmandal', 
      name: 'Swarmandal', 
      description: 'Multi-stringed harp used for melodic accompaniment',
      longDescription: 'The Swarmandal is a small harp-like instrument used primarily to accompany classical vocal music. It provides melodic accompaniment and helps maintain pitch accuracy during performances.'
    },
    { 
      id: 'violin', 
      name: 'Violin', 
      description: 'Adapted Western instrument integral to Indian classical music',
      longDescription: 'The Violin, though originally Western, has been beautifully adapted to Indian classical music. Its versatility allows for the intricate gamakas and ornamentations essential to Indian ragas.'
    },
    { 
      id: 'tarshenai', 
      name: 'Tarshenai', 
      description: 'The Tar Shehnai is a higher-pitched variation of the traditional shehnai, known for its shriller and more delicate sound',
      longDescription: 'The Tarshenai is a double-reed wind instrument with a distinctive timbre. It has a rich heritage in Indian classical music and is particularly effective in conveying the emotional depth of ragas.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const selectedInstrumentName = instruments.find(i => i.id === selectedInstrument)?.name;
    const message = `Hi, my name is ${formData.name}. I'm interested in reserving a ${selectedInstrumentName} when available. You can contact me at ${formData.phone}.`;
    
    // Format phone number and create SMS link
    const cleanPhone = '+16047007466';
    const encodedMessage = encodeURIComponent(message);
    const messageUrl = `sms:${cleanPhone}${/iPhone|iPad|iPod/i.test(navigator.userAgent) ? '&' : '?'}body=${encodedMessage}`;
    
    window.location.href = messageUrl;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] mt-4 md:mt-12">
        {/* Background Container */}
        <div className="absolute inset-0 mx-4">
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-black">
              <Image 
                src="/hero-bg.jpg"
                alt="Instruments Background"
                fill
                className="object-cover brightness-50"
                sizes="100vw"
                priority
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] bg-clip-text text-transparent">
              Traditional Instruments
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover our curated collection of premium Indian classical instruments. 
              Learn about each instrument and begin your musical journey with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instruments Grid Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {instruments.map((instrument, index) => (
              <motion.div
                key={instrument.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="group relative"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#DFB87A]/5 to-[#C6A355]/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card Content */}
                <div className="relative bg-[#1A1A1A]/90 backdrop-blur-xl rounded-[2rem] p-8 border border-[#333333] group-hover:border-[#C6A355]/50 transition-all duration-500 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#C6A355]/10 group-hover:bg-[#C6A355] flex items-center justify-center mx-auto mb-6 transition-all duration-500 transform group-hover:rotate-12">
                    <Music className="w-8 h-8 text-[#C6A355] group-hover:text-black transition-colors duration-500" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-center flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#DFB87A] transition-colors duration-300">
                      {instrument.name}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      {instrument.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col space-y-3 mt-auto">
                    <Link
                      href="/register"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A355]/20 transform hover:scale-105"
                    >
                      Learn This Instrument
                    </Link>
                    <button
                      onClick={() => setSelectedInstrument(instrument.id)}
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-[#C6A355] text-[#C6A355] hover:bg-[#C6A355]/10 rounded-xl transition-all duration-300"
                    >
                      Buy Instrument
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Modal */}
      <AnimatePresence>
        {selectedInstrument && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#1A1A1A] rounded-[2rem] p-8 border border-[#C6A355]/20 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedInstrument(null);
                  setFormData({ name: '', phone: '' });
                  setErrors({ name: '', phone: '' });
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#C6A355]/20 flex items-center justify-center">
                  <Music className="w-8 h-8 text-[#DFB87A]" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {instruments.find(i => i.id === selectedInstrument)?.name}
                  </h3>
                  <p className="text-gray-400 text-lg mb-6">
                    Currently out of stock. Fill in your details below to reserve your instrument.
                  </p>
                </div>

                <form onSubmit={handleReserve} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                        errors.name ? 'border-red-500' : 'border-[#333333]'
                      } text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300`}
                    />
                    {errors.name && (
                      <p className="mt-2 text-red-500 text-sm text-left">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your Phone Number"
                      className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                        errors.phone ? 'border-red-500' : 'border-[#333333]'
                      } text-white focus:border-[#C6A355] focus:ring-1 focus:ring-[#C6A355] transition-all duration-300`}
                    />
                    {errors.phone && (
                      <p className="mt-2 text-red-500 text-sm text-left">{errors.phone}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#DFB87A] to-[#C6A355] hover:from-[#C6A355] hover:to-[#DFB87A] text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A355]/20 transform hover:scale-105"
                  >
                    Reserve Now
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 