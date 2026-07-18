import { z } from "zod";

// Schéma partagé client + serveur pour le formulaire de contact.
// Les longueurs maximales protègent l'API contre les charges utiles abusives
// (défense en profondeur, en complément du garde Content-Length côté serveur).
export const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Votre prénom est requis.").max(60, "Prénom trop long."),
  lastName: z.string().trim().min(2, "Votre nom est requis.").max(60, "Nom trop long."),
  email: z
    .string()
    .trim()
    .email("Adresse e-mail invalide.")
    .max(254, "Adresse e-mail trop longue."),
  phone: z
    .string()
    .trim()
    .max(30, "Numéro de téléphone trop long.")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(2, "Merci d'indiquer un objet.")
    .max(150, "Objet trop long."),
  message: z
    .string()
    .trim()
    .min(10, "Votre message doit contenir au moins 10 caractères.")
    .max(4000, "Votre message est trop long (4000 caractères maximum)."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité." }),
  }),
  // Champ anti-spam (honeypot) : doit rester vide.
  company: z.string().max(0, "Erreur de validation.").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
