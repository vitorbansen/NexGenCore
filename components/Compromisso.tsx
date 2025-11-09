'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Compromisso() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
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

  const valores = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Inovação Contínua',
      color: 'from-orange to-orange/80'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sustentabilidade',
      color: 'from-emerald-green to-emerald-green/80'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Segurança',
      color: 'from-navy-blue to-navy-blue/80'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Expertise Técnica',
      color: 'from-purple-500 to-purple-500/80'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-light-gray/30 to-white overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título - Animação de cima */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-green/10 border border-emerald-green/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-green animate-pulse"></div>
            <span className="text-emerald-green text-sm font-semibold">Visão de Futuro</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-blue mb-6">
            Nosso Compromisso com o <span className="bg-gradient-to-r from-emerald-green to-navy-blue bg-clip-text text-transparent">Futuro</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-green rounded-full"></div>
            <div className="w-8 h-1 bg-emerald-green rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-emerald-green rounded-full"></div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Texto - Animação da esquerda */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-green to-navy-blue rounded-full"></div>
              <p className="text-lg text-dark-gray leading-relaxed pl-4">
                A <span className="font-semibold text-navy-blue">NexGenCore Engenharia</span> está comprometida em oferecer <span className="font-semibold text-emerald-green">soluções que não apenas atendam às demandas atuais</span>, mas que também antecipem os desafios do futuro. Nosso foco está em inovação contínua, sustentabilidade, segurança e confiabilidade, e expertise técnica avançada.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-navy-blue to-emerald-green rounded-full"></div>
              <p className="text-lg text-dark-gray leading-relaxed pl-4">
                Acreditamos que o futuro da engenharia passa pela <span className="font-semibold text-navy-blue">integração de tecnologias avançadas</span>, análise de dados e uma profunda compreensão dos impactos ambientais. Estamos aqui para <span className="font-semibold text-emerald-green">liderar essa transformação</span>.
              </p>
            </div>

            {/* Badges de Valores */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {valores.map((valor, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${valor.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {valor.icon}
                  </div>
                  <span className="text-sm font-semibold text-navy-blue">{valor.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem Principal - Animação da direita */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            onMouseEnter={() => setHoveredImage(0 as any)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className={`relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
              hoveredImage === 0 ? 'scale-105 shadow-emerald-green/20' : ''
            }`}>
              {/* Overlay gradiente */}
              <div className={`absolute inset-0 bg-gradient-to-t from-navy-blue/60 via-transparent to-transparent z-10 transition-opacity duration-500 ${
                hoveredImage === 0 ? 'opacity-80' : 'opacity-40'
              }`}></div>
              
              <Image
                src="/images/cidadearborizadaco.png"
                alt="Cidade Arborizada"
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredImage === 0 ? 'scale-110' : 'scale-100'
                }`}
              />

              {/* Badge flutuante */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-green to-emerald-green/80 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-navy-blue">Cidades Sustentáveis</div>
                      <div className="text-xs text-dark-gray">Futuro Verde e Consciente</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento decorativo */}
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-green/20 to-navy-blue/20 rounded-full blur-2xl transition-all duration-500 ${
              hoveredImage === 0 ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
            }`}></div>
          </div>
        </div>

        {/* CTA Final - Animação de baixo */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative bg-gradient-to-r from-emerald-green via-emerald-green to-navy-blue/20 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            {/* Padrão de fundo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute top-0 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Vamos Construir o Futuro Juntos?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato e descubra como podemos transformar seus desafios em soluções sustentáveis e inovadoras.
              </p>
              <a
                href="https://wa.me/5547991298477?text=Olá,%20vim%20pelo%20site%20e%20quero%20construir%20o%20futuro%20com%20a%20NextGenCore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-green rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Iniciar Conversa</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}