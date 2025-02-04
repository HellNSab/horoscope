import { z } from "zod";

export const chineseQuerySchema = z.object({
  year: z.string().regex(/^\d+$/),
});
