import { motion } from "framer-motion";
import { Camera, Barcode, QrCode } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Photo Scan",
    description: "Instantly identify allergens in your meals. Just point your camera at any dish and get comprehensive dietary information in seconds.",
    bgColor: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-violet-500"
  },
  {
    icon: Barcode,
    title: "Label Scan", 
    description: "Quickly check ingredient lists for allergens. Scan any nutrition label and get instant alerts about potential dietary concerns.",
    bgColor: "from-green-50 to-emerald-50",
    iconBg: "bg-green-500"
  },
  {
    icon: QrCode,
    title: "QR Code Scan",
    description: "Get instant dietary info from product packaging. Access detailed allergen information and dietary certifications with one scan.",
    bgColor: "from-purple-50 to-violet-50", 
    iconBg: "bg-purple-500"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-blue-violet-700 mb-6"
          >
            Three Ways to Stay Safe
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Advanced AI technology meets simple scanning to give you instant peace of mind about your food choices.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${feature.bgColor} rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300`}
            >
              <div className={`w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-violet-700 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
