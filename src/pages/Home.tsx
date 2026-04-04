import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ConsultancyServices from "@/components/ConsultancyServices";
import CTA from "@/components/CTA";
import Stats from "@/components/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ConsultancyServices />
      <About />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
