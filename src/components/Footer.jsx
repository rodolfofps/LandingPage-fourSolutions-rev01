import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

import Modal from './Modal/Modal';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const togglePolicyModal = () => setIsPolicyOpen(!isPolicyOpen);

  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const toggleTermsModal = () => setIsTermsOpen(!isTermsOpen);

  const footerLinks = {
    company: [
      { label: 'Sobre Nós', href: '#about' },
      { label: 'Nosso time', href: '#' },
      { label: 'Contato', href: '#contact' }
    ],
    services: [
      { label: 'ERPs', href: '#solutions' },
      { label: 'Landing Pages', href: '#solutions' },
      { label: 'Desenvolvimento Customizado', href: '#solutions' },
      { label: 'Data Analytics', href: '#solutions' }
    ],
    resources: [
      { label: 'Estudos de Caso', href: '#portfolio' },
      { label: 'Documentação', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">

        {/* Grid principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-2xl font-bold">
                <span className="text-white">Four</span>
                <span className="text-orange-500">Solutions</span>
              </span>
            </motion.div>

            <p className="text-gray-400 mb-6 max-w-md">
              Empresa de consultoria em TI que entrega soluções tecnológicas inovadoras
              que transformam negócios e impulsionam o crescimento.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-900 p-2 rounded-lg hover:bg-orange-500 transition-colors duration-300 group"
                >
                  <social.icon className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <span className="font-bold text-lg mb-4 block">Empresa</span>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <span className="font-bold text-lg mb-4 block">Serviços</span>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <span className="font-bold text-lg mb-4 block">Resources</span>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-sm">
              © {currentYear} Four Solutions Consultoria. Todos os direitos reservados.
            </p>

            <div className="flex gap-6 text-sm">
              <button
                onClick={togglePolicyModal}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                Política de Privacidade
              </button>

              <button
                onClick={toggleTermsModal}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                Termos de Serviço
              </button>

              {/*  { { <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Termos de Serviço }
              </a> } */}
            </div>
          </div>
        </div>
      </div>

      {/* Modal renderizado corretamente FORA do <a> */}
      <Modal
        isOpen={isPolicyOpen}
        onClose={togglePolicyModal}
        title="Política de Privacidade"
      >
        <PrivacyPolicy />
      </Modal>

      <Modal
        isOpenTerms={isTermsOpen}
        onCloseTerms={toggleTermsModal}
        titleTerms="Termos de Serviço"
      >
        <TermsOfService />
      </Modal>

    </footer>
  );
};

export default Footer;
