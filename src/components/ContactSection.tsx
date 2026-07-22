import { useState } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { ArrowUpRight, Check, Github, Linkedin, Loader2, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const EMAIL = "manir1179@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const channels = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}?subject=Project%20enquiry`, Icon: Mail },
  { label: "GitHub", value: "github.com/JrKrishh", href: "https://github.com/JrKrishh", Icon: Github },
  { label: "LinkedIn", value: "Boopathi Raja", href: "https://www.linkedin.com/in/boopathiraja26/", Icon: Linkedin },
];

/* The generated Database type predates contact_messages (see the migration in
   supabase/migrations); widen the client for this one table until types are
   regenerated. */
const db = supabase as unknown as SupabaseClient;

type FieldErrors = { name?: string; email?: string; message?: string };
type Status = "idle" | "sending" | "sent" | "failed";

const inputClass =
  "w-full rounded-lg border border-line bg-surface-subtle px-4 text-sm text-ink " +
  "placeholder:text-ink-tertiary transition-colors hover:border-line-strong";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validateField = (field: keyof FieldErrors, value: string): string | undefined => {
    if (field === "name" && value.trim().length === 0) return "Please tell me your name.";
    if (field === "email" && !EMAIL_RE.test(value)) return "That email doesn't look right.";
    if (field === "message" && value.trim().length < 10)
      return "A sentence or two helps me reply usefully — at least 10 characters.";
    return undefined;
  };

  const handleBlur = (field: keyof FieldErrors) => {
    // Validate on blur, not per keystroke — errors only after the user is done.
    setErrors((prev) => ({ ...prev, [field]: validateField(field, form[field]) }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const nextErrors: FieldErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message),
    };
    setErrors(nextErrors);
    const firstInvalid = (["name", "email", "message"] as const).find((f) => nextErrors[f]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // Honeypot: bots fill every field. Pretend success, write nothing.
    if (form.company.trim().length > 0) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    const { error } = await db.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });
    setStatus(error ? "failed" : "sent");
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold text-ink sm:text-4xl">
              Got something worth building?
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-ink-secondary">
              Freelance and contract work — product builds, AI integration,
              internal tools. I reply within a day.
            </p>

            {status === "sent" ? (
              <div role="status" className="mt-8 max-w-md rounded-xl border border-[hsl(var(--status-production)/0.4)] bg-[hsl(var(--status-production)/0.08)] p-6">
                <p className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                  <Check className="size-4 text-[hsl(var(--status-production))]" aria-hidden="true" />
                  Message received.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  I&apos;ll get back to you within a day. Urgent? Email{" "}
                  <a href={`mailto:${EMAIL}`} className="text-accent underline-offset-2 hover:underline">
                    {EMAIL}
                  </a>{" "}
                  directly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", message: "", company: "" });
                    setErrors({});
                    setStatus("idle");
                  }}
                  className="mono mt-4 inline-flex h-11 items-center text-xs text-ink-secondary transition-colors hover:text-ink"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 max-w-md space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mono mb-2 block text-xs uppercase tracking-wider text-ink-secondary">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onBlur={() => handleBlur("name")}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={`${inputClass} h-12`}
                    placeholder="What should I call you?"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-xs text-[hsl(var(--destructive))]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mono mb-2 block text-xs uppercase tracking-wider text-ink-secondary">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onBlur={() => handleBlur("email")}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={`${inputClass} h-12`}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-xs text-[hsl(var(--destructive))]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="mono mb-2 block text-xs uppercase tracking-wider text-ink-secondary">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    minLength={10}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onBlur={() => handleBlur("message")}
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? "contact-message-error" : "contact-message-help"}
                    className={`${inputClass} resize-y py-3`}
                    placeholder="What are you building, and where does it hurt?"
                  />
                  {errors.message ? (
                    <p id="contact-message-error" className="mt-1.5 text-xs text-[hsl(var(--destructive))]">
                      {errors.message}
                    </p>
                  ) : (
                    <p id="contact-message-help" className="mt-1.5 text-xs text-ink-tertiary">
                      A rough scope or a link to what exists is plenty.
                    </p>
                  )}
                </div>

                {/* Honeypot — visually hidden, tempting to bots only. */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="contact-company">Company (leave blank)</label>
                  <input
                    id="contact-company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                {status === "failed" && (
                  <p role="alert" className="rounded-lg border border-[hsl(var(--destructive)/0.4)] bg-[hsl(var(--destructive)/0.08)] px-4 py-3 text-sm text-ink-secondary">
                    Couldn&apos;t send just now — try again, or email{" "}
                    <a href={`mailto:${EMAIL}`} className="text-accent underline-offset-2 hover:underline">
                      {EMAIL}
                    </a>{" "}
                    directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mono inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium
                             text-[hsl(var(--on-accent))] transition-colors hover:bg-[hsl(var(--accent-hover))]
                             disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    "Send message"
                  )}
                </button>
              </form>
            )}
          </div>

          <div>
            <p className="eyebrow lg:mt-1">Or directly</p>
            <ul className="mt-4 space-y-3">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    className="surface-card card-lift group flex items-center gap-4 p-4"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-surface-subtle text-ink-secondary transition-colors group-hover:text-accent">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="mono block text-[11px] uppercase tracking-wider text-ink-tertiary">
                        {label}
                      </span>
                      <span className="block truncate text-sm text-ink">{value}</span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-ink-tertiary transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
