import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analytics Intern",
      company: "TCS iON",
      type: "Internship",
      period: "June 2024 - August 2024",
      description:
        "Worked on real-world analytics projects involving data cleaning, statistical analysis, and visualization. Developed automated reporting solutions and contributed to business intelligence initiatives.",
      achievements: [
        "Improved data processing efficiency by 40% through automation",
        "Created interactive dashboards for stakeholder reporting",
        "Collaborated with cross-functional teams on analytics projects",
        "Gained hands-on experience with enterprise-level data tools",
      ],
      technologies: ["Python", "SQL", "Tableau", "Data Analysis", "Automation"],
      icon: Briefcase,
    },
    {
      title: "AI/ML Training Program",
      company: "Infosys Springboard",
      type: "Training",
      period: "January 2024 - May 2024",
      description:
        "Completed comprehensive training in Artificial Intelligence and Machine Learning concepts, algorithms, and implementation techniques through Infosys Springboard platform.",
      achievements: [
        "Completed advanced courses in ML algorithms and deep learning",
        "Built multiple hands-on projects using Python and ML libraries",
        "Earned certification in AI/ML fundamentals",
        "Participated in coding challenges and assessments",
      ],
      technologies: ["Machine Learning", "Python", "Deep Learning", "Neural Networks"],
      icon: GraduationCap,
    },
    {
      title: "Data Science Internship",
      company: "Cybrom Technology",
      type: "Internship",
      period: "January 2025 - September 2025",
      description:
        "Worked on real-world data science projects, analyzing datasets, building predictive models, and generating actionable insights.",
      achievements: [
        "Developed predictive models using Python and machine learning libraries",
        "Performed data cleaning, feature engineering, and visualization",
        "Collaborated with team members on end-to-end data science projects",
        "Presented insights and reports to facualty",
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Power BI", "Tableau"],
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="relative bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block -ml-2"></div>

                  <div className="md:ml-12">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-lg text-primary font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          exp.type === "Internship"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        }`}>
                          {exp.type}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">{exp.description}</p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
