import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, TrendingUp, Target, Lightbulb } from 'lucide-react';
const About = () => {
  const stats = [{
    number: '5+',
    label: 'Projetos completados',
    icon: Target
  }, {
    number: '1+',
    label: 'Anos de Experiência',
    icon: Award
  }, {
    number: '50+',
    label: 'Expert Consultants',
    icon: Users
  }, {
    number: '98%',
    label: 'Client Satisfaction',
    icon: TrendingUp
  }];
  const values = [{
    icon: Lightbulb,
    title: 'Inovação Primeiro',
    description: 'Nos mantemos à frente das tendências tecnológicas para entregar soluções de ponta.'
  }, {
    icon: Users,
    title: 'Centrado no Cliente',
    description: 'Seu sucesso é o nosso sucesso. Construímos parcerias duradouras.'
  }, {
    icon: Award,
    title: 'Excelência',
    description: 'Mantemos um alto padrão em tudo o que entregamos.'
  }, {
    icon: Globe,
    title: 'Suporte',
    description: 'Sempre servindo os clientes com um suporte adequado e dedicação.'
  }];
  return <section id="about" className="py-24 bg-black">
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
        <span className="text-orange-500 font-semibold text-lg">Quem Somos</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Consultoria em TI</h2>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">Somos uma consultoria especializada em TI, formada por 4 amigos que se conheceram na faculdade e que têm o sonho de proporcionar soluções acessíveis à quem precisa! Focada em soluções digitais inovadoras para empresas de pequeno porte. Nossa equipe une experiência técnica, criatividade e agilidade para entregar resultados reais.</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 text-center group">
          <stat.icon className="mx-auto mb-4 text-orange-500 group-hover:scale-110 transition-transform" size={32} />
          <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </motion.div>)}
      </div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
          <h3 className="text-3xl font-bold mb-6">Transformando negócios através da Tecnologia</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            A TechVision é uma empresa de consultoria de TI de destaque dedicada a ajudar empresas a navegar pelo complexo mundo da tecnologia. Nossa equipe de consultores especialistas traz profundo conhecimento do setor e expertise técnica para cada projeto.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Somos especializados em soluções em nuvem, cibersegurança, desenvolvimento de software personalizado e transformação digital. Nossa abordagem combina pensamento estratégico com implementação prática para entregar resultados mensuráveis.
          </p>
          {/* <p className="text-gray-300 leading-relaxed">
            From startups to Fortune 500 companies, we've helped organizations across industries leverage technology to achieve their business goals and stay competitive in the digital age.
          </p> */}
        </motion.div>

        <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="relative">
          <img alt="TechVision team collaborating" className="rounded-xl shadow-2xl shadow-orange-500/20" src="src/assets/four-team.PNG" />
          <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-orange-500 rounded-xl -z-10"></div>
        </motion.div>
      </div>

      {/* Values */}
      <div>
        <h3 className="text-3xl font-bold text-center mb-12">Nossos Valores</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 text-center group">
            <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
              <value.icon className="text-orange-500 group-hover:text-white transition-colors" size={28} />
            </div>
            <h4 className="text-xl font-bold mb-3">{value.title}</h4>
            <p className="text-gray-400 text-sm">{value.description}</p>
          </motion.div>)}
        </div>
      </div>
    </div>
  </section>;
};
export default About;