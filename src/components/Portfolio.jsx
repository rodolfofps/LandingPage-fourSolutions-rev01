import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Lock, Zap, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
const Portfolio = () => {
  const caseStudies = [{
    title: 'ERP Financeiro',
    client: '',
    category: 'Software',
    description: 'Foi desenvolvido um sistema completo para gestão financeira, com dashboard intuitivo e relatórios automatizados.',
    results: ['Redução de custos','Deployment mais rápido'],
    icon: TrendingUp,
    image: 'Cloud infrastructure migration with servers and data centers'
  }, {
    title: 'Landing Page e-commerce',
    client: '',
    category: 'Web',
    description: 'Implementada landing page com design moderno, integração de pagamentos e alta performance.',
    results: ['Zero Breaches', 'HIPAA Compliant', '24/7 Monitoring'],
    icon: ShoppingCart,
    image: 'Cybersecurity operations center with multiple monitors showing security dashboards'
  }, {
    title: 'Dashboard Analytics',
    client: '',
    category: 'Custom Development',
    description: 'Dashboard para análise de KPIs, gráficos dinâmicos e exportação de dados.',
    results: ['150% Revenue Growth', '1M+ Users', 'Real-time Sync'],
    icon: Zap,
    image: 'Modern e-commerce platform interface on multiple devices'
  }];
  const handleViewDetails = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  return <section id="portfolio" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg">Nossas histórias de sucesso</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Portfólio</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Descubra como podemos ajudar seu negócio a transformar operações e alcançar resultados notáveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
              <div className="relative overflow-hidden h-48">
                <img alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1601429675201-f66be94607bb" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-orange-500 p-2 rounded-lg">
                  <study.icon size={24} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <span className="text-orange-500 text-sm font-semibold">{study.category}</span>
                <h3 className="text-2xl font-bold mt-2 mb-2">{study.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{study.client}</p>
                <p className="text-gray-300 mb-6">{study.description}</p>

                <div className="space-y-2 mb-6">
                  {study.results.map((result, idx) => <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-300">{result}</span>
                    </div>)}
                </div>

                <Button onClick={handleViewDetails} variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white group">
                  Ver detalhes
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Portfolio;