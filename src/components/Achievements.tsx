import { Award, Trophy, CheckCircle } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Google Cloud Arcade",
      subtitle: "Legend Tier",
      description:
        "Completed advanced cloud computing challenges and earned the prestigious Legend tier certification.",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500",
      year: "2024",
      badgeColor: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    },
    {
      title: "SQL Certification",
      subtitle: "HackerRank",
      description:
        "Demonstrated proficiency in SQL queries, database design, and data manipulation techniques.",
      icon: "💾",
      color: "from-purple-500 to-pink-500",
      year: "2024",
      badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    },
    {
      title: "AI/ML Geodata Analysis",
      subtitle: "ISRO - Indian Institute of Remote Sensing (IIRS)",
      description:
      "Successfully participated in the online course 'AI/ML for Geodata Analysis' conducted by ISRO, Department of Space, Government of India, from 19 August 2024 to 23 August 2024 (total duration: 7 hours 30 minutes).",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
      year: "2024",
      badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
    {
      title: "Advanced Certification in Data Science",
      subtitle: "E&ICT Academy IIT Guwahati (in association with Cybrom Technology)",
      description:
      "Enrolled in the Advanced Certification in Data Science, organized by E&ICT Academy IIT Guwahati in collaboration with Cybrom Technology.",
      icon: "📊",
      color: "from-indigo-500 to-sky-500",
      year: "2025",
      badgeColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    },
    {
      title: "Communication Skills",
      subtitle: "IBM Certificate",
      description:
        "Completed comprehensive training in professional communication and presentation skills.",
      icon: "💬",
      color: "from-cyan-500 to-blue-500",
      year: "2024",
      badgeColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    },
    {
      title: "Nestlé Professional",
      subtitle: "Industry Certificate",
      description:
        "Earned industry recognition through Nestlé's professional development program.",
      icon: "🎖️",
      color: "from-red-500 to-pink-500",
      year: "2023",
      badgeColor: "bg-red-500/10 text-red-600 border-red-500/20",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all group"
            >
              {/* Icon section */}
              <div className={`relative h-48 bg-gradient-to-br ${achievement.color} flex items-center justify-center overflow-hidden`}>
                <span className="text-7xl drop-shadow-lg">{achievement.icon}</span>
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <p className="text-primary font-semibold">{achievement.subtitle}</p>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>

                {/* Year badge */}
                <div className="flex items-center justify-between pt-2">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${achievement.badgeColor}`}>
                    <Award className="w-3 h-3" />
                    {achievement.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Always Learning, Always Growing</h3>
          <p className="text-muted-foreground mb-8">
            These achievements represent my commitment to continuous learning and professional 
            development in the field of data science and AI/ML.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">4+ Certifications</span>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent rounded-full">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Industry Recognition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
