import { useState, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import tableauImg from "@/assets/tableau-dashboard.jpg";
import powerbiImg from "@/assets/powerbi-dashboard.jpg";
import edaImg from "@/assets/eda-project.jpg";
import laptopImg from "@/assets/laptop-price-prediction.jpg";
import excelImg from "@/assets/excel-dashboard.jpg";
import blinkitImg from "@/assets/blinkit-clone.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, projectTitle: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
    setHoveredProject(projectTitle);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
    setMousePosition({ x: 0, y: 0 });
  };

  const filters = ["All", "Dashboards", "EDA", "Web","ML"];

  const projects = [
    {
      title: "PriceIntel Dashboard",
      description:
        "A machine learning model that predicts laptop prices based on processor, RAM, storage, and GPU. Implemented using Python, Pandas, and Scikit-learn.",
      image: laptopImg,
      category: "ML",
      tags: ["Python", "ML", "Scikit-learn", "Pandas"],
      liveLink: "https://priceinteldashboard-gh3n4hdd67taeaxnjjaiqp.streamlit.app/#laptop-configuration",
      githubLink: "https://github.com/Avanish7974",
    },
    {
      title: "Blinkit Clone",
      description:
        "Full-stack e-commerce web application clone with modern UI/UX and responsive design.",
      image: blinkitImg,
      category: "Web",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://blinkit-ouwa.vercel.app/",
      githubLink: "https://github.com/Avanish7974",
    },
    {
      title: "EDA on IMDb Dataset",
      description:
        "Comprehensive exploratory data analysis on IMDb dataset using Python, revealing key insights and patterns.",
      image: edaImg,
      category: "EDA",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      liveLink: "https://github.com/Avanish7974/IMDb_EDA/blob/main/IMDB.ipynb.ipynb",
      githubLink: "https://github.com/Avanish7974/IMDb_EDA",
    },
    {
      title: "Tableau Dashboard",
      description:
        "Interactive Tableau dashboard analyzing sales performance across regions with KPI tracking and trend analysis.",
      image: tableauImg,
      category: "Dashboards",
      tags: ["Tableau", "SQL", "Excel"],
      liveLink: "https://www.linkedin.com/posts/avanish-singh-3530812b1_tableau-datavisualization-dataanalytics-activity-7367301077223759872-EHCM",
      githubLink: "https://github.com/Avanish7974",
    },
    {
      title: "Power BI Dashboard",
      description:
        "Comprehensive Power BI report showcasing customer behavior patterns and segmentation analysis.",
      image: powerbiImg,
      category: "Dashboards",
      tags: ["Power BI", "DAX", "SQL"],
      liveLink: "https://www.linkedin.com/posts/avanish-singh-3530812b1_powerbi-dashboarddesign-dataanalytics-activity-7352806313396998144-XIxK",
      githubLink: "https://github.com/Avanish7974",
    },
    {
      title: "Excel Dashboard",
      description:
        "HR analytics dashboard with pivot tables, charts, and automated reporting for business intelligence.",
      image: excelImg,
      category: "Dashboards",
      tags: ["Excel", "VBA", "Charts"],
      liveLink: "https://www.linkedin.com/posts/avanish-singh-3530812b1_datascience-exceldashboard-hranalytics-activity-7340024241418915841-MZcU",
      githubLink: "https://github.com/Avanish7974",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of data science projects, interactive dashboards, 
            and web applications
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1500px' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-300 group"
              onMouseMove={(e) => handleMouseMove(e, project.title)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: hoveredProject === project.title
                  ? `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg) scale(1.05) translateZ(20px)`
                  : 'rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                boxShadow: hoveredProject === project.title
                  ? `${mousePosition.x * 20}px ${mousePosition.y * 20}px 40px rgba(0, 0, 0, 0.3)`
                  : undefined,
              }}
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Shimmer effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: hoveredProject === project.title
                      ? `linear-gradient(${mousePosition.x * 45 + 135}deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`
                      : 'none',
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                {/* Glow effect */}
                {hoveredProject === project.title && (
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, hsl(var(--primary)) 0%, transparent 70%)`,
                    }}
                  />
                )}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    asChild
                    className="flex-1 bg-primary hover:bg-primary/90 rounded-full"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 rounded-full"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
