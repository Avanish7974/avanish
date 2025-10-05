import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            I'm building the skills and knowledge required to create engaging and dynamic solutions by harnessing the capabilities of Data Science, Artificial Intelligence, and Machine Learning technologies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8 items-start bg-card rounded-3xl p-6 md:p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            {/* Portrait */}
            <div className="mx-auto w-full flex justify-center">
              <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={profilePhoto} 
                  alt="Avanish Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  B.Tech AI & ML Student.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a dedicated B.Tech student specializing in Artificial Intelligence and Machine Learning at Sagar Institute of Research & Technology (SIRT), Bhopal, with an expected graduation in 2027. My journey in this field is driven by a passion for harnessing the power of data to solve real-world challenges. Proficient in programming languages and tools such as Python, SQL, Power BI, and Tableau, I have developed a strong foundation in machine learning libraries including Pandas, NumPy, Scikit-learn, and Seaborn. My hands-on experience encompasses data visualization, exploratory data analysis, and creating impactful dashboards that narrate compelling stories from raw data. I thrive in collaborative environments and actively participate in hackathons and projects, continuously enhancing my skills through platforms like Google Cloud Arcade, Infosys Springboard, and Kaggle. As I progress in my studies, I am eager to dive deeper into the fascinating world of data science and AI, aspiring to contribute innovative solutions that drive positive change.
                </p>
              </div>

              {/* Details table */}
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2 sm:gap-4 py-2 border-b border-border">
                  <span className="font-semibold">Branch:</span>
                  <span className="text-muted-foreground">Artificial Intelligence and Machine Learning</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2 sm:gap-4 py-2 border-b border-border">
                  <span className="font-semibold">Degree:</span>
                  <span className="text-muted-foreground">AIML 3rd Year UG</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2 sm:gap-4 py-2 border-b border-border">
                  <span className="font-semibold">College:</span>
                  <span className="text-muted-foreground">Sagar Institute of Research and Technology, Bhopal</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2 sm:gap-4 py-2 border-b border-border">
                  <span className="font-semibold">City:</span>
                  <span className="text-muted-foreground">Bhopal, India</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2 sm:gap-4 py-2 border-b border-border">
                  <span className="font-semibold">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/avanish-singh-3530812b1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                    linkedin.com/in/avanish-singh-3530812b1
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2 sm:gap-4 py-2 border-b border-border">
                  <span className="font-semibold">Github:</span>
                  <a href="https://github.com/Avanish7974" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                    github.com/Avanish7974
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2 sm:gap-4 py-2 border-b border-border">
                  <span className="font-semibold">Kaggle:</span>
                  <a href="https://www.kaggle.com/avanish1234789" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                    kaggle.com/avanish1234789
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2 sm:gap-4 py-2 border-b border-border">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:avanishsingh4318@gmail.com" className="text-primary hover:underline break-all">
                    avanishsingh4318@gmail.com
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2 sm:gap-4 py-2 border-b border-border">
                  <span className="font-semibold">Phone:</span>
                  <a href="tel:+917974037798" className="text-primary hover:underline break-all">
                    +91 797 403 7798
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2 sm:gap-4 py-2 border-b border-border">
                  <span className="font-semibold">Internships:</span>
                  <span className="text-muted-foreground">TCS iON, Infosys Springboard,Cybrom Technology</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2 sm:gap-4 py-2">
                  <span className="font-semibold">Technical Proficiency:</span>
                  <span className="text-muted-foreground">Python, C++, SQL, Machine Learning, Data Analytics, Power BI, Tableau</span>
                </div>
              </div>

              <Button asChild className="mt-6 bg-primary hover:bg-primary/90 rounded-full">
                <a href="#projects">Show My Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
