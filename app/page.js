"use client";

import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Features from "./components/Features";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      dir="rtl"
      className="w-full max-w-full overflow-x-clip bg-slate-50 font-vazirmatn text-slate-800 antialiased"
    >
      <Header />

      <div className="w-full max-w-full">
        <HeroSlider />
        <Features />
        <Products />
        <Projects /> 
        <Testimonials />
        <Contact />
        <Map />
        <Footer />
      </div>
    </main>
  );
}