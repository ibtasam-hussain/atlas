import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/services/ServicesHero";
import ServicesList from "../components/services/ServicesList";


export default function Services() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
<ServicesHero />
<ServicesList />
      <Footer />
    </div>
  );
}
