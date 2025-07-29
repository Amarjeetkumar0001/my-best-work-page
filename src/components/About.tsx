import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Backend Development", 
      description: "Node.js, Express, PostgreSQL, MongoDB"
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, Prototyping"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              Started as a self-taught developer, I quickly fell in love with the endless possibilities of code. 
              Over the years, I've worked with startups and established companies, helping them bring their digital visions to life.
            </p>
            <p className="text-muted-foreground mb-4">
              I believe in writing clean, maintainable code and creating user experiences that delight and inspire. 
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying the great outdoors.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 card-gradient shadow-soft hover:shadow-elegant transition-all duration-300">
              <h4 className="text-xl font-semibold mb-4">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Years Experience</span>
                  <span className="font-semibold">5+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Happy Clients</span>
                  <span className="font-semibold">30+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coffee Consumed</span>
                  <span className="font-semibold">∞</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-8 text-center card-gradient shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">{skill.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{skill.title}</h4>
              <p className="text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;