import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Alex Johnson</h3>
            <p className="text-primary-foreground/80 mb-4">
              Full Stack Developer passionate about creating beautiful, functional web experiences.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary-foreground transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Resume</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Alex Johnson. All rights reserved. Built with ❤️ using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;