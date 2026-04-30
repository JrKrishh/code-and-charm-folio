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
          <div className="inline-block bg-cartoon-pink text-primary-foreground border-cartoon-thick shadow-chunky-sm rounded-full px-5 py-1.5 mb-4 font-bold text-sm">
            📬 Say Hi
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-3">
            Let's <span className="bg-cartoon-yellow px-3 rounded-2xl border-cartoon-thick shadow-chunky inline-block -rotate-2">Chat</span>
          </h2>
          <p className="font-hand text-2xl text-muted-foreground mt-4">
            drop me a message — I reply fast! 🚀
          </p>
        </div>

        <div className="bg-card border-cartoon-thick rounded-3xl shadow-chunky-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold mb-2">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border-cartoon font-medium focus:outline-none focus:ring-0 focus:border-primary transition-colors"
                placeholder="What should I call you?"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border-cartoon font-medium focus:outline-none focus:border-primary transition-colors"
                placeholder="you@cool.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border-cartoon font-medium focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your idea, project, or just say hi!"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold border-cartoon-thick shadow-chunky hover-press flex items-center justify-center gap-2"
            >
              {submitted ? (
                "Message Sent! 🎉"
              ) : (
                <>
                  Send it
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-3 mt-10">
          {[
            { icon: Github, color: "bg-cartoon-mint", label: "GitHub" },
            { icon: Linkedin, color: "bg-cartoon-blue", label: "LinkedIn" },
            { icon: Twitter, color: "bg-cartoon-yellow", label: "Twitter" },
            { icon: Mail, color: "bg-cartoon-pink", label: "Email" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className={`${s.color} w-12 h-12 rounded-xl border-cartoon-thick shadow-chunky-sm flex items-center justify-center hover-press ${
                  i % 2 === 0 ? "-rotate-3" : "rotate-3"
                }`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="font-hand text-xl text-muted-foreground">
            made with ❤️ + ☕ + ✨ by Boopathi Raja · 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
