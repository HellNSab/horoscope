import { z } from "zod";

export const classicQuerySchema = z.object({
  month: z.string().regex(/^0[1-9]|1[012]$/),
  day: z.string().regex(/^0[1-9]|1[0-9]|2[0-9]|3[01]$/),
});
