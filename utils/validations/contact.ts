import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
    email: z.string().email("L'adresse e-mail est invalide."),
    phone: z.string(),
    subject: z.string().min(2, "Le sujet doit contenir au moins 2 caractères."),
    message: z
        .string()
        .min(10, "Le message doit contenir au moins 10 caractères."),
});
