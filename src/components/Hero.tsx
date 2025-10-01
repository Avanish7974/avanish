import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const languages = ["Python", "C++", "SQL", "HTML"];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentText = languages[loopNum % languages.length];
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (typedText.length < currentText.length) {
          setTypedText(currentText.substring(0, typedText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentText.substring(0, typedText.length - 1));
          setTypingSpeed(75);
        } else {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed, languages]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold">
              I'm <span className="text-primary">Avanish Singh</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground/80">
              Data Science & AIML Enthusiast
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              Passionate about transforming data into insights and building
              intelligent solutions through machine learning and artificial
              intelligence.
            </p>
            
            {/* Typing effect */}
            <div className="flex items-center gap-2 text-lg">
              <span className="text-muted-foreground">I have knowledge of</span>
              <span className="text-primary font-semibold min-w-[120px]">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Avanish7974"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/avanish-singh-3530812b1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:avanishsingh4318@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.kaggle.com/avanish1234789"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                </svg>
              </a>
              <a
                href="tel:+917974037798"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 rounded-full"
              >
                <a href="#projects">My Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2"
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Résumé
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Portrait with floating badges */}
          <div className="relative flex justify-center items-center animate-scale-in order-first md:order-last">
            <div className="relative">
              {/* Main portrait */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Avanish Singh" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge - Review */}
              <div className="absolute -top-4 -right-4 bg-card border-2 border-border rounded-2xl px-3 py-2 md:px-4 md:py-2 shadow-lg rotate-12 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">⭐</span>
                  <span className="font-bold text-sm md:text-base">5.0 Review</span>
                </div>
              </div>

              {/* Floating badge - Expertise */}
              <div className="absolute top-1/4 -left-4 md:-left-8 bg-card border-2 border-border rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-lg -rotate-6 hover:rotate-0 transition-transform">
                <div className="text-xs font-semibold mb-2">Expertise</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                    <span className="text-xs">ML</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 md:w-14 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
                    <span className="text-xs">EDA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 md:w-12 h-1 bg-gradient-to-r from-secondary to-secondary/50 rounded-full"></div>
                    <span className="text-xs">Viz</span>
                  </div>
                </div>
              </div>

              {/* Floating badge - Degree */}
              <div className="absolute bottom-8 -left-8 md:-left-12 bg-card border-2 border-border rounded-2xl px-3 py-2 md:px-4 md:py-2 shadow-lg -rotate-12 hover:rotate-0 transition-transform">
                <div className="text-xs font-semibold">B.Tech AI&ML</div>
                <div className="text-xs text-muted-foreground">SIRT 2023-2027</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
