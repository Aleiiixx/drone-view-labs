import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background topo-lines">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-md border border-border space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                maxLength={255}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
              <Input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                maxLength={20}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project..."
                rows={5}
                maxLength={1000}
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Send Message
            </Button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground text-sm">info@servidrone.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Phone</h4>
                <p className="text-muted-foreground text-sm">+1 (555) 234-5678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Service Area</h4>
                <p className="text-muted-foreground text-sm">Nationwide coverage — rural and agricultural regions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
