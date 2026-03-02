import React from 'react';
import { motion } from 'framer-motion';

const Equipment = () => {
    const equipment = [
        { name: "Treadmills", img: "/assets/equip1.png", tag: "Cardio" },
        { name: "Dumbbells", img: "/assets/equip2.png", tag: "Free Weights" },
        { name: "Bench Press", img: "/assets/hero_bg.png", tag: "Strength" },
        { name: "Cable Machines", img: "/assets/equip1.png", tag: "Isolation" },
        { name: "Squat Racks", img: "/assets/equip2.png", tag: "Lower Body" },
        { name: "Multi-Gym", img: "/assets/hero_bg.png", tag: "Full Body" },
    ];

    return (
        <section id="equipment" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4">
                    <div>
                        <h2 className="text-accent-neon font-bold tracking-[0.2em] text-sm mb-4 uppercase">ELITE GEAR</h2>
                        <h3 className="text-4xl md:text-5xl font-black font-outfit text-white">WORLD CLASS EQUIPMENT</h3>
                    </div>
                    <p className="text-gray-400 max-w-md font-light">
                        We don't settle for average. Our gym is packed with premium, heavy-duty equipment
                        from industry-leading brands to ensure you get the best pumps safely.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {equipment.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-xs font-bold text-accent-neon tracking-widest uppercase mb-2 block">{item.tag}</span>
                                <h4 className="text-2xl font-black text-white">{item.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Equipment;
