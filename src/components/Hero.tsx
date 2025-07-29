import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Floating orbs for visual appeal */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="gradient-text">Alex Johnson</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & UI/UX Designer crafting beautiful digital experiences
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            I specialize in building modern web applications with React, TypeScript, and cutting-edge technologies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-elegant"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-primary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-12 w-12">
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-12 w-12">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-12 w-12">
            <Mail className="h-6 w-6" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/20 animate-bounce"
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;