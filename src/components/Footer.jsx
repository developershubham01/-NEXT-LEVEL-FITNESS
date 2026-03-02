import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <a href="#" className="flex items-center space-x-2">
                            <Dumbbell className="h-10 w-10 text-accent-neon" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-black font-outfit leading-none">NEXT LEVEL</span>
                                <span className="text-xs font-bold text-accent-neon tracking-[0.3em]">FITNESS</span>
                            </div>
                        </a>
                        <p className="text-gray-500 leading-relaxed font-light">
                            Elevating fitness standards in Mumbai since 2022. Expert trainers, world-class machines,
                            and a community that pushes you harder.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-accent-neon hover:text-black transition-all border border-white/5">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-accent-neon hover:text-black transition-all border border-white/5">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-accent-neon hover:text-black transition-all border border-white/5">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:ml-12">
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Navigation</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Equipment', 'Pricing'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-accent-neon transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Gym Hours</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li className="flex justify-between">
                                <span>Mon-Sat</span>
                                <span className="text-accent-neon">6 AM - 11 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-white">7 AM - 1 PM</span>
                            </li>
                            <li className="pt-4 italic text-xs">
                                *Personal Training sessions vary by schedule
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Stay Updated</h4>
                        <p className="text-gray-500 text-sm mb-6">Get fitness tips and protein offers directly.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-neon"
                            />
                            <button className="absolute right-2 top-2 bg-accent-neon text-black p-2 rounded-xl hover:scale-105 active:scale-95 transition-all">
                                <Mail size={20} />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                   <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">

    <div className="text-center md:text-left">
        <p className="text-gray-600 text-sm">
            © {currentYear} Next Level Fitness.
        </p>
        <p className="text-gray-500 text-xs mt-2">
            Built with 💚 by 
            <span className="text-accent-neon font-semibold ml-1">
                Shubham Sharma
            </span>
        </p>
    </div>

    <div className="flex items-center gap-6">
        <a
            href="https://github.com/developershubham01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-all hover:scale-110"
        >
            <Github size={20} />
        </a>

        <a
            href="https://www.linkedin.com/in/shubham-sharma395/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#0A66C2] transition-all hover:scale-110"
        >
            <Linkedin size={20} />
        </a>
    </div>
</div>
                    <div className="flex items-center space-x-8 text-xs text-gray-600 uppercase tracking-widest font-bold">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 text-accent-neon hover:text-white transition-all"
                        >
                            Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
