import React from 'react';
import { ChevronRight, ShieldCheck, Star, Award } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-light pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 mb-6 animate-fade-in-up">
            <span className="bg-brand-yellow w-2 h-2 rounded-full"></span>
            <span className="text-sm font-semibold text-brand-green tracking-wide uppercase">Desde 2009</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Especialistas <span className="text-brand-green">Volkswagen</span> <br />
            con <span className="relative">
              Técnica Brasileña
              <span className="absolute bottom-0 left-0 w-full h-3 bg-brand-yellow/30 -z-10 transform -rotate-1"></span>
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Pasión familiar por la excelencia mecánica. <br className="hidden md:block"/>
            Diagnóstico preciso y soluciones definitivas para su VW.
          </h2>
          
          <p className="text-gray-500 mb-10 max-w-xl leading-relaxed">
            Somos una empresa familiar fundada en enero de 2009. 
            Nos dedicamos exclusivamente a vehículos Volkswagen, aplicando técnicas certificadas para garantizar el máximo rendimiento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-green hover:bg-green-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              AGENDA TU SERVICIO VW AHORA
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            
            <div className="flex items-center space-x-6 px-4 py-2">
              <div className="flex items-center text-gray-600 text-sm">
                <ShieldCheck className="h-5 w-5 text-brand-yellow mr-2" />
                Garantía
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Award className="h-5 w-5 text-brand-yellow mr-2" />
                Certificado
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
    </section>
  );
};

export default Hero;