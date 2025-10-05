import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { SiKaggle } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center md:justify-start w-12 h-12 rounded-xl bg-primary text-primary-foreground font-bold text-xl mb-4">
              AS
            </div>
            <p className="text-muted-foreground">
              Data Science & AIML Enthusiast passionate about transforming data 
              into actionable insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Avanish7974"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/avanish-singh-3530812b1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.kaggle.com/avanish1234789"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
                aria-label="Kaggle Profile"
              >
                <SiKaggle className="h-5 w-5" />
              </a>
              <a
                href="mailto:avanishsingh4318@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary/10 border border-border hover:border-primary transition-all hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Avanish Singh. Made with{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for Data Science
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
