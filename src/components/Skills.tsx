import { Code, Database, BarChart, FileCode, Table, TrendingUp, GitBranch, FileSpreadsheet } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: Code, percentage: 75 },
        { name: "C++", icon: Code, percentage: 68 },
        { name: "SQL", icon: Database, percentage: 72 },
        { name: "HTML", icon: FileCode, percentage: 65 },
        { name: "CSS", icon: FileCode, percentage: 63 },
      ],
    },
    {
      title: "ML & Data Libraries",
      skills: [
        { name: "NumPy", icon: BarChart, percentage: 73 },
        { name: "Pandas", icon: Table, percentage: 78 },
        { name: "Scikit-learn", icon: TrendingUp, percentage: 70 },
        { name: "Matplotlib", icon: BarChart, percentage: 68 },
        { name: "Seaborn", icon: BarChart, percentage: 67 },
      ],
    },
    {
      title: "Analytics Tools",
      skills: [
        { name: "Tableau", icon: BarChart, percentage: 80 },
        { name: "Power BI", icon: BarChart, percentage: 85 },
        { name: "Excel", icon: FileSpreadsheet, percentage: 82 },
        { name: "GitHub", icon: GitBranch, percentage: 74 },
        { name: "ETL", icon: Database, percentage: 65 },
      ],
    },
  ];

  const stats = [
  { label: "Learning Hours", value: "800+", color: "text-primary" },
  { label: "Projects Completed", value: "12+", color: "text-accent" },
  { label: "Tools & Technologies", value: "15+", color: "text-accent" },
  ];


  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-[1fr,300px] gap-8">
          {/* Skills Grid - Three Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all group"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-primary" />
                            <span className="font-semibold">{skill.name}</span>
                          </div>
                          <span className="text-sm font-bold text-primary">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 group-hover:scale-105"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Card */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-card rounded-3xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Learning Stats
              </h3>
              <div className="space-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
