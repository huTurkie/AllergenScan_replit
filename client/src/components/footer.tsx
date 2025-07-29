import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Updates", href: "#" }
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Bug Reports", href: "#" },
    { name: "Feature Requests", href: "#" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 15.5C2 15.5 2 20.5 8 20.5C14 20.5 17 8 17 8Z" 
                  fill="url(#leafGradientFooter)"
                />
                <defs>
                  <linearGradient id="leafGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(248, 91%, 68%)" />
                    <stop offset="100%" stopColor="hsl(271, 91%, 65%)" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-bold">AllergenAI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your AI-powered companion for safe, worry-free eating. Protecting your health, one scan at a time.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-violet-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AllergenAI. All rights reserved. Made with ❤️ for safer eating.</p>
        </div>
      </div>
    </footer>
  );
}
