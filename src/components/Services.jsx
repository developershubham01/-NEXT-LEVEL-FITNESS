import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Activity, Flame, Heart, Package } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Personal Training",
            desc: "One-on-one sessions tailored to your body type and fitness goals.",
            icon: <Shield className="w-8 h-8 text-accent-neon" />,
        },
        {
            title: "Weight Loss Program",
            desc: "Comprehensive fat loss strategies combining cardio and nutrition.",
            icon: <Flame className="w-8 h-8 text-accent-orange" />,
        },
        {
            title: "Muscle Building",
            desc: "Hypertrophy focused training for maximum strength and size.",
            icon: <Target className="w-8 h-8 text-accent-neon" />,
        },
        {
            title: "Strength Training",
            desc: "Powerlifting and functional strength for better performance.",
            icon: <Activity className="w-8 h-8 text-accent-orange" />,
        },
        {
            title: "Cardio Zone",
            desc: "High-end treadmills and HIIT zones to improve endurance.",
            icon: <Heart className="w-8 h-8 text-accent-neon" />,
        },
        {
            title: "Supplements",
            desc: "Premium Whey Proteins and boosters starting from ₹500 onwards.",
            icon: <Package className="w-8 h-8 text-accent-orange" />,
        },
    ];

    return (
        <section id="services" className="py-24 bg-dark-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-accent-neon font-bold tracking-[0.2em] text-sm mb-4 uppercase">OUR SPECIALTIES</h2>
                    <h3 className="text-4xl md:text-5xl font-black font-outfit text-white">WHAT WE OFFER</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.03, rotateX: 5 }}
                            className="glass p-10 rounded-3xl border-transparent hover:border-accent-neon/30 transition-all cursor-default group"
                        >
                            <div className="bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-accent-neon/20 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-all">
                                {service.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-neon transition-colors">{service.title}</h4>
                            <p className="text-gray-400 leading-relaxed font-light">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
