import ScrollReveal from "./ScrollReveal";
import founderImage from "@/assets/founder.png";

const FounderPanel = () => {
  return (
    <section className="min-h-screen flex items-center py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image */}
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden relative">
              <img
                src={founderImage}
                alt="Sheik Abdulla MA - Founder of Grace Impex"
                className="w-full h-full object-cover object-top transition-all duration-1000"
              />
              <div className="absolute inset-0 border border-primary/20" />
            </div>
            <div className="gold-line-left w-32 mt-6" />
          </div>
        </ScrollReveal>

        {/* Content */}
        <div>
          <ScrollReveal direction="right">
            <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
              Founder & Visionary
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-2 text-foreground">
              Sheik Abdulla
            </h2>
            <p className="font-elegant text-2xl text-primary italic mb-8">MA</p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <p className="font-body text-secondary-foreground leading-[1.9] text-base mb-6">
              With a deep-rooted vision for empowering the textile industry, Sheik Abdulla MA 
              founded Grace Impex to bridge the gap between world-class Chinese machinery 
              manufacturers and the thriving textile sector.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <p className="font-body text-secondary-foreground leading-[1.9] text-base mb-8">
              His leadership is defined by an unwavering commitment to quality sourcing, 
              meticulous supplier coordination, and building relationships rooted in trust — 
              ensuring every client receives machinery that meets the highest international standards.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.5}>
            <div className="flex gap-12">
              {[
                { label: "Vision", value: "Global Reach" },
                { label: "Focus", value: "Quality First" },
                { label: "Promise", value: "Trust Always" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="font-display text-lg text-primary">{item.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FounderPanel;
