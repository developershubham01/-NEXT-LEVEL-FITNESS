import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Users, Trophy, Zap } from 'lucide-react';

const About = () => {
    const highlights = [
        { icon: <Star className="text-yellow-400" />, title: "4.9 Star Rating", desc: "Highest rated in Vikhroli" },
        { icon: <Users className="text-accent-neon" />, title: "68+ Active Members", desc: "Growing fitness community" },
        { icon: <Trophy className="text-accent-orange" />, title: "Certified Trainers", desc: "Expert guidance always" },
        { icon: <Zap className="text-blue-400" />, title: "Modern Equipment", desc: "Premium workout machines" },
    ];

    return (
        <section id="about" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent-neon font-bold tracking-[0.2em] text-sm mb-4 uppercase">OUR STORY</h2>
                        <h3 className="text-4xl md:text-5xl font-black font-outfit mb-6 leading-tight">
                            WELCOME TO SATISH PAL’S <br />
                            <span className="text-glow">NEXT LEVEL FITNESS</span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Since 2022, we have been dedicated to helping Mumbai achieve its fitness goals.
                            Our mission is to create a powerhouse environment where potential is recognized and
                            results are inevitable. Whether you're a beginner or an elite athlete, we provide
                            the tools you need to level up.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-4">
                                    <div className="mt-1 bg-white/5 p-2 rounded-lg border border-white/10 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="btn-neon">READ OUR MISSION</button>
                    </motion.div>

                    {/* Right Column: Images Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="space-y-4">
                            <img src="/assets/equip1.png" alt="Gym Interior 1" className="rounded-2xl w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
                            <div className="glass p-8 rounded-2xl border-accent-neon/30 text-center">
                                <h4 className="text-4xl font-black text-accent-neon mb-2">2+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-widest">Years Experience</p>
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                            <div className="bg-accent-neon rounded-2xl h-[200px] flex flex-col justify-center items-center p-6 text-black">
                                <Dumbbell size={48} strokeWidth={3} />
                                <p className="text-center font-black mt-4 uppercase">Level Up Your Game</p>
                            </div>
                            <img src="/assets/equip2.png" alt="Gym Interior 2" className="rounded-2xl w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const Dumbbell = ({ size, strokeWidth, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m6.5 6.5 11 11" /><path d="m10 10 5.5 5.5" /><path d="m3 21 8-8" /><path d="m9 22 10-10" /><path d="m2 15 10 10" /><path d="M18 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8" /><path d="M11.3 5.3c-.8-.8-2-.8-2.8 0l-3.2 3.2c-.8.8-.8 2 0 2.8l3.2 3.2c.8.8 2 .8 2.8 0l3.2-3.2c.8-.8.8-2 0-2.8l-3.2-3.2z" /><path d="m14 10 4-4" /><path d="m18 14 4-4" /><path d="m5 14 4-4" /><path d="m10 5 4-4" /><path d="M15.5 6.5 17.5 4.5" /><path d="M17.5 8.5 19.5 6.5" /><path d="m4.5 17.5 2-2" /><path d="m6.5 19.5 2-2" />
    </svg>
);

export default About;
