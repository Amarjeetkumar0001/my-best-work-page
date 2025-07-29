import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern design, secure payments, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Analytics",
      description: "Data visualization dashboard with machine learning insights and predictive analytics for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking app with real-time messaging, content sharing, and advanced privacy controls.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive education platform with video streaming, progress tracking, and interactive assessments.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto portfolio tracker with advanced charting, price alerts, and market analysis tools.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      technologies: ["React", "Redux", "Chart.js", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden card-gradient shadow-soft hover:shadow-elegant transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;