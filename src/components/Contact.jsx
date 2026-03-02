import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-dark-surface relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-accent-neon font-bold tracking-[0.2em] text-sm mb-4 uppercase">GET IN TOUCH</h2>
                    <h3 className="text-4xl md:text-5xl font-black font-outfit text-white">REACH OUT TO US</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Contact Info & Map */}
                    <div>
                        <div className="space-y-8 mb-12">
                            <div className="flex items-start space-x-6">
                                <div className="bg-accent-neon/10 p-4 rounded-2xl">
                                    <MapPin className="text-accent-neon" size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Location</h4>
                                    <p className="text-gray-400 leading-relaxed italic">
                                        Park Site, Varsha Nagar, Vikhroli West, <br />
                                        Mumbai, Maharashtra 400079
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <div className="bg-accent-orange/10 p-4 rounded-2xl">
                                    <Phone className="text-accent-orange" size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Call/WhatsApp</h4>
                                    <p className="text-gray-400 leading-relaxed text-lg font-bold">+91 97688 11111</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <div className="bg-blue-500/10 p-4 rounded-2xl">
                                    <Mail className="text-blue-500" size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                                    <p className="text-gray-400 leading-relaxed">contact@nextlevelmumbai.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Mockup */}
                        <div className="rounded-[40px] overflow-hidden border border-white/10 h-[300px] grayscale hover:grayscale-0 transition-all duration-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.04683!2d72.915!3d19.117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7873!2sPark%20Site%2C%20Vikhroli%20West!5e0!3m2!1sen!2sin!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-10 md:p-12 rounded-[40px] border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-neon"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-neon"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Your Goals</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us what you want to achieve..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-neon"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn-neon w-full flex items-center justify-center gap-3 py-5"
                            >
                                LEVEL UP NOW <Send size={20} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>

            {/* Floating Buttons */}
            <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
                <a
                    href="https://wa.me/919768811111"
                    className="bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all text-white"
                >
                    <MessageCircle size={32} fill="white" className="text-[#25D366]" />
                </a>
            </div>
            
        </section>
        
    );
};

export default Contact;
