import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 3, suffix: "+", label: "Years building" },
  { value: 12, suffix: "+", label: "Projects shipped" },
  { value: 4, suffix: "", label: "Platforms served" },
];

const CountUp = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="display-md tabular-nums">
      {n}
      {suffix}
    </span>
  );
};

const About = () => (
  <section id="about" className="section-shell py-20 sm:py-28">
    <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
      <div>
        <p className="eyebrow">About</p>
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="display-lg"
        >
          A little
          <br />
          <span className="outline-type">about me.</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-5">
          <img
            src={avatar}
            alt="Arun Bide"
            width={160}
            height={160}
            className="h-24 w-24 rounded-full border border-border object-cover sm:h-28 sm:w-28"
          />
          <div className="flex flex-col gap-1">
            <span className="mono-sm font-semibold tracking-[0.24em]">ARUN BIDE</span>
            <span className="mono">Kotlin Multiplatform Developer · India</span>
          </div>
        </div>

          <p>
            I'm Arun — a software developer focused on mobile products built with Kotlin, Android
            and Kotlin Multiplatform. I care about the parts users feel: motion, responsiveness,
            and the small details that make an app trustworthy.
          </p>
          <p>
            I work end to end — shaping the idea, choosing the architecture, building the interface,
            wiring the services, and shipping to the stores. Mostly with clients who need a real
            product, not a prototype.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <CountUp to={s.value} suffix={s.suffix} />
              <span className="mono">{s.label}</span>
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <span className="display-md">IN</span>
            <span className="mono">Based in India</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="display-md">KMP</span>
            <span className="mono">Primary stack</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
