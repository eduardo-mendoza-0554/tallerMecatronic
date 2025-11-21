import React from 'react';
import { Wrench, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  toggleDashboard: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, toggleDashboard }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            <div className="bg-brand-green p-2 rounded-lg mr-3">
              <Wrench className="h-6 w-6 text-brand-yellow" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-brand-green tracking-tight">DEMOTRONIC</h1>
              <p className="text-xs text-gray-500 font-medium tracking-widest">ESPECIALISTAS VW</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Servicios', 'Reserva', 'Nosotros'].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item.toLowerCase() === 'inicio' ? 'home' : item.toLowerCase().replace(' ', '-'))}
                className="text-gray-600 hover:text-brand-green font-medium transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {['Inicio', 'Servicios', 'Reserva', 'Nosotros'].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item.toLowerCase() === 'inicio' ? 'home' : item.toLowerCase().replace(' ', '-'))}
                className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-brand-light hover:text-brand-green rounded-md"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={toggleDashboard}
              className="block w-full text-left px-3 py-3 text-xs font-bold text-gray-300 uppercase tracking-widest"
            >
              Admin Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;