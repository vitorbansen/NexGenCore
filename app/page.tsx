import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Especialidades from '@/components/Especialidades';
import Clientes from '@/components/Clientes';
import Compromisso from '@/components/Compromisso';
// import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Especialidades />
      <Clientes />
      <Compromisso />
      {/* <Contato /> */}
      <Footer />
    </div>
  );
}
