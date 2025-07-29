import { motion } from "framer-motion";
import { Shield, Clock, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Protect Your Health",
    description: "Avoid dangerous allergens and make informed dietary choices. Our AI recognizes over 100 common allergens and dietary restrictions.",
    bgColor: "from-red-400 to-red-600"
  },
  {
    icon: Clock,
    title: "Save Time Shopping", 
    description: "No more reading tiny ingredient labels. Scan products instantly and get clear, easy-to-understand dietary information in seconds.",
    bgColor: "from-blue-400 to-blue-600"
  },
  {
    icon: Smartphone,
    title: "Easy to Use Anywhere",
    description: "Works offline and online. Take it to restaurants, grocery stores, or friends' houses. Your food safety companion goes wherever you go.",
    bgColor: "from-green-400 to-green-600"
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-blue-violet-700 mb-6"
          >
            Why Choose AllergenAI?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            More than just scanning - we're your personal food safety companion for a healthier, worry-free lifestyle.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-blue-violet-700 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 text-lg">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
