import { z } from "zod";

// Schéma partagé client + serveur pour le formulaire de contact.
export const contactSchema = z.object({
  firstName: z.string().min(2, "Votre prénom est requis."),
  lastName: z.string().min(2, "Votre nom est requis."),
  email: z.string().email("Adresse e-mail invalide."),
  phone: z
    .string()
    .optional()
    .or(z.literal("")),
  subject: z.string().min(2, "Merci d'indiquer un objet."),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité." }),
  }),
  // Champ anti-spam (honeypot) : doit rester vide.
  company: z.string().max(0, "Erreur de validation.").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
