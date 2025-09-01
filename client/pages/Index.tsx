import { useState } from "react";

// Header Component
const Header = () => {
  return (
    <header className="bg-piko-bg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/98ae21e07fd40c655be63f05e4de3511a6e7c551?width=242"
              alt="PIKO Logo"
              className="h-20 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#inicio"
                className="text-piko-gray-dark font-manrope font-medium text-lg hover:text-piko-blue transition-colors"
              >
                Inicio
              </a>
              <a
                href="#ideas"
                className="text-piko-gray-light font-manrope font-medium text-lg hover:text-piko-blue transition-colors"
              >
                Ideas
              </a>
              <a
                href="#que-es"
                className="text-piko-gray-light font-manrope font-medium text-lg hover:text-piko-blue transition-colors"
              >
                QuéEs
              </a>
              <a
                href="#funciones"
                className="text-piko-gray-light font-manrope font-medium text-lg hover:text-piko-blue transition-colors"
              >
                Funciones
              </a>
              <a
                href="#usuarios"
                className="text-piko-gray-light font-manrope font-medium text-lg hover:text-piko-blue transition-colors"
              >
                Usuarios
              </a>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-piko-green text-white font-manrope font-bold text-xl px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
              ¡Dale!
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-piko-gray-dark hover:text-piko-blue">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-piko-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/401082e3f3e499ee5ab8e55a9bed598622ef1553?width=2288"
                alt="Hero image"
                className="w-full h-auto rounded-lg shadow-2xl"
              />

              {/* Decorative stars */}
              <div className="absolute -left-8 top-16 hidden lg:block">
                <svg
                  className="w-10 h-10 text-piko-teal"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              {/* Paraguay flag card */}
              <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f27615ffe2abcfb7c7a9eb7015400d5f7afad5c4?width=202"
                    alt="Paraguay Flag"
                    className="w-16 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-manrope font-bold text-piko-gray-dark text-sm lg:text-base">
                      Desde cualquier lugar del Paraguay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Hero content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h1 className="font-manrope font-bold text-3xl lg:text-5xl text-piko-gray-dark mb-4">
                Gratis. Simple.
                <br />
                En tu idioma.
              </h1>
            </div>

            <div className="mb-8">
              <h2 className="font-inter text-4xl lg:text-6xl xl:text-7xl leading-tight mb-6">
                <span className="text-piko-red">¿Pea piko? </span>
                <span className="text-piko-blue">Hacelo negocio.</span>
              </h2>

              <p className="font-manrope font-bold text-xl lg:text-2xl text-piko-blue leading-tight">
                <span className="text-piko-red">P</span>
                <span className="text-piko-blue">I</span>
                <span className="text-black">K</span>
                <span className="text-piko-green">O</span>
                <span className="text-piko-blue">
                  .ai es el primer mentor de inteligencia artificial oficial del
                  Paraguay que te ayuda a convertir ideas en negocios reales.
                </span>
              </p>
            </div>

            <button className="bg-piko-green text-white font-manrope font-bold text-2xl lg:text-3xl px-8 lg:px-12 py-4 lg:py-6 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
              Empezar mi negocio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Ideas Section Component
const IdeasSection = () => {
  return (
    <section id="ideas" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <div className="w-5 h-5 bg-piko-teal rounded-full mr-4"></div>
            <span className="text-piko-gray-dark font-manrope font-medium text-xl underline">
              Ideas
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-inter text-4xl lg:text-6xl xl:text-7xl text-piko-red leading-tight mb-8">
                Miles de paraguayos tienen ideas cada día...
              </h2>
            </div>

            <div>
              <p className="font-manrope font-bold text-xl lg:text-2xl text-piko-gray-dark leading-relaxed mb-4">
                Pero no saben por dónde empezar.
                <br />
                No tienen un plan.
                <br />
                No conocen el mercado.
                <br />
                No saben con quién hablar.
              </p>

              <p className="font-manrope font-bold text-2xl lg:text-3xl text-piko-gray-dark">
                Hasta hoy.
              </p>
            </div>
          </div>
        </div>

        {/* App Screenshots */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d5eeed036ac031b9111b257bf4748619f72fa4a9?width=1880"
                alt="PIKO App Interface"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="font-manrope font-bold text-2xl lg:text-3xl xl:text-4xl text-piko-blue leading-tight">
              Con PIKO.ai, cualquier persona — sin importar de dónde venga o
              cuánto sepa — puede transformar su idea en una empresa viable.
            </h3>

            <div className="mt-8">
              <button className="bg-white text-piko-teal border-2 border-piko-teal rounded-full w-16 h-16 flex items-center justify-center hover:bg-piko-teal hover:text-white transition-all transform hover:scale-110">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// What is PIKO Section Component
const WhatIsPikoSection = () => {
  return (
    <section id="que-es" className="py-16 lg:py-24 bg-piko-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-5 h-5 bg-piko-teal rounded-full mr-4"></div>
              <span className="text-piko-gray-dark font-manrope font-medium text-xl underline">
                QuéEs
              </span>
            </div>

            <h2 className="font-manrope font-bold text-4xl lg:text-6xl xl:text-7xl text-piko-red mb-8">
              ¿Qué es piko.ai?
            </h2>

            <p className="font-manrope font-bold text-2xl lg:text-3xl xl:text-4xl text-piko-blue leading-tight">
              Una inteligencia artificial entrenada para ser tu mentor de
              negocios personal.
            </p>
          </div>

          {/* Right side - Features */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-8">
              {/* Feature cards */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/8d70cb141773faa5ed4aeaf6ba07c59de62ea51a?width=598"
                    alt="Feature 1"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <h3 className="font-manrope font-bold text-xl lg:text-2xl text-piko-blue">
                    Te pregunta.
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9ee903ff7a1d19416082aaf2f9bd61ef22af6946?width=572"
                    alt="Feature 2"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <h3 className="font-manrope font-bold text-xl lg:text-2xl text-piko-blue">
                    Te orienta.
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b6281fd96965d3207d376692074ff556bd8fcefc?width=572"
                    alt="Feature 3"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <h3 className="font-manrope font-bold text-xl lg:text-2xl text-piko-blue">
                    Te desafía.
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/18c9a6ac93c20c563a21111e72856137920c013e?width=572"
                    alt="Feature 4"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <h3 className="font-manrope font-bold text-xl lg:text-2xl text-piko-blue">
                    Te ayuda a crear tu plan.
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9030ab7ac30918884d25ef66eea6ee20047b5a30?width=744"
                    alt="Feature 5"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <h3 className="font-manrope font-bold text-xl lg:text-2xl text-piko-blue">
                    Y te acompaña paso a paso.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Functions Section Component
const FunctionsSection = () => {
  const features = [
    {
      title: "Recibir un diagnóstico de tu idea",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6d91bfe0bc3e11989960a29405c1a69cad9a4e5f?width=950",
    },
    {
      title: "Acceder a un plan de acción personalizado",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/79a3814a2d1ea76e7366586a1639ea4e95e6fcae?width=954",
    },
    {
      title: "Cumplir metas semanales con seguimiento de IA",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3a1fbbfe4f3b73875c8abb839c51c65c6027499e?width=980",
    },
    {
      title: "Conectarte con oportunidades, mentores y otros emprendedores",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7a3860b93865995e01897343c4555fc630cff395?width=962",
    },
    {
      title: "Descargar materiales y herramientas",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/45d56ad20afcc9f606994669436b9b813fe56a03?width=956",
    },
    {
      title: "Y lo mejor... ¡Todo 100% gratuito!",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5350bd467668bb4e6647181e04b84d7f041efd9c?width=972",
    },
  ];

  return (
    <section id="funciones" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-5 h-5 bg-piko-teal rounded-full mr-4"></div>
            <span className="text-piko-gray-dark font-manrope font-medium text-xl underline">
              Funciones
            </span>
          </div>

          <h2 className="font-inter text-4xl lg:text-6xl xl:text-7xl text-piko-red leading-tight mb-8">
            ¿Qué vas a poder
            <br />
            hacer com piko?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
                <div className="aspect-video bg-gray-100">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-manrope font-bold text-xl lg:text-2xl text-piko-gray-dark leading-tight">
                    {feature.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom description */}
        <div className="text-center">
          <p className="font-manrope font-bold text-2xl lg:text-3xl text-piko-blue">
            Acompañamiento continuo con un mentor de IA disponible las 24 horas,
            todos los días.
          </p>
        </div>
      </div>
    </section>
  );
};

// Users Section Component
const UsersSection = () => {
  return (
    <section id="usuarios" className="py-16 lg:py-24 bg-piko-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/74e226ca73c9ca217168ca27cb0bf0712d767f45?width=2342"
              alt="User testimonial"
              className="w-full h-auto rounded-lg shadow-2xl"
            />

            {/* Testimonial card overlay */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a6e2729d99d694a93e0300700358d12da0e1a4b2?width=780"
                alt="Testimonial"
                className="w-full h-auto rounded mb-4"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 bg-piko-teal rounded-full mr-4"></div>
                <span className="text-piko-gray-dark font-manrope font-medium text-xl underline">
                  Usuarios
                </span>
              </div>

              <h2 className="font-inter text-4xl lg:text-6xl xl:text-7xl text-piko-red mb-8">
                Para quién es esto
              </h2>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <blockquote className="font-manrope text-xl lg:text-2xl text-piko-gray-dark leading-relaxed mb-6">
                "Yo tenía la idea de hacer jabones naturales, pero no sabía qué
                pasos seguir. PIKO me armó el plan, me ayudó a calcular costos y
                hasta encontré una proveedora en mi zona. Ahora vendo en ferias
                y por redes."
              </blockquote>

              <div className="bg-piko-green text-white font-manrope font-semibold text-lg px-6 py-3 rounded-lg inline-block">
                Claudia, emprendedora de Caaguazú
              </div>
            </div>

            {/* Target audience */}
            <div className="space-y-4">
              <p className="font-manrope font-bold text-xl lg:text-2xl text-piko-blue leading-relaxed">
                Tenés una idea pero no sabés cómo empezar
              </p>
              <p className="font-manrope font-bold text-xl lg:text-2xl text-piko-blue leading-relaxed">
                Ya estás vendiendo algo pero querés crecer
              </p>
              <p className="font-manrope font-bold text-xl lg:text-2xl text-piko-blue leading-relaxed">
                Sos joven, madre, agricultor, estudiante, o simplemente alguien
                con ganas de crear algo tuyo
              </p>
              <p className="font-manrope font-bold text-2xl lg:text-3xl text-piko-blue mt-6">
                PIKO.ai está hecho para vos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-inter text-4xl lg:text-6xl xl:text-7xl text-piko-green leading-tight mb-16">
          Empezá ahora. Gratis.
          <br />
          En 3 pasos simples.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-6xl lg:text-7xl text-piko-green font-inter font-bold mb-4">
              01
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b6281fd96965d3207d376692074ff556bd8fcefc?width=572"
              alt="Step 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-manrope font-bold text-2xl lg:text-3xl text-piko-blue">
              Registrate en la plataforma
            </h3>
          </div>

          <div className="text-center">
            <div className="text-6xl lg:text-7xl text-piko-green font-inter font-bold mb-4">
              02
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/18c9a6ac93c20c563a21111e72856137920c013e?width=572"
              alt="Step 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-manrope font-bold text-2xl lg:text-3xl text-piko-blue">
              Contale tu idea a PIKO
            </h3>
          </div>

          <div className="text-center">
            <div className="text-6xl lg:text-7xl text-piko-green font-inter font-bold mb-4">
              03
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fe0346adf72b363be00c3304cf7299ef1e2e007d?width=744"
              alt="Step 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-manrope font-bold text-2xl lg:text-3xl text-piko-blue">
              Empezá a construir tu negocio
            </h3>
          </div>
        </div>

        <button className="bg-piko-green text-white font-manrope font-bold text-2xl lg:text-3xl px-12 lg:px-16 py-6 lg:py-8 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
          Quiero empezar mi negocio con PIKO
        </button>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-piko-bg py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <hr className="border-piko-gray-light mb-8" />

          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            {/* Logo and description */}
            <div className="lg:w-1/3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9ba8eb5c7dc3555108741d2ee90351b157ec266a?width=274"
                alt="PIKO Logo"
                className="h-16 w-auto mx-auto lg:mx-0 mb-4"
              />
              <p className="font-manrope font-bold text-lg text-piko-gray-light leading-relaxed">
                Programa oficial del Gobierno Nacional del Paraguay, creado para
                impulsar el espíritu emprendedor, apoyar la economía local y
                generar oportunidades para todos los ciudadanos.
              </p>
            </div>

            {/* Government logos */}
            <div className="lg:w-1/3 flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0f83ba797556047e025e9c233d11047d8912213e?width=586"
                alt="Government logos"
                className="h-16 w-auto"
              />
            </div>

            {/* Partner logos */}
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a8f5308cd262b099759aa61dfb98ecb24e0fcfc3?width=1216"
                alt="Partner logos"
                className="h-16 w-auto"
              />
            </div>
          </div>

          {/* Social media and copyright */}
          <div className="mt-8 pt-8 border-t border-piko-gray-light">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-piko-teal rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-piko-teal rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </div>
              </div>

              <p className="text-piko-gray-light font-manrope text-sm">
                Desarrollado por MITIC © MIC
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Index Component
export default function Index() {
  return (
    <div className="min-h-screen bg-piko-bg">
      <Header />
      <HeroSection />
      <IdeasSection />
      <WhatIsPikoSection />
      <FunctionsSection />
      <UsersSection />
      <CTASection />
      <Footer />
    </div>
  );
}
