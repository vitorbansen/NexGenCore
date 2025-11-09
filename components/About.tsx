'use client';

import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const values = [
    { 
      title: 'Inovação Contínua', 
      description: 'Buscamos constantemente novas soluções e tecnologias para melhorar nossos serviços.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      title: 'Sustentabilidade', 
      description: 'Comprometidos com práticas ambientalmente responsáveis e sustentáveis.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: 'Segurança e Confiabilidade', 
      description: 'A segurança de nossos clientes e equipes é nossa prioridade máxima.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      title: 'Expertise Técnica Avançada', 
      description: 'Equipe altamente qualificada com conhecimento técnico profundo e atualizado.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="sobre" 
      className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-light-gray/30 overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-blue/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título com badge - Animação de cima */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-orange animate-pulse"></div>
            <span className="text-orange text-sm font-semibold">31 Anos de Tradição</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-blue mb-6">
            Quem <span className="bg-gradient-to-r from-orange to-navy-blue bg-clip-text text-transparent">Somos</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-orange rounded-full"></div>
            <div className="w-8 h-1 bg-orange rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-orange rounded-full"></div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Texto - Animação da esquerda */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange to-navy-blue rounded-full"></div>
              <p className="text-lg text-dark-gray leading-relaxed pl-4">
                A <span className="font-semibold text-navy-blue">NexGenCore Engenharia</span> nasce da evolução de <span className="font-semibold text-orange">31 anos de experiência</span> herdada da MCA Engenharia. Combinamos a tradição e confiabilidade de três décadas de atuação em engenharia ambiental, mecânica e segurança do trabalho com uma visão inovadora e foco em tecnologia de ponta.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-navy-blue to-orange rounded-full"></div>
              <p className="text-lg text-dark-gray leading-relaxed pl-4">
                Nossa jornada é marcada por um <span className="font-semibold text-navy-blue">profundo conhecimento técnico</span> e um compromisso inabalável com a excelência, agora impulsionados por uma nova geração de soluções de engenharia que integram análise de dados, automação e sustentabilidade.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-orange mb-1">31+</div>
                <div className="text-sm text-dark-gray">Anos</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-navy-blue mb-1">100+</div>
                <div className="text-sm text-dark-gray">Projetos</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-orange mb-1">50+</div>
                <div className="text-sm text-dark-gray">Clientes</div>
              </div>
            </div>
          </div>

          {/* Valores Cards - Animação da direita */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            {values.map((value, index) => (
              <div
                key={index}
                // onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group bg-white p-6 rounded-2xl border-2 transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'border-orange shadow-xl shadow-orange/20 scale-105' 
                    : 'border-gray-200 hover:border-orange/50 hover:shadow-lg'
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms'
                }}
              >
                {/* Ícone */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'bg-gradient-to-br from-orange to-orange/80 text-white scale-110' 
                    : 'bg-orange/10 text-orange'
                }`}>
                  {value.icon}
                </div>

                {/* Título */}
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-orange' : 'text-navy-blue'
                }`}>
                  {value.title}
                </h3>

                {/* Descrição */}
                <p className="text-dark-gray leading-relaxed text-sm">
                  {value.description}
                </p>

                {/* Elemento decorativo no hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange to-navy-blue rounded-b-2xl transform origin-left transition-transform duration-300 ${
                  hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Animação de baixo */}
        <div className={`relative transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-gradient-to-r from-navy-blue to-navy-blue/95 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            {/* Padrão de fundo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Pronto para Transformar seu Projeto?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Vamos conversar sobre como podemos ajudar sua empresa com soluções inovadoras em engenharia.
              </p>
              <a
                href="https://wa.me/5547991298477?text=Olá,%20vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20os%20Serviços%20da%20NextGenCore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span>Fale com Nossos Especialistas</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}