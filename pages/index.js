import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeartureContainer from "../components/fearture-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertyForm from "../components/rent-property-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-gray-white h-[5096px] flex flex-col items-center justify-start">
      <Header />
      <Hero />
      <AreaContainer />
      <FeartureContainer />
      <RentPropertiesContainer />
      <RentPropertyForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
