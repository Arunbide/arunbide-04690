import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const categories = [
    {
      title: "Cross-Platform",
      skills: ["Kotlin Multiplatform", "Compose Multiplatform", "Shared Business Logic", "iOS & Android"],
    },
    {
      title: "Native Android",
      skills: ["Jetpack Compose", "Android SDK", "Kotlin", "Material Design 3"],
    },
    {
      title: "Architecture",
      skills: ["MVVM", "Clean Architecture", "Coroutines & Flow", "Dependency Injection", "Retrofit"],
    },
    {
      title: "Backend & Cloud",
      skills: ["Firebase", "Room Database", "REST APIs", "Cloud Storage", "AWS S3"],
    },
    {
      title: "AI & ML",
      skills: ["OpenAI API", "GPT Integration", "Prompt Engineering", "AI-Powered Apps"],
    },
    {
      title: "Tools",
      skills: ["Git & GitHub", "Google Play Console", "App Analytics", "CI/CD", "Agile"],
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Skills</h2>
        <p className="text-muted-foreground mb-10">Technologies and tools I work with every day.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {categories.map((c) => (
            <div key={c.title}>
              <h3 className="text-base font-bold mb-3">{c.title}</h3>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground font-normal rounded-md px-2.5 py-1"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
