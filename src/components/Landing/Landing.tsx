import CallToAction from "./CallToAction";
import DemoCarousel from "./DemoCarousel";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Waitlist from "./Waitlist";

const LandingPage = () => {
  return (
    <main className="p-0 m-0 flex flex-col h-fit">
      <Navbar />
      <Hero />
      <CallToAction />
      <Features />
      <DemoCarousel />
      <Waitlist />
      <Footer />
    </main>
  );
};

export default LandingPage;
