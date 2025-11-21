import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { CheckCircle2, Calendar as CalendarIcon, User, Car, Clock } from 'lucide-react';
import { SERVICES } from '../constants';

interface BookingWizardProps {
  onComplete: (data: BookingFormData) => void;
}

const INITIAL_DATA: BookingFormData = {
  name: '', phone: '', email: '',
  carModel: '', carYear: '', carPlate: '',
  serviceType: '', date: '', time: '', comments: ''
};

const BookingWizard: React.FC<BookingWizardProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateData = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    // Simple validation
    if (step === 1 && (!formData.name || !formData.phone)) return alert("Por favor complete nombre y teléfono.");
    if (step === 2 && (!formData.carModel)) return alert("Por favor indique el modelo del VW.");
    setStep(s => s + 1);
  };

  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async () => {
    if (!formData.serviceType || !formData.date || !formData.time) return alert("Por favor seleccione servicio, fecha y hora.");
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    onComplete(formData);
    setIsSubmitting(false);
  };

  return (
    <section id="reserva" className="py-24 bg-brand-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Agenda tu Mantenimiento: Rápido y Fácil</h2>
          <p className="text-gray-600">Reserva tu cita online en 3 simples pasos.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
            <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-brand-green -z-10 transition-all duration-500`} style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
            
            {[1, 2, 3].map((s) => (
              <div key={s} className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${step >= s ? 'bg-brand-green border-brand-green text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
                {step > s ? <CheckCircle2 className="h-6 w-6" /> : <span className="font-bold">{s}</span>}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
            <span>Personal</span>
            <span>Tu VW</span>
            <span>Cita</span>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          
          {/* STEP 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center mb-6 text-brand-green">
                <User className="mr-2" />
                <h3 className="text-xl font-bold">Información Personal</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => updateData('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp</label>
                  <input 
                    type="tel" 
                    value={formData.phone} 
                    onChange={(e) => updateData('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                    placeholder="+591 70000000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email (Opcional)</label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => updateData('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: VW Data */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center mb-6 text-brand-green">
                <Car className="mr-2" />
                <h3 className="text-xl font-bold">Datos de su Volkswagen</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Modelo</label>
                  <input 
                    type="text" 
                    value={formData.carModel} 
                    onChange={(e) => updateData('carModel', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                    placeholder="Ej. Golf GTI, Gol, Tiguan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Año</label>
                  <input 
                    type="number" 
                    value={formData.carYear} 
                    onChange={(e) => updateData('carYear', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                    placeholder="2018"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Placa (Opcional)</label>
                <input 
                  type="text" 
                  value={formData.carPlate} 
                  onChange={(e) => updateData('carPlate', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all uppercase"
                  placeholder="1234-ABC"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Service & Date */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
               <div className="flex items-center mb-6 text-brand-green">
                <CalendarIcon className="mr-2" />
                <h3 className="text-xl font-bold">Servicio y Fecha</h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Servicio</label>
                <select 
                  value={formData.serviceType} 
                  onChange={(e) => updateData('serviceType', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Seleccione un servicio...</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Otro">Otro / Consulta</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Preferida</label>
                  <input 
                    type="date" 
                    value={formData.date} 
                    onChange={(e) => updateData('date', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hora Preferida</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <select 
                      value={formData.time} 
                      onChange={(e) => updateData('time', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Hora...</option>
                      <option value="08:30">08:30 AM</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:30">02:30 PM</option>
                      <option value="15:30">03:30 PM</option>
                      <option value="16:30">04:30 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Comentarios (Opcional)</label>
                <textarea 
                  rows={3}
                  value={formData.comments}
                  onChange={(e) => updateData('comments', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Detalles adicionales sobre el problema..."
                ></textarea>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-10 flex justify-between">
            {step > 1 ? (
              <button 
                onClick={prevStep}
                className="px-6 py-2 text-gray-600 font-medium hover:text-gray-900 transition-colors"
              >
                Atrás
              </button>
            ) : (
              <div></div> // Spacer
            )}
            
            {step < 3 ? (
              <button 
                onClick={nextStep}
                className="px-8 py-3 bg-brand-dark text-white rounded-lg font-bold hover:bg-gray-800 transition-all shadow-lg"
              >
                Siguiente
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-8 py-3 bg-brand-green text-white rounded-lg font-bold hover:bg-green-800 transition-all shadow-lg flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Procesando...' : 'CONFIRMAR RESERVA'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWizard;