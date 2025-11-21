export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Wrench' | 'Activity' | 'Cpu' | 'Zap' | 'Gauge' | 'Anchor' | 'Disc' | 'Settings';
}

export interface BookingFormData {
  // Step 1
  name: string;
  phone: string;
  email: string;
  // Step 2
  carModel: string;
  carYear: string;
  carPlate: string;
  // Step 3
  serviceType: string;
  date: string;
  time: string;
  comments: string;
}

export interface Reservation extends BookingFormData {
  id: string;
  status: 'Pendiente' | 'Confirmada' | 'Completada';
  createdAt: string;
}

export enum ViewState {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD'
}