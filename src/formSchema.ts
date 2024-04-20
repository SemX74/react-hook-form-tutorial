import { z } from "zod";

const ingredientSchema = z.object({
  name: z.string(),
  qty: z.number(),
  unit: z.union([z.literal("g"), z.literal("l")]),
});

export const formSchema = z.object({
  title: z.string(),
  ingredients: z.array(ingredientSchema),
});

export type FormValues = z.infer<typeof formSchema>;
