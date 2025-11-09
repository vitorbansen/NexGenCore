'use client';

import { useState, useEffect, useRef } from 'react';

export default function Clientes() {
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

  const clientes = [
    {
      setor: 'Setor Têxtil',
      empresas: [
        'Redotex Tinturaria',
        'Biolav Beneficiamento Têxtil',
        'Multiave Lavanderia',
        'Rosin Beneficiamento Têxtil',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500',
      iconBg: 'bg-purple-500',
    },
    {
      setor: 'Setor Industrial e de Serviços',
      empresas: [
        'Eletrogyx Termoelétrica',
        'Daelco Comércio e Serviços',
        'Tamposul Indústria e Serviços de Tampografia',
        'Paraná Oil',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500',
      iconBg: 'bg-blue-500',
    },
    {
      setor: 'Setor de Saúde e Bem-Estar',
      empresas: [
        'Associação Beneficente Evangélica de Joinville (Hospital Dona Helena)',
        'Hospital Veterinário 4 Patas',
        'Hidroginástica Revitare',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      hoverBorder: 'hover:border-red-500',
      iconBg: 'bg-red-500',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="clientes" 
      className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-light-gray/30 overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título - Animação de cima */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-orange animate-pulse"></div>
            <span className="text-orange text-sm font-semibold">Parcerias de Sucesso</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-blue mb-6">
            Nossos <span className="bg-gradient-to-r from-orange to-navy-blue bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto mb-8 leading-relaxed">
            Uma carteira de clientes sólida e diversificada que reflete nossa versatilidade e capacidade de atender a diversos setores da economia.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-orange rounded-full"></div>
            <div className="w-8 h-1 bg-orange rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-orange rounded-full"></div>
          </div>
        </div>

        {/* Cards de Clientes por Setor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientes.map((cliente, index: any) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group transition-all duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              } ${
                index === 0 
                  ? isVisible ? 'translate-x-0' : '-translate-x-20'
                  : index === 1
                  ? isVisible ? 'translate-y-0' : 'translate-y-20'
                  : isVisible ? 'translate-x-0' : 'translate-x-20'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {/* Card */}
              <div className={`relative h-full bg-white rounded-3xl p-8 border-2 transition-all duration-500 ${
                cliente.borderColor
              } ${
                hoveredCard === index 
                  ? `${cliente.hoverBorder} shadow-2xl scale-105` 
                  : 'shadow-lg hover:shadow-xl'
              }`}>
                
                {/* Ícone e Título */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    hoveredCard === index 
                      ? `${cliente.iconBg} text-white scale-110 rotate-6` 
                      : `${cliente.bgColor} text-gray-700`
                  }`}>
                    {cliente.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-blue leading-tight">
                      {cliente.setor}
                    </h3>
                  </div>
                </div>

                {/* Linha decorativa */}
                <div className={`w-full h-1 rounded-full mb-6 bg-gradient-to-r ${cliente.color} ${
                  hoveredCard === index ? 'scale-x-100' : 'scale-x-50'
                } transition-transform duration-500 origin-left`}></div>

                {/* Lista de Empresas */}
                <ul className="space-y-4">
                  {cliente.empresas.map((empresa, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 group/item"
                      style={{ 
                        transitionDelay: hoveredCard === index ? `${i * 50}ms` : '0ms' 
                      }}
                    >
                      <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 transition-all duration-300 ${
                        hoveredCard === index ? cliente.iconBg : 'bg-gray-300'
                      } group-hover/item:scale-150`}></div>
                      <span className={`text-dark-gray leading-relaxed transition-all duration-300 ${
                        hoveredCard === index ? 'text-navy-blue translate-x-1' : ''
                      } group-hover/item:text-navy-blue group-hover/item:font-semibold`}>
                        {empresa}
                      </span>
                    </li>
                  ))}
                </ul>



                {/* Elemento decorativo no hover */}
                <div className={`absolute -bottom-2 -right-2 w-24 h-24 rounded-full blur-2xl transition-all duration-500 ${
                  hoveredCard === index 
                    ? `bg-gradient-to-br ${cliente.color} opacity-30 scale-150` 
                    : 'opacity-0 scale-100'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final - Animação de baixo */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative bg-gradient-to-r from-navy-blue to-orange rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            {/* Padrão de fundo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            {/* Elementos decorativos flutuantes */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          </div>
        </div>
      </div>
    </section>
  );
}