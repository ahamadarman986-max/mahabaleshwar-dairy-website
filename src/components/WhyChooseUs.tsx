"use client";
import { motion } from "framer-motion";
import { Leaf, Award, CheckCircle, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "We select only the freshest, premium almonds and natural ingredients for our beverages."
  },
  {
    icon: CheckCircle,
    title: "Natural Almond Flavor",
    desc: "Experience the authentic, unadulterated taste of real almonds in every single sip."
  },
  {
    icon: Award,
    title: "Quality Checked",
    desc: "Undergoes rigorous 5-step quality testing to ensure perfect taste and maximum safety."
  },
  {
    icon: ShieldCheck,
    title: "Trusted Brand",
    desc: "A legacy of trust, loved by thousands of families for our uncompromising standards."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FF7A00]/20 text-[#FF7A00] font-bold mb-6 text-xs uppercase tracking-widest shadow-sm"
            >
              The Mahabaleshwor Difference
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight"
            >
              Why Are We <span className="text-[#FF7A00]">Different?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-10 leading-relaxed font-medium max-w-xl"
            >
              We don't just make beverages; we craft experiences. Our commitment to purity, hygiene, and authentic taste sets us apart in the dairy industry.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a href="#about" className="inline-flex items-center gap-2 font-bold text-[#FF7A00] hover:text-amber-600 transition-colors group">
                Learn more about our standards
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-50 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-[#FF7A00] transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
