import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store in localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    toast({
      title: "Mensagem enviada com sucesso! ✅",
      description: "Obrigado por entrar em contato. Retornaremos num prazo de 24h."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contato-foursolutions@hotmail.com',
      link: 'mailto:contato-foursolutions@hotmail.com'
    },
    {
      icon: MessageCircleIcon,
      title: 'Phone (WhatsApp)',
      value: '+55 (19) 99624-5691',
      link: 'https://wa.me/5519996245691?text=Olá! Gostaria de saber mais sobre seus serviços.'
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-lg">Entre em contato</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Inicie seu Projeto</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Pronto? Contate-nos hoje para iniciar seu projeto
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-xl border border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Nome completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-orange-500"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Endereço de e-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-orange-500"
                    placeholder="endereco@domain.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-300">Empresa/Pessoa Física</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-orange-500"
                    placeholder="Sua empresa/Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-orange-500"
                    placeholder="+55 (XX) XXXXXXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-gray-300">Interessado em:</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-orange-500 focus:outline-none"
                >
                  <option value="">Escolha um serviço</option>
                  <option value="cloud">Soluções para Serviços de Nuvem</option>
                  <option value="development">Desenvolvimento customizado</option>
                  <option value="analytics">Data Analytics</option>
                  <option value="mobile">Soluções Mobile</option>
                  <option value="ai">IA & Machine Learning</option>
                  <option value="devops">Serviços DevOps</option>
                  <option value="transformation">Transformações Digitais</option>

                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">Mensagem *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg group"
              >
                Enviar Mensagem
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Informação de Contato</h3>
              <p className="text-gray-400 mb-8">
                Tem dúvidas? Estamos aqui para ajudar. Contate-nos através de um dos canais.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300 group"
                  >
                    <div className="bg-orange-500/10 p-3 rounded-lg group-hover:bg-orange-500 transition-colors">
                      <info.icon className="text-orange-500 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h4 className="font-bold text-xl mb-4">Horário Comercial</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span className="text-white">9h - 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">Fechado</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white">Fechado</span>
                </div>
              </div>
            </div>

{/* Localização sede */}
            {/* <div className="relative rounded-xl overflow-hidden h-64">
              <img alt="TechVision office location" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1683022928893-cf011abdb205" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h4 className="font-bold text-xl mb-2">Visit Our Office</h4>
                  <p className="text-gray-300 text-sm">Schedule a meeting at our San Francisco headquarters</p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;