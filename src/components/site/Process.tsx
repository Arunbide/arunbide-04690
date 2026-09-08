import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Understand", c: "Get clear on the problem, the users and what the product actually has to do." },
  { n: "02", t: "Design", c: "Turn the idea into a simple, intuitive flow before a line of production code." },
  { n: "03", t: "Build", c: "Modern mobile architecture, shared logic, and interfaces that hold up in the real world." },
  { n: "04", t: "Ship", c: "Test, polish, publish to the stores, then iterate on what real usage teaches us." },
];

const Process = () => (
  <section id="process" className="section-shell py-20 sm:py-28">
    <div className="shell">
      <p className="eyebrow">Process</p>
      <h2 className="section-heading max-w-[16ch]">
        From idea <em>→</em> product.
      </h2>

      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-background p-7 transition-colors duration-500 hover:bg-secondary sm:p-9"
          >
            <span className="mono">{s.n}</span>
            <h3 className="mt-6 display text-[clamp(1.5rem,3.4vw,2.2rem)]">{s.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.c}</p>
            <span className="mt-8 block h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
