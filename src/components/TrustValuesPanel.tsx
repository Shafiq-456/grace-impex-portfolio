import { Shield, Target, Handshake, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const values = [
  { icon: Shield, title: "Reliability", tagline: "Consistent. Dependable. Always." },
  { icon: Target, title: "Precision", tagline: "Every detail, every time." },
  { icon: Handshake, title: "Partnership", tagline: "Long-term relationships built on trust." },
  { icon: BookOpen, title: "Knowledge", tagline: "Deep industry expertise." },
];

const TrustValuesPanel = () => {
  return (
    <section className="min-h-screen flex items-center py-32 relative">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-24">
          <ScrollReveal>
            <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
              Our Foundation
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Built on <span className="gold-gradient-text">Values</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="gold-line w-16 mx-auto" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {values.map((val, i) => (
            <ScrollReveal key={val.title} delay={0.12 * i}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-700">
                  <val.icon
                    size={24}
                    strokeWidth={1}
                    className="text-primary transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{val.title}</h3>
                <p className="font-body text-xs text-muted-foreground tracking-wide">{val.tagline}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing statement */}
        <ScrollReveal delay={0.5}>
          <div className="text-center mt-24">
            <div className="gold-line w-16 mx-auto mb-10" />
            <p className="font-elegant text-2xl md:text-3xl italic text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
              "We don't just import machinery — we build the foundations of industrial progress."
            </p>
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mt-6">
              Grace Impex
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustValuesPanel;
