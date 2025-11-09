'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-navy-blue/5' 
          : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo com animação */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* <div className="relative w-32 h-32">
              <Image
                src="/images/nexgencore_logo_variation4.png"
                alt="NexGenCore Engenharia"
                width={128}
                height={128}
                className="w-32 h-32 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div> */}
            <div className="hidden sm:block">
              <span className="text-navy-blue font-bold text-xl tracking-tight group-hover:text-orange transition-colors duration-300">
                NexGenCore
              </span>
              <div className="h-0.5 bg-gradient-to-r from-orange to-navy-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </Link>

          {/* Menu Desktop com hover modernos */}
          <div className="hidden md:flex items-center gap-1">
            {['Sobre', 'Especialidades', 'Clientes', 'Contato'].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-dark-gray font-medium group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 group-hover:text-navy-blue transition-colors duration-300">
                  {item}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange/10 to-navy-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange to-navy-blue group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 transform -translate-x-1/2"></div>
              </Link>
            ))}
          </div>

          {/* CTA Button com gradiente animado */}
          <div className="hidden md:block">
            <Link
              href="#contato"
              className="relative inline-block px-6 py-3 font-semibold text-white rounded-xl overflow-hidden bg-gradient-to-r from-orange to-navy-blue hover:from-navy-blue hover:to-orange transition-all duration-500 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Entre em Contato
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Hamburger Menu Animado */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-navy-blue rounded-full transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 bg-navy-blue rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 bg-navy-blue rounded-full transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu com animação elegante */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-b from-white to-light-gray/50 backdrop-blur-xl border-t border-gray-200/50">
          <div className="px-4 py-6 space-y-2">
            {['Sobre', 'Especialidades', 'Clientes', 'Contato'].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-dark-gray font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange/10 hover:to-navy-blue/10 hover:text-navy-blue transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contato"
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-orange to-navy-blue text-white rounded-xl font-semibold text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                animation: isMenuOpen ? 'slideIn 0.3s ease-out 0.4s both' : 'none'
              }}
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}