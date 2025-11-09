'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Especialidades() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const especialidades = [
    {
      title: 'Otimização de Combustão em Caldeiras',
      description:
        'Realizamos regulagem da queima dos mais diversos combustíveis em caldeiras com duplo objetivo: maximizar a economia energética e garantir o enquadramento das emissões atmosféricas dentro dos padrões legais.',
      benefits: [
        'Redução significativa no consumo de combustível',
        'Minimização das emissões poluentes',
        'Conformidade com a legislação ambiental vigente',
        'Otimização da eficiência térmica dos equipamentos',
      ],
      image: '/images/ilustradocaochamine.png',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
    },
    {
      title: 'Modelagem de Dispersão Atmosférica',
      description:
        'Utilizamos o software AERMOD (American Meteorological Society / Environmental Protection Agency Regulatory Model) para realizar estudos precisos de modelagem de dispersão atmosférica.',
      benefits: [
        'Prever o comportamento de poluentes na atmosfera',
        'Avaliar impactos ambientais de emissões industriais',
        'Dimensionar adequadamente sistemas de controle de poluição',
        'Subsidiar processos de licenciamento ambiental com dados técnicos robustos',
      ],
      image: '/images/fabrica.png',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="especialidades" 
      className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-light-gray/30 to-white overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-green/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título - Animação de cima */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-green/10 border border-emerald-green/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-green animate-pulse"></div>
            <span className="text-emerald-green text-sm font-semibold">Excelência Técnica</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-blue mb-6">
            Nossas <span className="bg-gradient-to-r from-emerald-green to-navy-blue bg-clip-text text-transparent">Especialidades</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-green rounded-full"></div>
            <div className="w-8 h-1 bg-emerald-green rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-emerald-green rounded-full"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-24">
          {especialidades.map((esp, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              } ${
                index % 2 === 0 
                  ? isVisible ? 'translate-x-0' : '-translate-x-20'
                  : isVisible ? 'translate-x-0' : 'translate-x-20'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              {/* Imagem */}
              <div 
                className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                // onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
                  hoveredCard === index ? 'scale-105 shadow-emerald-green/20' : ''
                }`}>
                  {/* Overlay gradiente */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-navy-blue/20 to-transparent z-10 transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-70' : 'opacity-40'
                  }`}></div>
                  
                  <Image
                    src={esp.image}
                    alt={esp.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      hoveredCard === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Badge com ícone */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ${
                      hoveredCard === index 
                        ? 'bg-emerald-green text-white scale-110' 
                        : 'bg-white/90 text-emerald-green'
                    }`}>
                      {esp.icon}
                    </div>
                  </div>
                </div>

                {/* Elemento decorativo */}
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-green/20 to-navy-blue/20 rounded-full blur-2xl transition-all duration-500 ${
                  hoveredCard === index ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
                }`}></div>
              </div>

              {/* Conteúdo */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                {/* Número do card */}
                <div className="inline-flex items-center gap-3 mb-2">
                  <div className="text-6xl font-bold text-emerald-green/20">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-navy-blue leading-tight">
                  {esp.title}
                </h3>
                
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-green to-transparent rounded-full"></div>

                <p className="text-lg text-dark-gray leading-relaxed">
                  {esp.description}
                </p>

                {/* Benefícios */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-emerald-green/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-green/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-bold text-navy-blue text-lg">Principais Benefícios</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {esp.benefits.map((benefit, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-3 group"
                        style={{ 
                          transitionDelay: isVisible ? `${500 + i * 100}ms` : '0ms' 
                        }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-green/10 flex items-center justify-center mt-0.5 group-hover:bg-emerald-green group-hover:scale-110 transition-all duration-300">
                          <span className="text-emerald-green text-sm font-bold group-hover:text-white">✓</span>
                        </div>
                        <span className="text-dark-gray leading-relaxed group-hover:text-navy-blue transition-colors duration-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="https://wa.me/5547991298477?text=Olá,%20vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20as%20Especialidades%20da%20NextGenCore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-green to-emerald-green/90 text-white rounded-xl font-semibold hover:from-emerald-green/90 hover:to-emerald-green transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-green/20"
                  >
                    <span>Saiba Mais</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final - Animação de baixo */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative bg-gradient-to-r from-navy-blue via-navy-blue to-emerald-green/20 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            {/* Padrão de fundo animado */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}