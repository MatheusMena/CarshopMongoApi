import { z } from 'zod';
import { Vehicle } from './IVehicle';

export const motorcycle = Vehicle.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().lte(2500).gt(0),
});

export type IMotorcycle = z.infer<typeof motorcycle>;