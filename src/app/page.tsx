import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Insights from "@/components/sections/Insights";
import WhatWeThink from "@/components/sections/WhatWeThink";
import CustomerStories from "@/components/sections/CustomerStories";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProp />
      <Services />
      <Products />
      <WhatWeThink />
      <Insights />
      <CustomerStories />
      <Partners />
      <Contact />
    </>
  );
}
