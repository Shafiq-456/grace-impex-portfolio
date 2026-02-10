import { Settings, Search, Ship, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const capabilities = [
  {
    icon: Settings,
    title: "Machinery Sourcing",
    description:
      "Direct sourcing from China's leading textile machinery manufacturers, ensuring access to cutting-edge technology at competitive prices.",
  },
  {
    icon: Search,
    title: "Quality Inspection",
    description:
      "Rigorous multi-stage quality inspection and supplier coordination to guarantee every machine meets exacting industry standards.",
  },
  {
    icon: Ship,
    title: "Import Logistics",
    description:
      "End-to-end import logistics support — from factory floor to your facility — with seamless customs clearance and documentation.",
  },
  {
    icon: Wrench,
    title: "Spare Parts Supply",
    description:
      "Comprehensive spare parts availability ensuring minimal downtime and maximum operational continuity for your machinery.",
  },
];

const ExpertisePanel = () => {
  return (
    <section className="min-h-screen flex items-center py-32 relative">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-20">
          <ScrollReveal>
            <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
              What We Do
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Expertise &{" "}
              <span className="gold-gradient-text">Capabilities</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="gold-line w-16 mx-auto" />
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={0.15 * i}>
              <div className="glass-card subtle-glow p-8 lg:p-10 group hover:border-primary/30 transition-all duration-700">
                <cap.icon
                  className="text-primary mb-6 transition-transform duration-700 group-hover:scale-110"
                  size={28}
                  strokeWidth={1.2}
                />
                <h3 className="font-display text-xl mb-3 text-foreground">
                  {cap.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-[1.9]">
                  {cap.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertisePanel;
