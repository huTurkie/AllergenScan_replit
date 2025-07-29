import { motion } from "framer-motion";
import { Users, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Kitchen surface background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-blue-violet-700 mb-6 leading-tight"
          >
            Scan food labels and meals to reveal<br />
            <span className="text-blue-violet-500">allergens and dietary info instantly</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Take a photo, scan a QR code, or scan a label to keep your diet safe and easy.
          </motion.p>
          
          {/* Social Proof Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
              <Users className="text-blue-violet-500 w-5 h-5" />
              <span className="font-semibold text-gray-700">Trusted by 100K+ users</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-gray-700">4.8 rating</span>
            </div>
          </motion.div>
        </div>

        {/* Smartphone Mockups */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Phone 1: Food Scanning */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -5 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative transform lg:translate-y-8 hover:rotate-0 transition-transform duration-300"
          >
            <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
                  alt="Colorful falafel and salad plate" 
                  className="w-full h-full object-cover" 
                />
                
                {/* Overlay Cards */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end space-y-3">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-semibold">Halal</span>
                  </div>
                  <div className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-semibold">Vegan</span>
                  </div>
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-semibold">Contains Allergens</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phone 2: Label Scanning */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 5 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative transform lg:translate-y-[-2rem] hover:rotate-0 transition-transform duration-300"
          >
            <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white p-6 flex flex-col">
                  <div className="flex-1 bg-black rounded-xl relative overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                      alt="Food product nutrition label" 
                      className="w-full h-full object-cover opacity-80" 
                    />
                    
                    {/* Scanning overlay */}
                    <div className="absolute inset-0 border-2 border-blue-violet-500 rounded-xl">
                      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-violet-500"></div>
                      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-blue-violet-500"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-blue-violet-500"></div>
                      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-blue-violet-500"></div>
                    </div>
                    
                    {/* Scanning line animation */}
                    <motion.div 
                      className="absolute inset-x-0 h-0.5 bg-blue-violet-500 opacity-75"
                      animate={{ y: [0, 300, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </div>
                  
                  <div className="bg-red-500 text-white px-4 py-3 rounded-lg flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-semibold">Allergen Warning!</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
