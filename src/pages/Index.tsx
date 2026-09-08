import Nav from "@/components/site/Nav";
import Intro from "@/components/site/Intro";
import Marquee from "@/components/site/Marquee";
import Work from "@/components/site/Work";
import About from "@/components/site/About";
import Expertise from "@/components/site/Expertise";
import Process from "@/components/site/Process";
import Timeline from "@/components/site/Timeline";
import Closing from "@/components/site/Closing";

const Index = () => {
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
