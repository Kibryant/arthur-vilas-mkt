import Image from "next/image"
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaChartLine,
  FaBullseye,
  FaUsers,
  FaTrophy,
} from "react-icons/fa6"

export default function Home() {
  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://api.whatsapp.com/send/?phone=73933009905&text&type=phone_number&app_absent=0",
      ariaLabel: "Conectar no WhatsApp",
      icon: <FaWhatsapp />,
      bg: "bg-whatsapp hover:bg-whatsapp-dark focus:ring-whatsapp",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arthurvboass",
      ariaLabel: "Conectar no LinkedIn",
      icon: <FaLinkedin />,
      bg: "bg-linkedin hover:bg-linkedin-dark focus:ring-linkedin",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/vilasmktE",
      ariaLabel: "Seguir no Instagram",
      icon: <FaInstagram />,
      bg: "bg-gradient-to-r from-instagram-orange via-instagram-pink to-instagram-purple hover:from-instagram-orange-dark focus:ring-instagram-pink",
    },
  ]

  const services = [
    {
      icon: <FaTrophy className="text-3xl text-whatsapp" />,
      title: "Meta Ads",
      description: "Campanhas otimizadas no Facebook e Instagram com foco em conversão e ROI máximo.",
    },
    {
      icon: <FaBullseye className="text-3xl text-linkedin" />,
      title: "Google Ads",
      description: "Anúncios estratégicos no Google para capturar leads qualificados no momento certo.",
    },
    {
      icon: <FaChartLine className="text-3xl text-instagram-pink" />,
      title: "Growth Marketing",
      description: "Estratégias de crescimento escalável com análise de dados e otimização contínua.",
    },
  ]

  const results = [
    { number: "500+", label: "Campanhas Criadas" },
    { number: "2M+", label: "Leads Gerados" },
    { number: "150+", label: "Clientes Atendidos" },
    { number: "300%", label: "ROI Médio" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-accent/5 via-background to-accent/10">
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-accent/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-whatsapp/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-linkedin/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-instagram-pink/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-accent/10 rounded-full px-6 py-2 text-sm font-medium text-accent shadow-lg">
              <div className="w-2 h-2 bg-whatsapp rounded-full animate-pulse"></div>
              <span>🚀 Especialista em Tráfego Pago</span>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-2">
              <div className="relative w-40 h-40 group">
                  <Image src="/logo.png" alt="Logo Arthur Vilas" fill className="object-contain" />
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-whatsapp via-linkedin to-instagram-pink bg-clip-text text-transparent animate-gradient">
                  Arthur Vilas
                </span>
              </h1>
            </div>

            {/* Value Proposition */}
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-secondary leading-relaxed mb-6">
                <span className="font-semibold text-primary">Transformo seu investimento em vendas reais</span>
                <br />
                com estratégias de tráfego pago que{" "}
                <span className="text-primary font-semibold">realmente funcionam</span>
              </p>

              {/* Stats Preview */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-whatsapp">500+</div>
                  <div className="text-xs text-secondary">Campanhas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-linkedin">2M+</div>
                  <div className="text-xs text-secondary">Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-instagram-pink">300%</div>
                  <div className="text-xs text-secondary">ROI Médio</div>
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://api.whatsapp.com/send/?phone=73933009905&text=Olá Arthur! Quero uma consultoria GRATUITA sobre tráfego pago para escalar meu negócio.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white font-bold text-xl px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-whatsapp/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-whatsapp-dark to-whatsapp rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FaWhatsapp className="text-2xl relative z-10" />
                  <span className="relative z-10">Consultoria GRATUITA</span>
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                    GRÁTIS
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/arthurvboass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white border-2 border-linkedin text-linkedin font-bold text-lg px-8 py-4 rounded-full hover:bg-linkedin hover:text-white transition-all duration-300 shadow-lg"
                >
                  <FaLinkedin className="text-xl" />
                  Ver Casos de Sucesso
                </a>
              </div>

              <p className="text-sm text-secondary max-w-md mx-auto">
                ⚡ Resposta em até 2 horas • 🎯 Análise gratuita do seu negócio • 📈 Estratégia personalizada
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-accent mb-4">Meus Serviços</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Especializado em estratégias de tráfego pago que geram resultados reais para seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-accent mb-4">{service.title}</h3>
                  <p className="text-secondary leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-whatsapp/10 via-linkedin/10 to-instagram-pink/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-accent mb-4">Resultados Comprovados</h2>
            <p className="text-lg text-secondary">Números que falam por si só</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{result.number}</div>
                <div className="text-secondary font-medium">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-accent mb-4">O Que Dizem Meus Clientes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <FaTrophy className="text-2xl text-whatsapp mr-3" />
                <div>
                  <h4 className="font-bold text-accent">Maria Silva</h4>
                  <p className="text-sm text-secondary">E-commerce de Moda</p>
                </div>
              </div>
              <p className="text-secondary italic">
                "Arthur transformou meu negócio! Em 3 meses, minhas vendas online triplicaram. Profissional excepcional
                e resultados garantidos!"
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <FaUsers className="text-2xl text-linkedin mr-3" />
                <div>
                  <h4 className="font-bold text-accent">João Santos</h4>
                  <p className="text-sm text-secondary">Clínica Odontológica</p>
                </div>
              </div>
              <p className="text-secondary italic">
                "Investimento que vale cada centavo! Arthur conseguiu trazer pacientes qualificados e aumentar nossa
                receita em 250%."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Enhanced CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white font-medium mb-8">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>🚀 Última Chance de Garantir Sua Vaga</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Pronto Para Aumentar
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              10x Suas Vendas?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed">
            Não perca mais tempo com estratégias que não funcionam.
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Vamos criar uma estratégia de tráfego pago personalizada para o seu negócio em uma
            <span className="font-bold text-yellow-300"> consultoria 100% GRATUITA</span>
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-white mb-2">Análise Gratuita</h3>
              <p className="text-white/80 text-sm">Diagnóstico completo do seu negócio</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold text-white mb-2">Estratégia Personalizada</h3>
              <p className="text-white/80 text-sm">Plano de ação específico para você</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-2">Resultados Rápidos</h3>
              <p className="text-white/80 text-sm">Primeiros resultados em 30 dias</p>
            </div>
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="https://api.whatsapp.com/send/?phone=73933009905&text=Olá Arthur! Quero agendar minha consultoria GRATUITA sobre tráfego pago. Estou pronto para escalar meu negócio!&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-white text-emerald-600 font-bold text-xl px-12 py-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaWhatsapp className="text-3xl relative z-10" />
              <div className="relative z-10">
                <div className="text-xl font-black">QUERO MINHA CONSULTORIA</div>
                <div className="text-sm font-medium opacity-80">100% Gratuita • Sem Compromisso</div>
              </div>
              <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                GRÁTIS
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/arthurvboass"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-transparent border-3 border-white text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl"
            >
              <FaLinkedin className="text-2xl" />
              <span>Ver Casos de Sucesso</span>
            </a>
          </div>    
        </div>
      </section>

    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Conecte-se Comigo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acompanhe meu trabalho e receba dicas exclusivas sobre tráfego pago e growth marketing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${
                      index === 0
                        ? "bg-green-100 text-green-600"
                        : index === 1
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600"
                    }`}
                  >
                    <span className="text-3xl">{link.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{link.name}</h3>

                  <p className="text-gray-600 mb-6">
                    {index === 0 && "Converse diretamente comigo e tire suas dúvidas sobre tráfego pago"}
                    {index === 1 && "Veja meu perfil profissional e conecte-se para oportunidades"}
                    {index === 2 && "Acompanhe conteúdos exclusivos e bastidores do meu trabalho"}
                  </p>

                  <div
                    className={`inline-flex items-center gap-2 font-semibold ${
                      index === 0 ? "text-green-600" : index === 1 ? "text-blue-600" : "text-pink-600"
                    } group-hover:gap-3 transition-all duration-200`}
                  >
                    <span>Conectar</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">Resposta no WhatsApp</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Conexões LinkedIn</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Transparência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Main Footer Content */}
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Brand Column */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold">AV</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Arthur Vilas</h3>
                    <p className="text-blue-300">Growth Marketing Specialist</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Especialista em transformar investimento em tráfego pago em vendas reais. Mais de 500 campanhas
                  criadas e 2M+ leads gerados para clientes em todo Brasil.
                </p>

                {/* Certifications */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-emerald-400">Certificações:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Meta Blueprint</span>
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Google Ads</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                      Google Analytics
                    </span>
                  </div>
                </div>
              </div>

              {/* Services Column */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-emerald-400">Serviços</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      Meta Ads (Facebook/Instagram)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      Google Ads
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      Growth Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      Consultoria Estratégica
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      Análise de Performance
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-emerald-400">Contato</h4>
                <div className="space-y-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=73933009905"
                    className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>(73) 9 3300-9905</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/arthurvboass"
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://www.instagram.com/vilasmktE"
                    className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    <FaInstagram className="text-xl" />
                    <span>@vilasmktE</span>
                  </a>
                </div>

                {/* Response Time */}
                <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-400 font-semibold text-sm">Online Agora</span>
                  </div>
                  <p className="text-gray-300 text-sm">Resposta em até 2 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Bar */}
        <div className="border-t border-gray-700 py-8 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-300 mb-2">Acompanhe meu trabalho nas redes sociais</p>
                <div className="flex justify-center md:justify-start gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-200"
                      aria-label={link.ariaLabel}
                    >
                      <span className="text-xl text-gray-400 group-hover:text-white transition-colors">
                        {link.icon}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-400">500+</div>
                  <div className="text-xs text-gray-400">Campanhas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">2M+</div>
                  <div className="text-xs text-gray-400">Leads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">300%</div>
                  <div className="text-xs text-gray-400">ROI Médio</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Copyright Bar */}
        <div className="border-t border-gray-700 py-6 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Arthur Vilas - Growth Marketing. Todos os direitos reservados.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
