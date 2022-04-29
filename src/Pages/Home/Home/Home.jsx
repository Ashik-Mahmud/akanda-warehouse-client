import React from "react";
import CallToAction from "../CallToAction/CallToAction";
import Company from "../Company/Company";
import Hero from "../Hero/Hero";
import ProductItems from "../ProductItems/ProductItems";
import Reviews from "../Reviews/Reviews";
const Home = () => {
  return (
    <section id="home">
      <Hero />
      <ProductItems />
      <Reviews />
      <CallToAction />
      <Company />
    </section>
  );
};

export default Home;
