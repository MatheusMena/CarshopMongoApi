import { z } from 'zod';
import { Vehicle } from './IVehicle';

export const car = Vehicle.extend({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

export type ICar = z.infer<typeof car>;