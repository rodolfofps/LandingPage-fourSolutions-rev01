import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import PrivacyPolicy from './components/PrivacyPolicy';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster.jsx';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const togglePolicyModal = () => setIsPolicyOpen(!isPolicyOpen);
  
  return (
    <>
      <Helmet>
        <title>Four Solutions - Ajudando você a conquistar metas</title>
        <meta name="description" content="Leading IT consulting firm specializing in digital transformation, cloud solutions, cybersecurity, and custom software development. Transform your business with our expert technology solutions." />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <Portfolio />
          <Solutions />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;