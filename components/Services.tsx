import React, { useState } from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { ServiceItem } from '../types';

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Dynamic icon rendering
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md ${isExpanded ? 'ring-2 ring-brand-green/20' : ''}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-brand-light rounded-lg">
          <IconComponent className="h-6 w-6 text-brand-green" />
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
      
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {service.description}
        </p>
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center text-sm font-semibold text-brand-green hover:text-brand-yellow transition-colors group"
      >
        {isExpanded ? 'Menos información' : 'Ver más'}
        <Icons.ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-yellow font-bold tracking-wider uppercase text-sm">Especialización Total</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Servicios Exclusivos Volkswagen <br/>
            <span className="text-brand-green font-light">con Técnica Brasileña</span>
          </h2>
          <div className="h-1 w-20 bg-brand-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;