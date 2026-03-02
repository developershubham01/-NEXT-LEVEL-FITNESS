import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Equipment from './components/Equipment';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reveal animation on scroll
    const reveals = document.querySelectorAll('.reveal');
    const handleScroll = () => {
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      handleScroll();
    }, 1500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white selection:bg-accent-neon selection:text-black">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                borderRadius: ["20%", "50%", "20%"]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-16 h-16 border-4 border-accent-neon border-t-accent-orange"
            />
            <motion.h2
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-8 text-2xl font-black font-outfit text-accent-neon tracking-[0.4em]"
            >
              LEVELING UP...
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <main>
        <div className="reveal"><Hero /></div>
        <div className="reveal"><About /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><Equipment /></div>
        <div className="reveal"><Reviews /></div>
        <div className="reveal"><Pricing /></div>
        <div className="reveal"><Contact /></div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
