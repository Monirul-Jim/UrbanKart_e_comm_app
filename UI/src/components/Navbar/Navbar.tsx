'use client'
import React, { useState, ReactNode } from 'react';
import { Menu, X, Home, Info, Mail, Phone } from 'lucide-react';

interface NavLinkProps {
  icon: ReactNode; 
  text: string;
  href: string;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void; 
}

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg p-4 sticky top-0 z-50 rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-white text-3xl font-extrabold tracking-wider">
          MyBrand
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <NavLink icon={<Home className="w-5 h-5 mr-1" />} text="Home" href="/" />
          <NavLink icon={<Info className="w-5 h-5 mr-1" />} text="About" href="#" />
          <NavLink icon={<Mail className="w-5 h-5 mr-1" />} text="Services" href="#" />
          <NavLink icon={<Phone className="w-5 h-5 mr-1" />} text="Login" href="login" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-md p-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-blue-700 to-indigo-800 flex flex-col items-center justify-center space-y-8 animate-fade-in z-40">
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-md p-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <X size={32} />
          </button>
          <MobileNavLink icon={<Home className="w-6 h-6 mr-2" />} text="Home" href="#" onClick={toggleMenu} />
          <MobileNavLink icon={<Info className="w-6 h-6 mr-2" />} text="About" href="#" onClick={toggleMenu} />
          <MobileNavLink icon={<Mail className="w-6 h-6 mr-2" />} text="Services" href="#" onClick={toggleMenu} />
          <MobileNavLink icon={<Phone className="w-6 h-6 mr-2" />} text="Contact" href="#" onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
}

function NavLink({ icon, text, href }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-white text-lg font-medium hover:text-blue-200 transition-all duration-300 flex items-center group relative overflow-hidden px-3 py-2 rounded-lg"
    >
      <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></span>
      {icon}
      <span className="relative">{text}</span>
    </a>
  );
}

function MobileNavLink({ icon, text, href, onClick }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-white text-3xl font-bold hover:text-blue-300 transition-colors duration-300 flex items-center px-6 py-4 rounded-xl transform hover:scale-105"
    >
      {icon}
      {text}
    </a>
  );
}
export default Navbar;