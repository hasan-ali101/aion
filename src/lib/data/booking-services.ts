export interface BookableService {
  id: string;
  name: string;
  practitionerName: string;
  businessId: string;
  practitionerId: string;
  appointmentTypeId: string;
  priceGbp: number;
  durationMinutes: number;
}

export const bookingServices: BookableService[] = [
  {
    id: "ima",
    name: "Initial Medical Assessment",
    practitionerName: "Dr Matthew Liveras",
    businessId: "1596358565193327213",
    practitionerId: "1596358898665661184",
    appointmentTypeId: "1596358564849394524",
    priceGbp: 300,
    durationMinutes: 90,
  },
];

export function getBookingServiceById(id: string): BookableService | undefined {
  return bookingServices.find((service) => service.id === id);
}

export const CLINIC_ADDRESS = "384 City Road, London, EC1V 2QA";
export const CLINIC_ADDRESS_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`;
