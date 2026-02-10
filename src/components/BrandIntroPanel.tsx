import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import heroImage from "@/assets/hero-machinery.jpg";

const BrandIntroPanel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={heroImage} alt="Textile machinery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-8">
            Trusted Global Importer
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] mb-8">
            <span className="gold-gradient-text">Grace</span>{" "}
            <span className="text-foreground">Impex</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="gold-line w-24 mx-auto mb-8" />
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <p className="font-elegant text-xl md:text-2xl text-secondary-foreground leading-relaxed max-w-3xl mx-auto italic">
            Premium textile & garment machinery sourced with precision from China —
            built on quality, trust, and enduring partnerships.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.7}>
          <p className="font-body text-sm text-muted-foreground mt-10 tracking-widest uppercase">
            Scroll to explore
          </p>
          <motion.div
            className="w-px h-12 bg-primary/40 mx-auto mt-4"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </ScrollReveal>
      </motion.div>
    </section>
  );
};

export default BrandIntroPanel;
