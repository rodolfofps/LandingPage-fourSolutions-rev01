import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Code, Database, Smartphone, Cpu, Network, BarChart, ComputerIcon, LayoutTemplateIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';


const Solutions = () => {
  const handleRedirectToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const solutions = [
    {
      icon: ComputerIcon,
      title: 'Mini ERPs',
      description: 'Desenvolvimento de sistemas de gestão sob medida para pequenas empresas.',
      features: ['Migração para Nuvem', 'Otimização de Processos']
    },
    {
      icon: LayoutTemplateIcon,
      title: 'Landing Pages',
      description: 'Criação de páginas de alta conversão para campanhas e produtos.',
      features: ['Responsividade', 'Modernidade']
    },
    {
      icon: Code,
      title: 'Desenvolvimento customizado',
      description: 'Tailored software solutions built with cutting-edge technologies.',
      features: ['Web Applications', 'Mobile Apps', 'API Development']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transformando dados em insights com Analytics e Soluções BI.',
      features: ['Business Intelligence', 'Data Warehousing', 'Predictive Analytics']
    },
  ];

  const handleLearnMore = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="solutions" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-lg">O que oferecemos</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Soluções</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Soluções diversas de TI projetadas para atender aos desafios únicos do seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 cursor-pointer"
            >
              <div className="bg-orange-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <solution.icon className="text-orange-500 group-hover:text-white transition-colors duration-300" size={28} />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                {solution.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {solution.description}
              </p>

              <div className="space-y-2 mb-4">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={handleRedirectToContact}
                variant="ghost"
                className="w-full text-orange-500 hover:bg-orange-500/10 mt-2"
              >
                Saiba mais →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;