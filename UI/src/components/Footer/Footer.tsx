import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Shopora</h2>
          <p className="mt-3 text-sm">
            Your one-stop shop for the best deals. Trendy products, fast delivery, and secure checkout.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Mobile</a></li>
            <li><a href="#" className="hover:text-white">TV</a></li>
            <li><a href="#" className="hover:text-white">Laptop</a></li>
            <li><a href="#" className="hover:text-white">Accessories</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <Facebook className="w-5 h-5" /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <Twitter className="w-5 h-5" /> Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-6 py-4 text-center text-sm">
        © {new Date().getFullYear()} Shopora. All rights reserved.
      </div>
    </footer>
  );
}
