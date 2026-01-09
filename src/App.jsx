import ContactCTA from "./components/ContactCTA";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LogoStrip from "./components/LogoStrip";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <LogoStrip />
<FeaturesSection />
<StatsSection />
<ServicesSection />
<PortfolioSection />
<Marquee />
<ContactCTA />
<Footer />
    </div>
  );
}
