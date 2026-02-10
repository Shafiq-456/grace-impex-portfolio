import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

import sparePartsImg from "@/assets/spare-parts.png";
import warpingImg from "@/assets/warping-machine.jpeg";
import braidingImg from "@/assets/braiding-machine.jpeg";
import crochetImg from "@/assets/crochet-machine.jpeg";
import needleLoomImg from "@/assets/needle-loom.jpeg";
import labelLoomImg from "@/assets/label-loom.png";
import circularKnittingImg from "@/assets/circular-knitting.png";
import rotaryLabelPrintingImg from "@/assets/rotary-label-printing.png";

const products = [
  {
    image: braidingImg,
    title: "High-Speed Braiding Machine",
    description:
      "Used for producing braided cords, ropes, laces, and elastic bands. Ideal for garment trims, shoe laces, and industrial braided products.",
  },
  {
    image: warpingImg,
    title: "Sectional Warping Machine",
    description:
      "Prepares yarn beams for weaving by winding yarn in precise parallel sections. Essential for producing uniform, high-quality warp beams for looms.",
  },
  {
    image: crochetImg,
    title: "Crochet Knitting Machine",
    description:
      "Produces crocheted fabrics, lace trims, and elastic bands at high speed. Widely used in lingerie, sportswear, and decorative textile manufacturing.",
  },
  {
    image: needleLoomImg,
    title: "Needle Loom Machine",
    description:
      "Weaves narrow fabrics such as ribbons, tapes, labels, and webbing. A workhorse for garment accessories, seat belts, and medical bandages.",
  },
  {
    image: circularKnittingImg,
    title: "Circular Knitting Machine",
    description:
      "Produces seamless tubular knitted fabrics at high speed. Widely used for T-shirts, underwear, sportswear, and technical circular-knit textiles.",
  },
  {
    image: rotaryLabelPrintingImg,
    title: "Rotary Label Printing Machine",
    description:
      "High-speed rotary printing machine for producing self-adhesive labels, stickers, and tags with multi-color precision. Ideal for packaging, branding, and industrial labeling applications.",
  },
  {
    image: labelLoomImg,
    title: "Label Loom Machine",
    description:
      "Produces woven labels, tags, and branded fabric strips with intricate designs. Ideal for garment branding, care labels, and decorative woven trims.",
  },
  {
    image: sparePartsImg,
    title: "Textile Machinery Spare Parts",
    description:
      "Precision-engineered gears, springs, circuit boards, bearings, and components. Genuine and compatible parts for all major textile machinery brands to ensure uninterrupted operations.",
  },
];

const ProductPortfolioPanel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-20">
          <ScrollReveal>
            <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
              Our Portfolio
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
              Product <span className="gold-gradient-text">Overview</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="gold-line w-16 mx-auto mt-6" />
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ScrollReveal key={product.title} delay={0.1 * i}>
              <div className="group border border-border rounded-sm overflow-hidden bg-card hover:shadow-lg transition-all duration-700">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-[1.8]">
                    {product.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolioPanel;
