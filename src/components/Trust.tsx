"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Droplet, Heart, ThumbsUp } from "lucide-react";

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "Premium Ingredients",
    description: "Sourced from the finest farms to ensure superior quality and nutrition in every drop."
  },
  {
    icon: Droplet,
    title: "Hygienic Production",
    description: "State-of-the-art facilities with strict quality controls and untouched-by-hand processes."
  },
  {
    icon: Heart,
    title: "Authentic Taste",
    description: "Crafted to perfection, preserving the natural flavors and richness of real almonds."
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description: "Loved by thousands. We prioritize your health and taste above everything else."
  }
];

export default function Trust() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-[#FF7A00] font-bold mb-4 text-xs uppercase tracking-widest"
          >
            Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Quality You Can <span className="text-[#FF7A00]">Trust</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-[#FDFBF7] border border-orange-100 rounded-3xl p-8 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(255,122,0,0.15)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FF7A00] transition-all duration-300">
                <feature.icon className="w-8 h-8 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
