import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

import imgFunilaria from '../assets/imagemFunilaria.png';
import imgTranskopp from '../assets/idVisualTranskopp.png';
// import imgFunilaria from '../assets/imagemFunilaria.png';



const Testimonials = () => {
  const testimonials = [
    {
      name: 'Funilaria Impacto',
      position: 'Serviços',
      company: '',
      rating: 5,
      text: 'Agradeço imensamente à equipe 4 Solutions pelo apoio e parceria',
      image: imgFunilaria
    },
    {
      name: 'Transkopp',
      position: 'Seviços',
      company: '',
      rating: 5,
      text: 'Excelente trabalho! O app ficou moderno, rápido e muito funcional. A aplicação voltada para o gerenciamento do controle de ponto dos colaboradores agilizou processos e centralizou as operações.',
      image: imgTranskopp
    },
    {
      name: 'Transkopp / Prada Metalúrgica',
      position: 'Serviços',
      company: '',
      rating: 5,
      text: 'Serviço de acompanhamento de processos tem agilizado a gestão das atividades.',
      image: imgTranskopp
    },

  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-lg">Sucesso do Cliente</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">O que nossos clientes dizem</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Não acredite apenas na nossa palavra – ouça as empresas que ajudamos a transformar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 relative"
            >
              <Quote className="absolute top-6 right-6 text-orange-500/20" size={48} />

              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                <img alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-orange-500" src={testimonial.image} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-orange-500 text-sm">{testimonial.position}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-orange-500 fill-orange-500" size={16} />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;