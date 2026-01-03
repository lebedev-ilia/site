import { LandingBackground } from "@/components/landing/LandingBackground";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { ModalityAudioSection } from "@/components/landing/ModalityAudioSection";
import { ModalityTextSection } from "@/components/landing/ModalityTextSection";
import { ModalityVisualSection } from "@/components/landing/ModalityVisualSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { DemoSection } from "@/components/landing/DemoSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { DocsSection } from "@/components/landing/DocsSection";
import { AboutSection } from "@/components/landing/AboutSection";

export default function HomePage() {
  return (
    <div id="top" className="relative min-h-dvh">
      <LandingBackground />
      <LandingHeader />

      <main className="relative w-full h-100">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <ModalityVisualSection />
        <ModalityAudioSection />
        <ModalityTextSection />
        <DocsSection />
        <AboutSection />
        <PricingSection />
      </main>

      <LandingFooter />
    </div>
  );
}


