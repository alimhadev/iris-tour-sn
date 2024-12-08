import { z } from "zod";

export const newsletterSchema = z.object({
    name: z.string().min(1, "Le nom est requis."),
    email: z.string().email("Adresse email invalide."),
});
