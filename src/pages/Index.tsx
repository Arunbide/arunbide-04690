import { useEffect } from "react";
import Nav from "@/components/site/Nav";
import Intro from "@/components/site/Intro";
import Marquee from "@/components/site/Marquee";
import Work from "@/components/site/Work";
import About from "@/components/site/About";
import Expertise from "@/components/site/Expertise";
import Process from "@/components/site/Process";
import Timeline from "@/components/site/Timeline";
import Closing from "@/components/site/Closing";
import { initSmoothScroll } from "@/lib/smooth-scroll";

const Index = () => {
  useEffect(() => initSmoothScroll(), []);

  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Intro />
        <Marquee />
        <Work />
        <About />
        <Expertise />
        <Process />
        <Timeline />
      </main>
      <Closing />
    </div>
  );
};

export default Index;
