import { motion } from "framer-motion";
import { Users, Star } from "lucide-react";
import peanutButterImage from "@assets/penaut butter_1753845120270.webp";
import cameraOptionsImage from "@assets/camera options_1753846336625.jpg";

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
          
          {/* Download Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* App Store Button */}
            <a 
              href="#" 
              className="bg-black text-white px-8 py-4 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>

            {/* Google Play Button */}
            <a 
              href="#" 
              className="bg-black text-white px-8 py-4 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
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
                  <div className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg border">
                    <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                    <span className="font-semibold">Halal</span>
                  </div>
                  <div className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg border">
                    <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                    <span className="font-semibold">Vegan</span>
                  </div>
                  <div className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg border">
                    <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
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
                  <div className="flex-1 bg-white rounded-xl relative overflow-hidden mb-4">
                    <img 
                      src={peanutButterImage} 
                      alt="Jif peanut butter jar" 
                      className="w-full h-full object-contain opacity-90" 
                    />
                    
                    {/* Large Square Scanning overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-56 border-2 border-blue-violet-500 rounded-lg">
                      <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-blue-violet-500"></div>
                      <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-blue-violet-500"></div>
                      <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-blue-violet-500"></div>
                      <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-blue-violet-500"></div>
                    </div>
                    
                    {/* Scanning line animation - larger area */}
                    <motion.div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-blue-violet-500 opacity-75"
                      style={{ top: 'calc(50% - 112px)' }}
                      animate={{ y: [0, 224, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    
                    {/* Camera Control Buttons */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                      {/* Gallery Button */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <polyline points="21,15 16,10 5,21"/>
                          </svg>
                        </div>
                        <span className="text-xs text-white mt-1">Gallery</span>
                      </div>

                      {/* Scan Label Button */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 9h6v6h-6z"/>
                            <path d="M21 15V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-white mt-1">Scan Label</span>
                      </div>

                      {/* Barcode Button (highlighted) */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="2" y="6" width="2" height="12"/>
                            <rect x="6" y="6" width="1" height="12"/>
                            <rect x="9" y="6" width="1" height="12"/>
                            <rect x="12" y="6" width="2" height="12"/>
                            <rect x="16" y="6" width="1" height="12"/>
                            <rect x="19" y="6" width="3" height="12"/>
                          </svg>
                        </div>
                        <span className="text-xs text-white mt-1">Barcode</span>
                      </div>

                      {/* Scan Food Button */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 2l1.5 14.5L12 18l7.5-1.5L21 2z"/>
                            <path d="M12 18v-8"/>
                            <path d="M8 10h8"/>
                          </svg>
                        </div>
                        <span className="text-xs text-white mt-1">Scan Food</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white text-gray-800 px-4 py-3 rounded-lg flex items-center space-x-2 shadow-lg border">
                    <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span className="font-semibold">Allergen Warning!</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Proof Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
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
    </section>
  );
}
