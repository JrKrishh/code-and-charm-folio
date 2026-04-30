import { useState } from "react";
import { Send, Github, Linkedin, Twitter, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 btn-comic-pill halftone-yellow">
            <span>★ The Final Panel ★</span>
          </div>
          <h2 className="title-comic-red text-6xl sm:text-7xl md:text-8xl">
            DROP A LINE!
          </h2>
          <p className="font-hand text-2xl text-foreground/70 mt-4">
            send a signal — I reply faster than a speeding bullet 🚀
          </p>
        </div>

        <div className="comic-panel p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-display text-base tracking-widest mb-2 text-foreground/80">YOUR NAME</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border-[3px] border-foreground font-body focus:outline-none focus:bg-accent/30 transition-colors"
                placeholder="What should I call you?"
              />
            </div>

            <div>
              <label className="block font-display text-base tracking-widest mb-2 text-foreground/80">EMAIL</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border-[3px] border-foreground font-body focus:outline-none focus:bg-accent/30 transition-colors"
                placeholder="you@cool.com"
              />
            </div>

            <div>
              <label className="block font-display text-base tracking-widest mb-2 text-foreground/80">MESSAGE</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border-[3px] border-foreground font-body focus:outline-none focus:bg-accent/30 transition-colors resize-none"
                placeholder="Tell me about your idea, project, or just say hi!"
              />
            </div>

            <button type="submit" className="btn-comic-red w-full">
              {submitted ? (
                <>SENT! <span className="sfx text-xl ml-1">ZAP!</span></>
              ) : (
                <>
                  Send It
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-3 mt-10">
          {[
            { icon: Github, label: "GitHub", bg: "bg-card" },
            { icon: Linkedin, label: "LinkedIn", bg: "bg-accent" },
            { icon: Twitter, label: "Twitter", bg: "bg-primary text-primary-foreground" },
            { icon: Mail, label: "Email", bg: "bg-card" },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className={`${s.bg} w-12 h-12 rounded-lg border-[3px] border-foreground flex items-center justify-center hover-pop`}
                style={{ boxShadow: "0 4px 0 0 hsl(var(--comic-navy))" }}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Footer — comic credits */}
        <div className="mt-16 text-center">
          <p className="font-display text-xl tracking-widest text-foreground/60">— THE END —</p>
          <p className="font-hand text-lg text-foreground/60 mt-2">
            written + drawn by Boopathi Raja · 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
