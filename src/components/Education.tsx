import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                <GraduationCap className="w-12 h-12 text-primary" />
              </div>

              {/* Degree */}
              <h3 className="text-3xl font-bold mb-4">Bachelor of Technology</h3>
              <p className="text-xl text-primary font-semibold mb-6">
                Artificial Intelligence & Machine Learning
              </p>

              {/* Institute */}
              <p className="text-lg text-foreground/80 mb-2">
                Sagar Institute of Research and Technology (SIRT)
              </p>
              <p className="text-muted-foreground mb-6">2023 - 2027</p>

              {/* Status badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-8">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="font-semibold">Currently Pursuing</span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border my-8"></div>

              {/* Specialization */}
              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                Specializing in Machine Learning, Deep Learning, Data Analytics, 
                and AI System Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
