import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

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
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
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
                href="https://github.com/avanishsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/avanish-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:avanish.singh@example.com"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
              >
                <Mail className="h-5 w-5" />
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
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-8xl">👤</span>
                </div>
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
