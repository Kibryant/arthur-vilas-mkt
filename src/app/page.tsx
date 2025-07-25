"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { FaTimes } from "react-icons/fa"
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaChartLine,
  FaBullseye,
  FaTrophy,
  FaArrowUp,
  FaBars,
} from "react-icons/fa6"

export default function Home() {
      const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
      setShowScrollTop(scrollPosition > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

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
      url: "https://www.instagram.com/vilasmkt/",
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
      title: "Textos Persuasivos",
      description: "Criação de copywriting envolvente que converte visitantes em clientes fiéis.",
    },
  ]

  const results = [
    { number: "200+", label: "Campanhas Criadas" },
    { number: "1M+", label: "Leads Gerados" },
    { number: "100+", label: "Clientes Atendidos" },
  ]

    const navItems = [
    { name: "Início", href: "hero" },
    { name: "Serviços", href: "servicos" },
    { name: "Resultados", href: "resultados" },
    { name: "Sobre", href: "sobre" },
    { name: "Contato", href: "contato" },
  ]

  return (
    <main className="min-h-screen">

              <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}>
                  Arthur Vilas
                </h1>
                <p className={`text-sm transition-colors ${isScrolled ? "text-gray-600" : "text-white/80"}`}>
                  Growth Marketing
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    isScrolled ? "text-gray-700" : "text-white/90"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=73933009905&text=Olá Arthur! Quero uma consultoria GRATUITA sobre tráfego pago.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              >
                <FaWhatsapp className="text-base" />
                <span>Consultoria Grátis</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-700 font-medium py-2 hover:text-emerald-500 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="https://api.whatsapp.com/send/?phone=73933009905&text=Olá Arthur! Quero uma consultoria GRATUITA sobre tráfego pago.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaWhatsapp className="text-base" />
                  <span>Consultoria Grátis</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" id="hero">

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
              <p className="text-xl md:text-2xl text-background leading-relaxed mb-6">
                <span className="font-semibold text-primary">Transformo seu investimento em vendas reais</span>
                <br />
                com estratégias de tráfego pago que{" "}
                <span className="text-primary font-semibold">realmente funcionam</span>
              </p>

              {/* Stats Preview */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-whatsapp">200+</div>
                  <div className="text-xs text-background">Campanhas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-linkedin">1M+</div>
                  <div className="text-xs text-background">Leads</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-instagram-pink">100+</div>
                    <div className="text-xs text-background">Clientes</div>
                </div>
              </div>

            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

            {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-emerald-500/25"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/50" id="servicos">
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
      <section className="py-20 px-4 bg-white/50" id="resultados">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-accent mb-4">Resultados Comprovados</h2>
            <p className="text-lg text-secondary">Números que falam por si só</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{result.number}</div>
                <div className="text-secondary font-medium">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
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
            Pronto para DOBRAR
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
               SEU FATURAMENTO?
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
              <p className="text-white/80 text-sm">
              Para a sua empresa!
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-2">Resultados Rápidos</h3>
              <p className="text-white/80 text-sm">
              Primeiros resultados em menos de 30 dias!
              </p>
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
          </div>    
        </div>
      </section>

          <section className="py-24 px-4 bg-white/50" id="sobre">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo Column */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

                {/* Main photo container */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src="/arthur.jpg"
                      alt="Arthur Vilas - Growth Marketing Specialist"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Floating stats */}
                  <div className="absolute -top-4 -right-4 bg-emerald-500 text-white rounded-2xl px-4 py-2 shadow-lg">
                    <div className="text-sm font-bold">5+ Anos</div>
                    <div className="text-xs opacity-90">Experiência</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Conheça Minha História</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Quem é{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Arthur Vilas
                  </span>
                </h2>
              </div>

<div className="space-y-6 text-lg text-gray-600 leading-relaxed">
  <p>
    <strong className="text-gray-800">Meu nome é Arthur Vilas</strong>, e minha jornada no universo digital começou cedo, aos 14 anos, quando a vontade de conectar pessoas e oportunidades online já era evidente.
  </p>

  <p>
    Há <strong className="text-emerald-600">3 anos</strong>, mergulhei profundamente no <strong className="text-gray-800">Tráfego Pago</strong>, e desde então, tenho a satisfação de gerar resultados expressivos para empresas de diversos nichos.
  </p>

  <p>
    Meu foco é transformar seu investimento em <strong className="text-purple-600">crescimento real e mensurável</strong>.
  </p>
</div>
            </div>
          </div>
        </div>
      </section>


    <section className="py-20 px-4 bg-white/50" id="contato">
        {/* Social Links Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Me acompanhe nas Redes Sociais
            </h2>
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
                  <div
                    className={`inline-flex items-center gap-2 font-semibold ${
                      index === 0 ? "text-green-600" : index === 1 ? "text-blue-600" : "text-pink-600"
                    } group-hover:gap-3 transition-all duration-200`}
                  >
                    <span>
                        Acessar Perfil
                    </span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
    </section>



      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Copyright Bar */}
        <div className="border-t border-gray-700 py-6 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Arthur Vilas - Growth Marketing. Todos os direitos reservados.
            </p>

            <div className="flex gap-6 text-sm">
            <p className="text-gray-400 text-sm">
              CNPJ: 56.148.709/0001-93
            </p>  
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
