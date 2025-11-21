import { ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Mantenimiento General',
    description: 'Diagnóstico integral y mantenimiento preventivo para asegurar la longevidad de su Volkswagen.',
    iconName: 'Wrench'
  },
  {
    id: '2',
    title: 'Afinación y Problemas',
    description: 'Solución experta de fallas y afinación precisa de motor utilizando estándares de fábrica.',
    iconName: 'Activity'
  },
  {
    id: '3',
    title: 'Motor y Overhaul',
    description: 'Reparación profunda, mantenimiento correctivo y reconstrucción completa (Overhaul) con técnica brasileña.',
    iconName: 'Settings'
  },
  {
    id: '4',
    title: 'Electricidad y Diagnóstico',
    description: 'Escaneo computarizado avanzado y reparación de sistemas eléctricos del chasis.',
    iconName: 'Cpu'
  },
  {
    id: '5',
    title: 'Emisiones y Combustible',
    description: 'Optimización del sistema de inyección y control de emisiones para un rendimiento eficiente.',
    iconName: 'Gauge'
  },
  {
    id: '6',
    title: 'Suspensión y Dirección',
    description: 'Ajuste especializado para mantener la estabilidad legendaria y confort de su vehículo.',
    iconName: 'Anchor'
  },
  {
    id: '7',
    title: 'Frenos y Tren Delantero',
    description: 'Mantenimiento de seguridad crítica, cambio de pastillas, discos y revisión del tren delantero.',
    iconName: 'Disc'
  },
  {
    id: '8',
    title: 'Embrague y Caja',
    description: 'Servicio completo para sistemas de transmisión manual y automática (DSG/Tiptronic).',
    iconName: 'Zap'
  },
];

export const COMPANY_INFO = {
  name: 'DEMOTRONIC',
  address: 'Av. Buenos Aires, a pasos del Teleférico Amarillo, Zona de Cotahuma, Distrito 4, La Paz – Bolivia',
  phone: '+591 700 000 00', // Placeholder
  email: 'contacto@demotronic.bo',
  schedule: 'Lun - Vie: 8:30 - 18:30 | Sáb: 9:00 - 13:00'
};