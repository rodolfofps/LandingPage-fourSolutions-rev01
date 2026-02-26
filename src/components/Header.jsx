import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '../data/products';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

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
    label: 'Produtos',
    hasDropdown: true
  },
  {
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
          {navItems.map(item => {

            // 👉 ITEM NORMAL (sem dropdown)
            if (!item.hasDropdown) {
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              );
            }

            // 👉 ITEM COM DROPDOWN (Produtos)
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium">
                  {item.label}
                </button>

                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-72 pt-2"
                  >
                    <div className="bg-black border border-orange-500/20 rounded-xl shadow-xl p-4">
                      {products.map((product, index) => (
                        <a
                          key={index}
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 rounded-lg hover:bg-orange-500/10 transition"
                        >
                          <p className="text-white font-semibold">
                            {product.name}
                          </p>
                          {product.description && (
                            <p className="text-sm text-gray-400">
                              {product.description}
                            </p>
                          )}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
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