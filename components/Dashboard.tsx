import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Calendar, AlertCircle, CheckCircle, Settings, LogOut, MapPin, Phone } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const MOCK_DATA = [
  { name: 'Lun', reservas: 4 },
  { name: 'Mar', reservas: 7 },
  { name: 'Mié', reservas: 5 },
  { name: 'Jue', reservas: 8 },
  { name: 'Vie', reservas: 6 },
  { name: 'Sáb', reservas: 3 },
];

const RECENT_BOOKINGS = [
  { id: 1, client: 'Carlos Mamani', car: 'VW Gol 2019', service: 'Mantenimiento', time: 'Hoy, 14:30', status: 'Pendiente' },
  { id: 2, client: 'Ana Flores', car: 'VW Tiguan 2021', service: 'Frenos', time: 'Hoy, 16:00', status: 'Confirmada' },
  { id: 3, client: 'Roberto Paz', car: 'Amarok 2018', service: 'Motor', time: 'Mañana, 09:00', status: 'Pendiente' },
];

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar / Topbar mock */}
      <div className="bg-brand-dark text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
           <div className="h-8 w-8 bg-brand-green rounded-md flex items-center justify-center mr-3">
             <span className="font-bold text-brand-yellow">D</span>
           </div>
           <h1 className="font-bold text-lg tracking-wide">DEMOTRONIC <span className="font-normal text-gray-400 text-sm">| Admin</span></h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right hidden md:block">
             <p className="text-sm font-medium">Administrador</p>
             <p className="text-xs text-green-400">En línea</p>
          </div>
          <button onClick={onLogout} className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium">Reservas Hoy</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">8</h3>
              </div>
              <div className="p-2 bg-brand-light rounded-lg">
                <Calendar className="h-5 w-5 text-brand-green" />
              </div>
            </div>
            <p className="text-green-600 text-xs mt-2 font-medium">+2 que ayer</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium">Pendientes</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">3</h3>
              </div>
              <div className="p-2 bg-yellow-50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-brand-yellow" />
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-2">Requieren confirmación</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium">Clientes Activos</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">124</h3>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <p className="text-green-600 text-xs mt-2 font-medium">+12% este mes</p>
          </div>

           <div className="bg-brand-green p-6 rounded-xl shadow-sm border border-transparent text-white">
             <div className="flex justify-between items-start">
              <div>
                <p className="text-brand-yellow text-sm font-bold uppercase tracking-wider">Próxima Cita</p>
                <h3 className="text-xl font-bold mt-2">14:30 PM</h3>
                <p className="text-sm opacity-90">VW Gol - Mantenimiento</p>
              </div>
              <div className="p-2 bg-white/10 rounded-lg">
                <Settings className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Chart & List Section */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Reservas por Semana</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={MOCK_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                      cursor={{fill: '#f8fafc'}}
                    />
                    <Bar dataKey="reservas" fill="#006633" radius={[4, 4, 0, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Bookings List */}
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900">Reservas Recientes</h3>
                <button className="text-sm text-brand-green font-medium hover:underline">Ver todas</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-100">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehículo</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {RECENT_BOOKINGS.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{booking.client}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.car}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                             {booking.time}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            booking.status === 'Confirmada' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-brand-green hover:text-green-900 mr-3">Editar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Right */}
          <div className="space-y-6">
             {/* Map / Location Quick View */}
             <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-gray-200 h-48 rounded-lg relative overflow-hidden flex items-center justify-center">
                   <MapPin className="text-gray-400 h-8 w-8" />
                   <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-bold shadow">
                     Ubicación Taller
                   </div>
                </div>
                <div className="p-4">
                   <p className="text-sm text-gray-600 mb-3">Av. Buenos Aires, Cotahuma.</p>
                   <button className="w-full py-2 text-sm text-brand-green border border-brand-green rounded-lg hover:bg-brand-light font-medium">
                     Actualizar Ubicación
                   </button>
                </div>
             </div>

             {/* Quick Actions */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Acciones Rápidas</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center px-4 py-3 bg-brand-green text-white rounded-lg font-medium hover:bg-green-800 transition-colors shadow-sm">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Confirmar Pendientes
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    <Phone className="h-4 w-4 mr-2" />
                    Enviar WhatsApp
                  </button>
                </div>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;