"use client";

import { useState } from "react";
import Link from "next/link";

import { contactSchema } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<string, string>>;

const fieldBase =
  "w-full rounded-xl border border-umber/20 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay transition";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);
    setErrors({});

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      company: String(fd.get("company") ?? ""), // honeypot
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const mapped: Errors = {};
      for (const [key, val] of Object.entries(fieldErrors)) {
        if (val && val[0]) mapped[key] = val[0];
      }
      setErrors(mapped);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setServerError("L'envoi a échoué. Merci de réessayer ou de nous appeler.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-clay/30 bg-beige/40 p-8 text-center"
      >
        <h3 className="font-serif text-2xl text-umber">Message envoyé, merci&nbsp;!</h3>
        <p className="mt-3 text-ink/70">
          Nous vous répondrons dans les meilleurs délais.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm uppercase tracking-widest text-clay underline-offset-4 hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot anti-spam (masqué) */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Ne pas remplir
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Prénom" name="firstName" error={errors.firstName} required />
        <Field label="Nom" name="lastName" error={errors.lastName} required />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="E-mail" name="email" type="email" error={errors.email} required />
        <Field label="Téléphone (facultatif)" name="phone" type="tel" error={errors.phone} />
      </div>
      <Field label="Objet" name="subject" error={errors.subject} required />

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-umber">
          Message <span className="text-clay">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(fieldBase, "resize-y")}
          aria-invalid={!!errors.message}
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink/75">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 h-4 w-4 rounded border-umber/30 text-wood focus:ring-clay"
          />
          <span>
            J&apos;accepte que mes données soient utilisées pour être recontactée,
            conformément à la{" "}
            <Link href="/politique-de-confidentialite" className="underline underline-offset-2">
              politique de confidentialité
            </Link>
            . <span className="text-clay">*</span>
          </span>
        </label>
        {errors.consent && <ErrorText>{errors.consent}</ErrorText>}
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-red-700">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-umber px-8 py-4 text-sm uppercase tracking-widest text-cream transition-colors hover:bg-wood disabled:opacity-60"
      >
        {status === "submitting" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-umber">
        {label} {required && <span className="text-clay">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={fieldBase}
        aria-invalid={!!error}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-xs text-red-700">{children}</p>;
}
