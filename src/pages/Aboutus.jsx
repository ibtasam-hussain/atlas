import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/About/AboutHero";
import AboutStatsSplit from "../components/About/AboutStatsSplit";
import Testimonials from "../components/About/Testimonials";
import Marquee from "../components/Marquee";
import ContactCTA from "../components/ContactCTA";


export default function AboutUS() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
<AboutHero />
<AboutStatsSplit />
<Testimonials />
<Marquee />
<ContactCTA />
      <Footer />
    </div>
  );
}
