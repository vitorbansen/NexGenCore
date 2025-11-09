'use client';

import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio de formulário
    setTimeout(() => {
      setSubmitMessage('Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
      });
      setIsSubmitting(false);

      // Limpar mensagem após 5 segundos
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-blue mb-4">
            Entre em Contato Conosco
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto"></div>
        </div>

        {/* Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-navy-blue mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-blue mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-navy-blue mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>

              {/* Assunto */}
              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-navy-blue mb-2">
                  Assunto
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="Otimização de Combustão">Otimização de Combustão em Caldeiras</option>
                  <option value="Modelagem Atmosférica">Modelagem de Dispersão Atmosférica</option>
                  <option value="Consultoria">Consultoria Ambiental</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-navy-blue mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange resize-none"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </div>

              {/* Botão Enviar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-bold disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>

              {/* Mensagem de Sucesso */}
              {submitMessage && (
                <div className="bg-emerald-green text-white p-4 rounded-lg">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-navy-blue mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <p className="text-sm font-medium text-dark-gray mb-2">Email</p>
                  <a
                    href="mailto:contato@nexgencore.com.br"
                    className="text-orange hover:text-navy-blue transition font-medium"
                  >
                    contato@nexgencore.com.br
                  </a>
                </div>

                {/* Telefone */}
                <div>
                  <p className="text-sm font-medium text-dark-gray mb-2">Telefone</p>
                  <a
                    href="tel:+554733000000"
                    className="text-orange hover:text-navy-blue transition font-medium"
                  >
                    (47) 3300-0000
                  </a>
                </div>

                {/* Endereço */}
                <div>
                  <p className="text-sm font-medium text-dark-gray mb-2">Endereço</p>
                  <p className="text-dark-gray">
                    Joinville, Santa Catarina<br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-navy-blue mb-6">
                Horário de Funcionamento
              </h3>

              <div className="space-y-3 text-dark-gray">
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="font-medium">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-medium">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-medium">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
