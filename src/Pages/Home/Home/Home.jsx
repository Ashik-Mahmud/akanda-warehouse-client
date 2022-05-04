import React from "react";
import useTitle from "../../../Hooks/useTitle";
import CallToAction from "../CallToAction/CallToAction";
import Company from "../Company/Company";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import ProductItems from "../ProductItems/ProductItems";
import Reviews from "../Reviews/Reviews";
import Statistic from "../Statistic/Statistic";
import Teams from "../Teams/Teams";
const Home = () => {
  useTitle("Home");
  return (
    <section id="home">
      <Hero />
      <Statistic />
      <ProductItems />
      <Teams />
      <CallToAction />
      <Reviews />
      <Company />
      <Contact />
    </section>
  );
};

export default Home;
