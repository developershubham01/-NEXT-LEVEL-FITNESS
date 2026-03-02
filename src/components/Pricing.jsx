import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Basic Plan",
            price: "1500",
            period: "/ month",
            description: "Ideal for beginners starting their journey.",
            features: [
                { text: "Standard Gym Access", included: true },
                { text: "Locker Room Access", included: true },
                { text: "Mobile App Access", included: true },
                { text: "Personal Training", included: false },
                { text: "Customized Diet Plan", included: false },
            ],
            recommended: false,
        },
        {
            name: "Standard Plan",
            price: "3500",
            period: "/ quarter",
            description: "Most popular choice for regular members.",
            features: [
                { text: "Standard Gym Access", included: true },
                { text: "Locker Room Access", included: true },
                { text: "Mobile App Access", included: true },
                { text: "Personal Training (2/mo)", included: true },
                { text: "Customized Diet Plan", included: true },
            ],
            recommended: true,
        },
        {
            name: "Premium Plan",
            price: "12000",
            period: "/ year",
            description: "The ultimate transformation package.",
            features: [
                { text: "Standard Gym Access", included: true },
                { text: "Locker Room Access", included: true },
                { text: "Full App Access", included: true },
                { text: "Unlimited PT", included: true },
                { text: "Supplements Support", included: true },
            ],
            recommended: false,
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-accent-neon font-bold tracking-[0.2em] text-sm mb-4 uppercase">PRICING</h2>
                    <h3 className="text-4xl md:text-5xl font-black font-outfit text-white">CHOOSE YOUR POWER</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative glass p-10 rounded-[40px] flex flex-col ${plan.recommended ? 'border-accent-neon shadow-[0_0_40px_rgba(57,255,20,0.1)]' : 'border-white/10'}`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-neon text-black text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-4xl font-black text-white">₹{plan.price}</span>
                                    <span className="text-gray-500 ml-1">{plan.period}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-3">
                                        {feature.included ? (
                                            <Check className="text-accent-neon w-5 h-5 flex-shrink-0" />
                                        ) : (
                                            <X className="text-gray-700 w-5 h-5 flex-shrink-0" />
                                        )}
                                        <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-700 decoration-line-through'}`}>
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                           <a
    href={`https://wa.me/91976811111?text=${encodeURIComponent(
        `Hi, I am interested in the ${plan.name} (₹${plan.price} ${plan.period}) plan. Please share more details.`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-full py-4 rounded-2xl font-black transition-all text-center block ${
        plan.recommended
            ? 'bg-accent-neon text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]'
            : 'bg-white/5 text-white hover:bg-white/10'
    }`}
>
    GET STARTED
</a>
                        </motion.div>
                    ))}
                </div>

                {/* BMI Calculator Bonus */}
                <BMICalculator />
            </div>
        </section>
    );
};

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState('');

    const calculate = () => {
        if (weight && height) {
            const hMeters = height / 100;
            const val = (weight / (hMeters * hMeters)).toFixed(1);
            setBmi(val);
            if (val < 18.5) setMessage('Underweight');
            else if (val < 25) setMessage('Healthy weight');
            else if (val < 30) setMessage('Overweight');
            else setMessage('Obese');
        }
    };

    return (
        <div className="glass p-8 md:p-12 rounded-[40px] border-accent-orange/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-black font-outfit text-white mb-4 uppercase">BMI CALCULATOR</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Check your Body Mass Index (BMI) to understand your health progress.
                        Level Up your fitness journey with our professional guidance.
                    </p>
                    <div className="space-y-4">
                        <input
                            type="number"
                            placeholder="Weight (kg)"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-neon"
                        />
                        <input
                            type="number"
                            placeholder="Height (cm)"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-neon"
                        />
                        <button
                            onClick={calculate}
                            className="btn-neon w-full !rounded-2xl py-4 bg-accent-orange hover:shadow-[0_0_20px_rgba(255,95,31,0.4)]"
                        >
                            CALCULATE NOW
                        </button>
                    </div>
                </div>
                <div className="text-center bg-white/5 rounded-[40px] p-12 border border-white/10">
                    {bmi ? (
                        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                            <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">Your BMI is</p>
                            <h4 className="text-7xl font-black text-accent-neon mb-4">{bmi}</h4>
                            <p className="text-2xl font-bold text-white uppercase">{message}</p>
                        </motion.div>
                    ) : (
                        <div className="space-y-4 opacity-50">
                            <div className="w-20 h-20 mx-auto border-4 border-dashed border-gray-600 rounded-full flex items-center justify-center">?</div>
                            <p className="text-gray-400 italic">Enter your stats to see results</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
