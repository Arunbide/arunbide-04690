const items = ["KOTLIN", "ANDROID", "KMP", "JETPACK COMPOSE", "FLUTTER", "FIREBASE", "KTOR", "AWS", "COMPOSE MULTIPLATFORM", "WASM", "OPENAI"];

const Marquee = () => (
  <div className="border-y border-border py-5 marquee-mask select-none">
    <div className="marquee-track items-center gap-10 sm:gap-16">
      {[0, 1].map((k) => (
        <div key={k} className="flex items-center gap-10 sm:gap-16 pr-10 sm:pr-16">
          {items.map((t) => (
            <span key={t + k} className="flex items-center gap-10 sm:gap-16 whitespace-nowrap mono text-foreground/60">
              {t}
              <i className="h-1 w-1 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
