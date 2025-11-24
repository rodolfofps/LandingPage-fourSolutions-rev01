import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  const navItems = [{
    label: 'Home',
    id: 'hero'
  }, {
    label: 'Portfólio',
    id: 'portfolio'
  }, {
    label: 'Soluções',
    id: 'solutions'
  }, {
    label: 'Depoimentos',
    id: 'testimonials'
  }, {
    label: 'Sobre',
    id: 'about'
  }, {
    label: 'Contato',
    id: 'contact'
  }];
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-orange-500/10' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{
          scale: 1.05
        }} className="text-2xl font-bold">
            <span className="text-white">FOUR</span>
            <span className="text-orange-500">SOLUTIONS</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium">
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection('contact')} className="bg-orange-500 hover:bg-orange-600 text-white">
              Vamos começar!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium py-2">
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection('contact')} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Get Started
            </Button>
          </motion.div>}
      </nav>
    </motion.header>;
};
export default Header;