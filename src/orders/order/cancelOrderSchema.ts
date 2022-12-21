import { z } from 'zod';

export const cancelAnOrderSchema = z.object({
  api_version: z.string().optional(),
  order_id: z.string(), // * Not order number but order ID.
  amount: z.string().optional(),
  currency: z.string().optional(),
  email: z.boolean().optional(),
  reason: z.enum(['customer', 'inventory', 'fraud', 'declined', 'other']).optional(),
});

export type CancelAnOrder = z.infer<typeof cancelAnOrderSchema>;
