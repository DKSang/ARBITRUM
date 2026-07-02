import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScenePanels } from "@/components/ScenePanels";
import { EcosystemRing } from "@/components/EcosystemRing";
import { Stats } from "@/components/Stats";
import { FlexiblePlatform } from "@/components/FlexiblePlatform";
import { CaseStudies } from "@/components/CaseStudies";
import { EcosystemTabs } from "@/components/EcosystemTabs";
import { ReadyToBuild } from "@/components/ReadyToBuild";
import { TechSection } from "@/components/TechSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-repeating-lines">
      <div className="m-auto flex max-w-[1440px] flex-col">
        <Header />
        <div className="page-wrapper overflow-hidden">
          <Hero />
          <ScenePanels />
          <EcosystemRing />
          <Stats />
          <FlexiblePlatform />
          <CaseStudies />
          <div className="px-4 py-10 lg:px-10">
            <div className="py-30">
              <EcosystemTabs />
              <ReadyToBuild />
            </div>
            <TechSection />
          </div>
          <FinalCta />
        </div>
        <Footer />
      </div>
    </main>
  );
}
