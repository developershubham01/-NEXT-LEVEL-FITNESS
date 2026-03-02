import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero_bg.png"
                    alt="Gym Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full border border-accent-neon text-accent-neon text-sm font-bold tracking-widest mb-6">
                        EST. 2022
                    </span>
                    <h1 className="text-3xl md:text-6xl font-black font-outfit leading-tight mb-6">
    TRANSFORM YOUR <span className="text-glow">BODY</span> <br />
    UNLOCK YOUR <span className="text-accent-orange italic">POTENTIAL</span>
</h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Mumbai’s Premier Fitness Destination. Experience world-class training with
                        <span className="text-white font-semibold"> owner name </span> and reach your goals faster.
                    </p>
<br/>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                       <a 
    href="#contact" 
    className="btn-neon w-full sm:w-auto flex items-center justify-center gap-2 text-center"
>
    JOIN NOW
</a>
                      <a 
    href="#contact"
    className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 group text-center"
>
    <span className="bg-accent-neon/20 p-2 rounded-full group-hover:bg-accent-neon group-hover:text-black transition-colors">
        <Play size={16} fill="currentColor" />
    </span>
    BOOK FREE TRIAL
</a>
                    </div>
                </motion.div><br/> <br/>
            </div>


            {/* Stats Overlay */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 hidden lg:block">
                <div className="glass rounded-2xl p-6 flex justify-around items-center"><br/> <br/>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-accent-neon">4.9</h3>
                        <p className="text-xs text-gray-400 tracking-widest uppercase">Rating</p>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-white">68+</h3>
                        <p className="text-xs text-gray-400 tracking-widest uppercase">Happy Members</p>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-accent-orange">24/7</h3>
                        <p className="text-xs text-gray-400 tracking-widest uppercase">Support</p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent-neon opacity-50"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
