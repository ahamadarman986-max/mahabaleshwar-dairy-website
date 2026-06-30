"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FDFBF7] relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FF7A00]/20 text-[#FF7A00] font-bold mb-4 text-xs uppercase tracking-widest shadow-sm"
          >
            Get In Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Contact <span className="text-[#FF7A00]">Us</span>
          </motion.h2>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12 p-10 md:p-14 bg-gradient-to-br from-amber-100 to-yellow-50 text-gray-900 border-r border-amber-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl text-[#FF7A00] shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1">Our Location</h4>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">
                    Mahabaleshwor Dairy And Beverage Industry<br/>
                    Belbariya, Butwal, Nepal
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-2xl text-[#FF7A00] shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1">Phone Number</h4>
                  <p className="text-gray-700 font-medium text-sm">+977 9857025489</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-2xl text-[#FF7A00] shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1">Email Address</h4>
                  <p className="text-gray-700 font-medium text-sm">mahabaleshowr@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-7/12 p-10 md:p-14">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button 
                type="button" 
                onClick={(e) => { e.preventDefault(); alert("Thank you for your message! We will get back to you soon."); }}
                className="w-full py-4 bg-[#FF7A00] text-white rounded-xl hover:bg-orange-600 font-bold transition-colors shadow-md hover:shadow-lg mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
