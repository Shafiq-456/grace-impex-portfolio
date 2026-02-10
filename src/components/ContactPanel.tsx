import ScrollReveal from "./ScrollReveal";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPanel = () => {
  return (
    <section id="contact" className="panel-section bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-elegant text-lg tracking-[0.3em] uppercase text-accent mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Contact Us
            </h2>
            <div className="gold-line w-24 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Our Address</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    No.525, Modern City, Mannarai,<br />
                    Tiruppur – 641607,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Phone</h3>
                  <p className="font-body text-muted-foreground">
                    <a href="tel:+919994851228" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open('tel:+919994851228', '_self'); }} className="hover:text-primary transition-colors cursor-pointer">+91 99948 51228</a>
                  </p>
                  <p className="font-body text-muted-foreground">
                    <a href="tel:+918667437662" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open('tel:+918667437662', '_self'); }} className="hover:text-primary transition-colors cursor-pointer">+91 86674 37662</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Email</h3>
                  <p className="font-body text-muted-foreground">
                    <a href="mailto:esbasheik678@gmail.com" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open('mailto:esbasheik678@gmail.com', '_self'); }} className="hover:text-primary transition-colors cursor-pointer">
                      esbasheik678@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Google Map */}
          <ScrollReveal direction="right">
            <div className="rounded-lg overflow-hidden border border-border shadow-sm h-[400px]">
              <iframe
                title="Grace Impex Location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=No.525+Modern+City+Mannarai+Tiruppur+641607+Tamil+Nadu+India&zoom=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactPanel;
