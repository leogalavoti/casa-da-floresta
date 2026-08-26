import { GuideNavigation } from "@/components/GuideNavigation";
import { PremiumGallery } from "@/components/PremiumGallery";
import { CheckoutChecklist, HouseGuide, Rules } from "@/components/GuestEssentials";
import {
  ContactHost,
  ExperienceHighlight,
  FinalSection,
  Footer,
  Hero,
  LocalGuide,
  LocationSection,
  PropertyDetails,
  QuickInfo,
  WelcomeSection,
} from "@/components/GuideSections";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden bg-cream text-forest">
    <GuideNavigation />
    <main>
      <Hero />
      <WelcomeSection />
      <QuickInfo />
      <PropertyDetails />
      <ExperienceHighlight />
      <PremiumGallery />
      <HouseGuide />
      <CheckoutChecklist />
      <Rules />
      <LocationSection />
      <LocalGuide />
      <FinalSection />
    </main>
    <Footer />
    <ContactHost />
  </div>
);

export default Index;
