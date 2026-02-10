import BrandIntroPanel from "@/components/BrandIntroPanel";
import FounderPanel from "@/components/FounderPanel";
import ExpertisePanel from "@/components/ExpertisePanel";
import ProductPortfolioPanel from "@/components/ProductPortfolioPanel";
import TrustValuesPanel from "@/components/TrustValuesPanel";
import ContactPanel from "@/components/ContactPanel";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <BrandIntroPanel />
      <FounderPanel />
      <ExpertisePanel />
      <ProductPortfolioPanel />
      <TrustValuesPanel />
      <ContactPanel />
    </main>
  );
};

export default Index;
