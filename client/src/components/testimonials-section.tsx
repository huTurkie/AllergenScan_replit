import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "AllergenAI has been a game-changer for my severe nut allergy. I can finally eat out with confidence knowing I can quickly check any dish.",
    name: "Sarah M.",
    role: "Food Allergy Sufferer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    text: "As a busy parent with kids who have multiple allergies, this app saves me so much time at the grocery store. It's incredibly accurate and fast.",
    name: "Mike R.",
    role: "Parent of 3",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    bgColor: "from-green-50 to-emerald-50"
  },
  {
    text: "The vegan and halal detection features are spot-on. I love how it works both for packaged foods and restaurant meals. Highly recommend!",
    name: "Aisha K.",
    role: "Vegan Food Enthusiast", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    bgColor: "from-purple-50 to-violet-50"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-blue-violet-700 mb-6"
          >
            What Our Users Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Join thousands of users who trust AllergenAI to keep their diets safe and worry-free.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${testimonial.bgColor} rounded-2xl p-8`}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}, ${testimonial.role}`} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <p className="font-semibold text-blue-violet-700">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
