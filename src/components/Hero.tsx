"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
      
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF7A00]/10 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full mt-20 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 pt-12 pb-12 z-20 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#FF7A00]/20 text-[#FF7A00] font-bold mb-8 shadow-sm text-xs uppercase tracking-[0.2em]"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse"></span>
              Premium Dairy Refreshment
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.1] text-gray-900 mb-6 tracking-tight">
              Premium Refreshing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-amber-400">Badam Drink</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Made with carefully selected quality ingredients, natural goodness, and authentic flavors to deliver a refreshing experience in every sip and bring a perfect taste to every moment.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">

              <Link href="/contact" className="px-10 py-4 bg-[#FF7A00] text-white rounded-full hover:bg-[#e66a00] hover:scale-105 transition-all duration-300 font-bold shadow-[0_15px_30px_-10px_rgba(255,122,0,0.5)] flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end z-20"
          >
            {/* Decorative Floating Almonds (CSS Shapes) */}
            <motion.div 
              animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-12 h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-lg rotate-45 z-30 opacity-90 blur-[1px]"
            ></motion.div>
            <motion.div 
              animate={{ y: [10, -20, 10], rotate: [0, -15, 15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-20 w-8 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-lg -rotate-12 z-30 opacity-80 blur-[2px]"
            ></motion.div>
            <motion.div 
              animate={{ y: [-20, 10, -20], x: [-10, 10, -10], rotate: [45, 90, 45] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/3 right-10 w-10 h-14 bg-gradient-to-br from-amber-700 to-amber-900 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-lg rotate-90 z-0 opacity-60 blur-[3px]"
            ></motion.div>

            {/* Milk Splash Behind Product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white/50 to-transparent rounded-full blur-2xl z-0"></div>

            <motion.img 
              src="/images/product-yellow.png?v=2" 
              alt="Premium Badam Drink" 
              className="w-full h-auto max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-contain relative z-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
