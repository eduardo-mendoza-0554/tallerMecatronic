import React from 'react';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

const AboutLocation: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
             <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2 block">Nuestra Historia</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              DEMOTRONIC: Pasión Familiar y <span className="text-brand-yellow">16 Años de Experiencia</span>
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Desde nuestra fundación en enero de 2009, DEMOTRONIC ha crecido de ser un pequeño taller familiar a convertirse en el referente de mantenimiento Volkswagen en La Paz.
              </p>
              <p className="mb-6">
                Adoptamos la <span className="font-bold text-gray-900">Técnica Brasileña certificada</span>, lo que nos permite ofrecer diagnósticos más precisos y reparaciones duraderas que cumplen con los estrictos estándares de fábrica de VW. No somos un taller multimarca; somos especialistas dedicados a su vehículo.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {['Especialistas VW', 'Técnica Brasileña', 'Repuestos Originales', 'Atención Personalizada'].map((item) => (
                 <div key={item} className="flex items-center text-gray-700 font-medium">
                   <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                   {item}
                 </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
               {/* Placeholder for Shop Image */}
               <img 
                src="https://picsum.photos/800/600" 
                alt="Taller Demotronic" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
               />
            </div>
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-brand-yellow">
               <p className="text-gray-900 font-bold text-lg">"Su VW en manos de expertos."</p>
             </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-10 lg:p-12 text-white space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <MapPin className="mr-2 text-brand-yellow" />
                  Estamos Cerca de Ti
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {COMPANY_INFO.address}
                </p>
                <p className="text-brand-yellow font-medium text-sm bg-brand-yellow/10 inline-block px-3 py-1 rounded-full">
                  Referencia: A pasos del Teleférico Amarillo
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Llámanos</p>
                    <p className="font-semibold">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                 <div className="flex items-center">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <Clock className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Horario</p>
                    <p className="font-semibold">{COMPANY_INFO.schedule}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Map Representation */}
            <div className="lg:col-span-2 bg-gray-200 min-h-[400px] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                {/* Mock Map UI */}
                <div className="text-center">
                    <MapPin className="h-12 w-12 text-red-500 mx-auto mb-2 animate-bounce" />
                    <p className="text-gray-600 font-semibold">Mapa de Google Maps</p>
                    <p className="text-sm text-gray-500">Zona Cotahuma, La Paz</p>
                </div>
                {/* Grid lines simulating map streets */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              </div>
              
              <a 
                href="#" 
                className="absolute bottom-6 right-6 bg-white text-gray-900 px-6 py-3 rounded-lg shadow-lg font-bold hover:bg-brand-green hover:text-white transition-colors z-10"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutLocation;