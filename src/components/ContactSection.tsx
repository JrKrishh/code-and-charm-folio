import { useState } from "react";
import { Send } from "lucide-react";

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
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-muted-foreground mb-2 tracking-wide">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:box-glow transition-all duration-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2 tracking-wide">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:box-glow transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2 tracking-wide">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:box-glow transition-all duration-300 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 animate-glow-pulse"
          >
            {submitted ? (
              "Message Sent! ✨"
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-24 text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mb-6" />
          <p className="text-xs text-muted-foreground tracking-wider">
            © 2026 Boopathi Raja — Built with vibes & neural energy
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
