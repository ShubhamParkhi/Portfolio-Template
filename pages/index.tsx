import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import HeroSection from "../components/hero-section";
import Quote from "../components/quote";
import DesignPrinciples from "../components/design-principles";
import ContactCard from "../components/contact-card";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 w-full flex flex-col items-start justify-start bg-top font-poppins">
      <NavBar />
      <HeroSection />
      <Quote />
      <DesignPrinciples />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default Home;
