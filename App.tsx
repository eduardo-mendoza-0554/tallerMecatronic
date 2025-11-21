import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingWizard from './components/BookingWizard';
import AboutLocation from './components/AboutLocation';
import Dashboard from './components/Dashboard';
import { BookingFormData, ViewState } from './types';
import { CheckCircle } from 'lucide-react';

function App() {
  const [view, setView] = useState<ViewState>(ViewState.LANDING);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingName, setBookingName] = useState('');

  // Secret keyboard combo to toggle dashboard for demo: Shift + D
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'D') {
        setView(prev => prev === ViewState.LANDING ? ViewState.DASHBOARD : ViewState.LANDING);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBookingComplete = (data: BookingFormData) => {
    setBookingName(data.name);
    setShowSuccess(true);
    // Scroll to success message
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const toggleDashboard = () => {
      setView(v => v === ViewState.LANDING ? ViewState.DASHBOARD : ViewState.LANDING);
  }

  if (view === ViewState.DASHBOARD) {
    return <Dashboard onLogout={() => setView(ViewState.LANDING)} />;
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-brand-light flex flex-col items-center justify-center p-4 text-center animate-fade-in">
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg w-full">
          <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-brand-green" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Reserva Exitosa!</h1>
          <p className="text-gray-600 text-lg mb-8">
            Gracias <strong>{bookingName}</strong> por elegir a los expertos VW.
            <br/><br/>
            Hemos recibido tu solicitud. Nuestro equipo te contactará vía <strong>WhatsApp</strong> en breve para confirmar los detalles.
          </p>
          <button 
            onClick={() => setShowSuccess(false)}
            className="px-8 py-3 bg-brand-green text-white rounded-lg font-bold hover:bg-green-800 transition-colors shadow-lg w-full"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} toggleDashboard={toggleDashboard} />
      
      <main className="flex-grow">
        <Hero onCtaClick={() => handleNavigate('reserva')} />
        <Services />
        <BookingWizard onComplete={handleBookingComplete} />
        <AboutLocation />
      </main>

      <footer className="bg-brand-dark text-white py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm mb-2">
            © {new Date().getFullYear()} Taller DEMOTRONIC. Todos los derechos reservados.
          </p>
          <div className="flex justify-center space-x-4 text-sm text-gray-600">
             <button onClick={toggleDashboard} className="hover:text-brand-yellow transition-colors">Admin</button>
             <span>•</span>
             <span>La Paz, Bolivia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;