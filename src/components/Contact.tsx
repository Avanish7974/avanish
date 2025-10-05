import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Download, Send } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKaggle } from "@fortawesome/free-brands-svg-icons";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setCharCount(0);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setFormData({ ...formData, message: value });
      setCharCount(value.length);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "avanishsingh4318@gmail.com",
      href: "mailto:avanishsingh4318@gmail.com",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/avanish-singh-3530812b1",
      href: "https://www.linkedin.com/in/avanish-singh-3530812b1",
      bgColor: "bg-blue-600/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Avanish7974",
      href: "https://github.com/Avanish7974",
      bgColor: "bg-gray-500/10",
      iconColor: "text-gray-600 dark:text-gray-400",
    },
    {
      icon: faKaggle,
      label: "Kaggle",
      value: "@avanish1234789",
      href: "https://www.kaggle.com/avanish1234789",
      bgColor: "bg-cyan-500/10",
      iconColor: "text-cyan-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Let's Connect!</h3>
              <p className="text-muted-foreground text-lg">
                I'm always excited to discuss new opportunities, collaborate on 
                interesting projects, or simply chat about data science and AI/ML. 
                Feel free to reach out!
              </p>
            </div>

            {/* Contact methods */}
            <div className="grid sm:grid-cols-2 gap-4">
            {contactMethods.map((method) => {
                const Icon = method.icon;
                const isFontAwesome = typeof Icon === 'object';
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="bg-card rounded-2xl p-4 sm:p-6 border border-border hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${method.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      {isFontAwesome ? (
                        <FontAwesomeIcon icon={Icon} className={`w-6 h-6 ${method.iconColor}`} />
                      ) : (
                        <Icon className={`w-6 h-6 ${method.iconColor}`} />
                      )}
                    </div>
                    <div className="font-semibold mb-1 text-sm sm:text-base">{method.label}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground break-words">
                      {method.value}
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Download Resume */}
            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 rounded-full"
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Résumé
              </a>
            </Button>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project or just say hello!"
                  value={formData.message}
                  onChange={handleMessageChange}
                  required
                  className="rounded-xl min-h-[150px] resize-none"
                />
                <div className="text-right text-xs text-muted-foreground mt-2">
                  {charCount}/500 characters
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 rounded-full"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
