import React from "react";
import CallToAction from "../CallToAction/CallToAction";
import Company from "../Company/Company";
import Hero from "../Hero/Hero";
import ProductItems from "../ProductItems/ProductItems";
import Reviews from "../Reviews/Reviews";
import Statistic from "../Statistic/Statistic";
import Teams from "../Teams/Teams";
const Home = () => {
  return (
    <section id="home">
      <Hero />
      <Statistic />
      <ProductItems />
      <Teams />
      <CallToAction />
      <Reviews />
      <Company />
    </section>
  );
};

export default Home;
