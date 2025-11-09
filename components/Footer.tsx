'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-navy-blue to-navy-blue/95 text-white overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative w-48 h-48 transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/nexgencore_logo_variation4.png"
                  alt="NexGenCore Engenharia"
                  width={192}
                  height={192}
                  className="w-48 h-48 object-contain rounded-3xl"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              31 anos de experiência em engenharia ambiental, mecânica e segurança do trabalho.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-3">
              <a 
                href="https://wa.me/5547991298477?text=Olá,%20vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20os%20Serviços%20da%20NextGenCore" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-orange hover:border-orange transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Links Rápidos
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Sobre', 'Especialidades', 'Contato'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-orange transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-orange group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Serviços
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {['Otimização de Combustão', 'Modelagem Atmosférica', 'Consultoria Ambiental'].map((item) => (
                <li key={item}>
                  <a 
                    href="#especialidades" 
                    className="text-gray-300 hover:text-orange transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-orange group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Contato
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a 
                  href="mailto:contato@nexgencore.com.br" 
                  className="hover:text-orange transition-all duration-300 flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-orange/20 group-hover:border-orange transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm">contato@nexgencore.com.br</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5547991298477?text=Olá,%20vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20os%20Serviços%20da%20NextGenCore" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange transition-all duration-300 flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-orange/20 group-hover:border-orange transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm">(47) 9 9129-8477</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm">Joinville, SC - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor com gradiente */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-navy-blue px-4">
              <div className="w-2 h-2 rounded-full bg-orange animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Copyright e Links Legais */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {currentYear} <span className="text-white font-medium">NexGenCore Engenharia</span>. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 text-gray-400">
            <Link href="#" className="hover:text-orange transition-colors duration-300 relative group">
              Política de Privacidade
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#" className="hover:text-orange transition-colors duration-300 relative group">
              Termos de Uso
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}