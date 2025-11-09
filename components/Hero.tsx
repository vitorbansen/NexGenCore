'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Fixa */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aimagemem3Dcoma.png"
          alt="Engenharia Ambiental"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-orange/30 to-transparent animate-float"></div>
          <div className="absolute bottom-0 right-1/3 w-1 h-24 bg-gradient-to-b from-transparent via-navy-blue/30 to-transparent animate-float-delayed"></div>
        </div>
      </div>

      {/* Content com animações */}
      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge decorativo */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-orange animate-pulse"></div>
          <span className="text-white text-sm font-medium">31 Anos de Excelência</span>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
          <span className="block mb-2">Tradição e Inovação:</span>
          <span className="block bg-gradient-to-r from-orange via-white to-navy-blue bg-clip-text text-transparent animate-gradient">
            A Evolução da Engenharia
          </span>
        </h1>

        {/* Descrição */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-up-delayed font-light">
          Experiência consolidada em engenharia ambiental, mecânica e segurança do trabalho. 
          <span className="block mt-2 font-medium text-white">A NexGenCore está redefinindo o futuro da engenharia no Brasil.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
          <Link
            href="#especialidades"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange to-orange/90 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange/50"
          >
            <span className="relative z-10">Conheça Nossas Soluções</span>
            <svg 
              className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-orange/50 to-navy-blue/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </Link>

          <Link
            href="https://wa.me/5547991298477?text=Olá,%20Vim%20pelo%20Site%20e%20Quero%20saber%20mais%20sobre%20seus%20serviços"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
          >
            <span>Fale Conosco</span>
            <svg 
              className="w-5 h-5 transform group-hover:rotate-45 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-30px); opacity: 0.6; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.8s both;
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease-out 0.2s both;
        }
        
        .animate-slide-up-delayed {
          animation: slideUp 1s ease-out 0.5s both;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}