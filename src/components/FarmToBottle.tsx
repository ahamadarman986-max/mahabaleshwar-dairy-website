"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Ingredient Selection",
    desc: "We handpick the finest quality almonds and natural ingredients from trusted farms.",
    color: "from-green-400 to-green-600"
  },
  {
    number: "02",
    title: "Hygienic Production",
    desc: "Processed in our state-of-the-art facility, untouched by human hands to ensure absolute purity.",
    color: "from-blue-400 to-blue-600"
  },
  {
    number: "03",
    title: "Quality Checking",
    desc: "Every batch undergoes rigorous lab testing to meet our premium quality and taste standards.",
    color: "from-amber-400 to-amber-600"
  },
  {
    number: "04",
    title: "Final Product",
    desc: "Perfectly packaged and delivered fresh to bring you the authentic taste of Badam Drink.",
    color: "from-[#FF7A00] to-orange-600"
  }
];

export default function FarmToBottle() {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#FF7A00] font-bold mb-4 text-xs uppercase tracking-widest"
          >
            Our Process
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
          >
            From Quality Ingredients <br className="hidden md:block"/>
            <span className="text-[#FF7A00]">To Your Bottle</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-100 rounded-full">
            <div className="h-full bg-gradient-to-r from-green-500 via-amber-500 to-[#FF7A00] w-full origin-left opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} p-1 shadow-xl mb-8 transform transition-transform hover:scale-110 duration-300`}>
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center border-4 border-transparent bg-clip-padding">
                    <span className={`text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br ${step.color}`}>
                      {step.number}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
