import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            name: "Hitesh Varma",
            role: "Member since 2023",
            text: "Best gym in parksite. Quality and knowledgeable trainers. The atmosphere is purely motivational.",
            stars: 5,
        },
        {
            name: "Suraj Varma",
            role: "Athlete",
            text: "Good Trainer. Gym is Hygienic. Workout machines well maintained. Highly recommend for serious people.",
            stars: 5,
        },
        {
            name: "Mahesh Nakti",
            role: "Fitness Enthusiast",
            text: "Awesome gym & friendly trainers. All equipment available 💪 Satish sir personal attention is great.",
            stars: 5,
        },
    ];

    const [curr, setCurr] = useState(0);

    const next = () => setCurr((curr + 1) % reviews.length);
    const prev = () => setCurr((curr - 1 + reviews.length) % reviews.length);

    return (
        <section id="reviews" className="py-24 bg-dark-surface relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-neon/5 blur-[120px] rounded-full"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-accent-neon font-bold tracking-[0.2em] text-sm mb-4 uppercase">TESTIMONIALS</h2>
                    <h3 className="text-4xl md:text-5xl font-black font-outfit text-white">WHAT OUR MEMBERS SAY</h3>
                </div>

                <div className="relative glass p-10 md:p-16 rounded-[40px]">
                    <Quote className="absolute top-8 left-8 text-accent-neon/20 w-16 h-16" />

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={curr}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="flex justify-center space-x-1 mb-8">
                                {[...Array(reviews[curr].stars)].map((_, i) => (
                                    <Star key={i} size={20} fill="#39FF14" className="text-accent-neon" />
                                ))}
                            </div>
                            <p className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed mb-10">
                                "{reviews[curr].text}"
                            </p>
                            <div>
                                <h4 className="text-xl font-bold text-accent-neon mb-1">{reviews[curr].name}</h4>
                                <p className="text-gray-500 text-sm uppercase tracking-widest">{reviews[curr].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex justify-center mt-12 space-x-4">
                        <button onClick={prev} className="p-3 rounded-full bg-white/5 hover:bg-accent-neon hover:text-black transition-all border border-white/10">
                            <ChevronLeft />
                        </button>
                        <button onClick={next} className="p-3 rounded-full bg-white/5 hover:bg-accent-neon hover:text-black transition-all border border-white/10">
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                <div className="mt-12 text-center text-gray-500 font-bold tracking-widest">
                    GOOGLE RATING: <span className="text-accent-neon">4.9 ★★★★★</span> (68+ Reviews)
                </div>
            </div>
        </section>
    );
};

export default Reviews;
