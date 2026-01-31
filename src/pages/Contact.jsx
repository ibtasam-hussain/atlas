import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetInTouchForm from "../components/contacts/GetInTouchForm";
import WorkTogetherCTA from "../components/contacts/WorkTogetherCTA";

export default function Contact() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <WorkTogetherCTA />
    <GetInTouchForm />
      <Footer />
    </div>
  );
}
