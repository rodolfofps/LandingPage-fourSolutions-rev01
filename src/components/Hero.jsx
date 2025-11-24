import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const features = [{
    icon: Code,
    text: 'Desenvolvimento Customizado'
  }, {
    icon: Cloud,
    text: 'Soluções em nuvem'
  }];
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }}>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
              <span className="text-orange-500 font-semibold">Consultoria em TI </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transforme seu 
              <span className="block text-orange-500">Negócio</span>
              com soluções digitais sob medida!
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Entregamos uma solução personalizada para você, desenvolvimento de pequenos e médios sistemas, automações e inovações para seu negócio. 
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={scrollToContact} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg group">
                Fale conosco
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => document.getElementById('portfolio').scrollIntoView({
              behavior: 'smooth'
            })} variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg">
                Veja nossas soluções!
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4 + index * 0.1
            }} className="flex items-center gap-2 text-gray-300">
                  <feature.icon className="text-orange-500" size={20} />
                  <span>{feature.text}</span>
                </motion.div>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative">
            <div className="relative">
              <img alt="Modern IT consulting workspace with technology" className="rounded-lg shadow-2xl shadow-orange-500/20" src="src\assets\imagemLandingPage-1.png" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-orange-500 rounded-lg -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;