"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Droplets, HeartHandshake, Sparkles } from "lucide-react";

export default function Features() {
  const cards = [
    {
      title: "Quality Products",
      desc: "Uncompromising standards for every bottle.",
      icon: <ShieldCheck className="w-10 h-10 text-brand-primary" />,
      color: "from-orange-100 to-orange-50",
      delay: 0.1
    },
    {
      title: "Natural Ingredients",
      desc: "Sourced directly from nature's best.",
      icon: <Leaf className="w-10 h-10 text-green-500" />,
      color: "from-green-100 to-green-50",
      delay: 0.2
    },
    {
      title: "Fresh Taste",
      desc: "Delivering farm-fresh goodness to you.",
      icon: <Droplets className="w-10 h-10 text-blue-500" />,
      color: "from-blue-100 to-blue-50",
      delay: 0.3
    },
    {
      title: "Trusted Brand",
      desc: "Loved by thousands of families daily.",
      icon: <HeartHandshake className="w-10 h-10 text-rose-500" />,
      color: "from-rose-100 to-rose-50",
      delay: 0.4
    }
  ];

  return (
    <section className="py-28 bg-brand-light relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-dark font-bold mb-6 shadow-sm"
          >
            <Sparkles className="w-5 h-5 text-brand-primary" /> Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Crafted for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Excellence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.6 }}
              className="bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-center group border border-white flex flex-col items-center relative overflow-hidden transform hover:-translate-y-2"
            >
              {/* Card Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-b ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className={`w-20 h-20 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">{card.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
