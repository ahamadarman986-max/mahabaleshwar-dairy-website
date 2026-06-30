"use client";
import { motion } from "framer-motion";
import { Award, Factory, Leaf } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Images Cluster */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white aspect-[4/5] max-w-sm ml-auto bg-orange-50 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00] to-orange-600 opacity-10"></div>
              <img 
                src="/images/user-orange.png" 
                alt="Refreshing Badam Drink" 
                className="w-full h-full object-contain relative z-10 scale-125 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 text-gray-900 z-20 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <p className="font-bold text-xl text-[#FF7A00]">Refreshing Taste</p>
                <p className="text-sm font-medium">Light & energizing formula</p>
              </div>
            </div>

            {/* Secondary Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 left-0 lg:-left-10 rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-white w-64 aspect-square bg-amber-50 flex items-center justify-center p-4"
            >
              <img 
                src="/images/user-yellow.png" 
                alt="Premium Badam Drink" 
                className="w-full h-full object-contain scale-110"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-10 -left-6 bg-white px-6 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-orange-50 flex items-center gap-4 z-30"
            >
              <div className="bg-[#FF7A00] rounded-full p-3 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-extrabold text-lg leading-none">ISO Certified</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Quality Assured</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#FF7A00] font-bold mb-6 text-xs uppercase tracking-widest">
              Our Brand Story
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.15]">
              Crafted With Care,<br/>
              <span className="text-[#FF7A00]">Delivered With Quality</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At <strong className="text-gray-900">Mahabaleshwor Dairy And Beverage Industry</strong>, we believe that great taste begins with extraordinary ingredients. We are dedicated to creating premium dairy beverages that not only quench your thirst but nourish your body.
            </p>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Combining traditional authentic recipes with world-class modern manufacturing, our facility ensures that every bottle of Badam Drink is hygienically processed, rich in flavor, and perfectly balanced for your enjoyment.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-orange-50 shadow-sm">
                <div className="bg-orange-50 p-3 rounded-xl text-[#FF7A00]">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Advanced Manufacturing</h4>
                  <p className="text-sm text-gray-500">Untouched by hand, packed with precision.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-orange-50 shadow-sm">
                <div className="bg-orange-50 p-3 rounded-xl text-[#FF7A00]">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Pure & Natural</h4>
                  <p className="text-sm text-gray-500">No artificial fillers, just real almond goodness.</p>
                </div>
              </div>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
