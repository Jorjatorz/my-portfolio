import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { badgeVariants } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRef, useState, useEffect } from "react";
import { cn } from "./lib/utils";

// Define types for experience data
type ExperienceRole = {
  title: string;
  period: string;
  introduction?: string;
  details: string[];
};

type ExperienceItem = {
  company: string;
  location: string;
  period: string;
  roles: ExperienceRole[];
};

type PreviousExperienceItem = {
  company: string;
  title: string;
  location: string;
  period: string;
  details: string[];
};

// Define section data for navigation
type Section = {
  id: number;
  name: string;
};

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Ref for the canvas

  // Section data - easy to extend by adding more sections
  const sections: Section[] = [
    { id: 0, name: "Home" },
    { id: 1, name: "About" },
    { id: 2, name: "Impact - Capchase" },
    { id: 3, name: "Impact - Apres" },
    { id: 4, name: "Impact - Others" },
    { id: 5, name: "Perks" }
  ];

  const totalSections = sections.length;

  // Experience section state
  const [activeCapchaseRole, setActiveCapchaseRole] = useState(0);
  const [activeApresRole, setActiveApresRole] = useState(0);
  const [activePreviousRole, setActivePreviousRole] = useState(0);

  // Experience data
  const capchaseExperience: ExperienceItem = {
    company: "Capchase",
    location: "Madrid, Spain",
    period: "March 2023 - Present",
    roles: [
      {
        title: "Generalist Software Engineer",
        period: "August 2024 - Present",
        introduction: "Transitioned from Data Analytics Engineer to Product engineering and Project Management, focusing on improving the company's internal tools and processes.",
        details: [
          "TAM Enrichment Flow: Improve lead scoring by analyzing the viability of potential clients using GenAI, resulting in an 85% cost reduction from hundred thousands to less than hundred dollars.",
          "Looker Financials to Netsuite Automation: Led a project to automate data transfer from Looker to Netsuite, significantly reducing manual work for the finance department and improving financial reconcilation.",
          "Capital Markets automation: Automating critical manual processes, like Borrowing Base generation, significantly reducing manual effort and potential errors."
        ]
      },
      {
        title: "Data Analytics Engineer",
        period: "March 2023 - Agust 2024",
        introduction: "Led several high-impact data engineering and analytics initiatives, significantly improving operational efficiency, data quality, and models performance. Working with both technical and business stakeholders.",
        details: [
          "Core Operational Models Enhancement: Designed, implemented, and refactored complex delinquency and financial models within DBT (BigQuery) and Looker.",
          "Business Metrics Versioning: Implemented metrics versioning for the core operational models, leading to a more robust BI system and fewer issues raised by stakeholders.",
          "Machine Learning Pipeline Standardization: Developed a standardized ML pipeline using Vertex AI and Dagster, substantially reducing deployment time and enhancing model consistency.",
        ]
      }
    ]
  };

  const apresExperience: ExperienceItem = {
    company: "Apres",
    location: "San Francisco, California",
    period: "February 2021 - March 2023",
    roles: [
      {
        title: "Senior Machine Learning Engineer",
        period: "June 2022 - March 2023",
        details: [
          "Designed and implemented a custom vehicle-driver assignments scheduler using Google OR-Tools, handling complex scenarios efficiently.",
          "Improved Graph Neural Network (GNN) technology using PyTorch for better performance and embeddings visualization.",
          "Scaled a custom online Feature Store and Python intelligence modules to handle millions of records through optimization."
        ]
      },
      {
        title: "Machine Learning Engineer",
        period: "January 2022 - June 2022",
        details: [
          "Implemented the company's online intelligence module over gRPC for fast, on-demand computations.",
          "Improved the custom online Feature Store scalability using PostgreSQL configuration and optimizations.",
          "Conducted technical interviews, helping expand the engineering team."
        ]
      },
      {
        title: "AI Solutions Engineer",
        period: "February 2021 - January 2022",
        details: [
          "Designed and implemented custom ML pipelines for various clients (fraud detection, demand forecasting, etc.).",
          "Designed and built the company's online Feature Store from scratch using PostgreSQL and Python.",
          "Designed and implemented the internal ML orchestration module using Dagster, Docker, and AWS."
        ]
      }
    ]
  };

  const previousExperience: PreviousExperienceItem[] = [
    {
      company: "Deloitte",
      title: "Information Technology Business Consultant",
      location: "Madrid, Spain",
      period: "September 2019 - February 2021",
      details: [
        "Led the finance department's data transformation (EMEA, AMER, APAC) for a global hotel group.",
        "Conducted situation appraisals for international clients regarding Data Management and BI."
      ]
    },
    {
      company: "EtsFactory",
      title: "Data Engineer",
      location: "Madrid, Spain",
      period: "June 2018 - August 2018",
      details: [
        "Designed and developed services/APIs for automating Solvency II file processing and analysis.",
        "Developed microservices for retrieving and processing massive financial data."
      ]
    },
    {
      company: "Dive.tech",
      title: "Software Engineer",
      location: "Madrid, Spain",
      period: "April 2017 - October 2017",
      details: [
        "Improved/maintained movie/series detection algorithms (C++/OpenCV).",
        "Migrated services to AWS EC2 using Docker and Jenkins."
      ]
    }
  ];

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < totalSections) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const newActiveSection = Math.floor(scrollPosition / windowHeight);

    if (newActiveSection !== activeSection && newActiveSection < totalSections) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Initialize sectionRefs array
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, totalSections);
  }, [totalSections]);

  // Canvas animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const numParticles = 50;
    const connectDistance = 100;
    const particleSpeed = 0.5;
    const lineColor = 'rgba(220, 179, 65, 0.5)';

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = []; // Reinitialize particles on resize
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * particleSpeed * 2,
          vy: (Math.random() - 0.5) * particleSpeed * 2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      // Draw connecting lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 5; // Make lines thicker
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDistance) {
            ctx.globalAlpha = 1 - distance / connectDistance; // Fade line with distance
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1; // Reset alpha

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas(); // Initial setup
    animate();
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="relative text-foreground">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 blur-[3px]"
      />

      {/* Fixed Profile Links */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <a
          href="https://www.linkedin.com/in/jorge-sanchez-cremades/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(badgeVariants({ variant: "outline" }), "text-sm p-1.5 border-accent text-foreground hover:bg-card")}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Jorjatorz"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(badgeVariants({ variant: "outline" }), "text-sm p-1.5 border-accent text-foreground hover:bg-card")}
        >
          GitHub
        </a>
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="relative flex flex-col gap-4">
          {/* Vertical line */}
          <div
            className="absolute w-[1px] bg-accent/40 right-[6px] top-4 bottom-4"
            aria-hidden="true"
          />

          {sections.map((section) => (
            <div
              key={section.id}
              className="group flex items-center justify-end h-8 cursor-pointer z-10"
              onClick={() => scrollToSection(section.id)}
            >
              {/* Section label - smooth transition */}
              <div
                className={`px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap transition-opacity duration-300 ease-in-out ${activeSection === section.id
                  ? "opacity-100 text-primary font-semibold"
                  : "opacity-0 group-hover:opacity-100 group-hover:text-primary/50 text-secondary"
                  } `}
              >
                {section.name}
              </div>

              {/* Navigation dot - always visible, styles change */}
              <div
                className={`w-3 h-3 rounded-full ml-2 shrink-0 transition-all duration-300 ease-in-out ${activeSection === section.id
                  ? 'bg-primary scale-125'
                  : 'bg-secondary group-hover:bg-primary group-hover:scale-110'
                  }`}
                aria-label={`Navigate to ${section.name}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section 1: Header */}
      <div
        ref={(el) => { sectionRefs.current[0] = el; }}
        className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_rgba(21,18,30,0.8)_10%,_transparent_80%)] snap-start"
      >
        <div className="container px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">Jorge Sánchez Cremades</h1>
              <h2 className="text-2xl md:text-3xl text-accent">Generalist Software Engineer</h2>
            </div>
            <Avatar className="h-32 w-32 md:h-48 md:w-48 bg-card border-2 border-primary">
              <AvatarFallback className="text-3xl md:text-5xl bg-card text-primary">
                JS
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Section 2: About */}
      <div
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_center,_rgba(21,18,30,0.8)_10%,_transparent_80%)] snap-start"
      >
        {/* Section Header */}


        {/* Two-column layout */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
          {/* Summary - Left column with lighter background */}
          <div className=" p-8 flex items-center">
            <div className="prose prose-invert max-w-xl text-foreground autoShow">
              <p className="text-xl">
                Software Engineer specialized in <span className="text-primary">Machine Learning, Data Engineering, and Analytics</span> with a strong consulting background.
                Passionate about developing algorithms, optimizing code, designing software, and implementing AI models.
              </p>
              <br />
              <p className="text-xl">
                Currently focused on Software Development and Data Engineering, transitioning towards Management and Strategic roles.
              </p>
              <br />
              <p className="text-xl">
                From time to time I develop Personal Projects.
              </p>
            </div>
          </div>

          {/* Skills - Right column with original background */}
          <div className="flex items-center">
            <div className="p-8 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-primary mb-6 autoShowFromRight">Specialization</h2>
              <div className="w-full space-y-4">
                {/* Compact skill cards with hover effect */}
                <div className="group relative overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all hover:shadow-md autoShowFromRight">
                  <div className="p-4 cursor-pointer">
                    <h3 className="text-2xl font-semibold text-primary">Data Analytics</h3>
                    <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-2">
                      <p>Experienced in transforming raw data into actionable insights using <span className="text-primary">DBT, BigQuery, Looker</span>, and other analytics tools.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent"></div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all hover:shadow-md autoShowFromRight">
                  <div className="p-4 cursor-pointer">
                    <h3 className="text-2xl font-semibold text-primary">ML & AI</h3>
                    <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-2">
                      <p>Experienced in developing and optimizing <span className="text-primary">Machine Learning</span> models and leveraging <span className="text-primary">Generative AI</span> technologies.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent"></div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all hover:shadow-md autoShowFromRight">
                  <div className="p-4 cursor-pointer">
                    <h3 className="text-2xl font-semibold text-primary">Code Optimization</h3>
                    <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-2">
                      <p>Skilled at identifying and resolving performance bottlenecks, refactoring code, and streamlining software architecture. Heavily reducing <span className="text-primary">Latency</span> and <span className="text-primary">Costs</span>.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent"></div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all hover:shadow-md autoShowFromRight">
                  <div className="p-4 cursor-pointer">
                    <h3 className="text-2xl font-semibold text-primary">Project Management</h3>
                    <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-2">
                      <p>Proven ability to <span className="text-primary">lead</span> cross-functional teams, <span className="text-primary">manage</span> complex projects, and deliver results aligned with business goals.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Experience Capchase */}
      <div
        ref={(el) => { sectionRefs.current[2] = el; }}
        className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_rgba(21,18,30,0.8)_10%,_transparent_80%)] snap-start"
      >
        <div className="container px-4 py-16">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-foreground">{capchaseExperience.company}</h2>
            <div className="flex flex-col">
              <p className="text-xl text-accent">{capchaseExperience.location}</p>
              <p className="text-xl font-small text-foreground">{capchaseExperience.period}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Roles sidebar */}
            <div className="space-y-4 autoShow">
              {capchaseExperience.roles.map((role, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCapchaseRole(index)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${activeCapchaseRole === index
                    ? "border-primary bg-card"
                    : "border-border hover:border-accent"
                    }`}
                >
                  <h3 className="font-semibold text-xl text-primary">{role.title}</h3>
                  <p className="text-foreground/70">{role.period}</p>
                </div>
              ))}
            </div>

            {/* Role details */}
            <div className="md:col-span-2 autoShowFromRight">
              <Card className="bg-card border-border text-foreground">
                <CardHeader>
                  <CardTitle className="text-primary">{capchaseExperience.roles[activeCapchaseRole].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {capchaseExperience.roles[activeCapchaseRole].introduction && (
                    <div className="text-foreground/70 mb-4">{capchaseExperience.roles[activeCapchaseRole].introduction}</div>
                  )}
                  <ul className="list-disc pl-6 space-y-3 text-lg">
                    {capchaseExperience.roles[activeCapchaseRole].details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Experience Apres */}
      <div
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_rgba(21,18,30,0.8)_10%,_transparent_80%)] snap-start"
      >
        <div className="container px-4 py-16">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-foreground">{apresExperience.company}</h2>
            <div className="flex flex-col">
              <p className="text-xl text-accent">{apresExperience.location}</p>
              <p className="text-xl font-small text-foreground">{apresExperience.period}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Roles sidebar */}
            <div className="space-y-4">
              {apresExperience.roles.map((role, index) => (
                <div
                  key={index}
                  onClick={() => setActiveApresRole(index)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${activeApresRole === index
                    ? "border-primary bg-background"
                    : "border-border hover:border-accent"
                    } autoShow`}
                >
                  <h3 className="font-semibold text-xl text-primary">{role.title}</h3>
                  <p className="text-foreground/70">{role.period}</p>
                </div>
              ))}
            </div>

            {/* Role details */}
            <div className="md:col-span-2 autoShowFromRight">
              <Card className="bg-background border-border text-foreground">
                <CardHeader>
                  <CardTitle className="text-primary">{apresExperience.roles[activeApresRole].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-3 text-lg">
                    {apresExperience.roles[activeApresRole].details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Previous Experience */}
      <div
        ref={(el) => { sectionRefs.current[4] = el; }}
        className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_rgba(21,18,30,0.8)_10%,_transparent_80%)] snap-start"
      >
        <div className="container px-4 py-16">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-foreground">Previous Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Previous roles sidebar */}
            <div className="space-y-4">
              {previousExperience.map((exp, index) => (
                <div
                  key={index}
                  onClick={() => setActivePreviousRole(index)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${activePreviousRole === index
                    ? "border-primary bg-card"
                    : "border-border hover:border-accent"
                    } autoShow`}
                >
                  <h3 className="font-semibold text-xl text-primary">{exp.company}</h3>
                  <p className="font-medium text-foreground">{exp.title}</p>
                  <p className="text-foreground/70">{exp.period}</p>
                </div>
              ))}
            </div>

            {/* Role details */}
            <div className="md:col-span-2 autoShowFromRight">
              <Card className="bg-card border-border text-foreground">
                <CardHeader>
                  <CardTitle className="text-primary">
                    {previousExperience[activePreviousRole].company}: {previousExperience[activePreviousRole].title}
                  </CardTitle>
                  <p className="text-accent">
                    {previousExperience[activePreviousRole].location} | {previousExperience[activePreviousRole].period}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-3 text-lg">
                    {previousExperience[activePreviousRole].details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Education, Languages */}
      <div
        ref={(el) => { sectionRefs.current[5] = el; }}
        className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_rgba(21,18,30,0.8)_10%,_transparent_80%)] snap-start"
      >
        <div className="container px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-background border-border text-foreground autoShow">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">IÉSEG School of Management</h3>
                  <p>Master of Science in Business Analysis & Consulting</p>
                  <p className="text-accent">2018-2020</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Universidad Politécnica de Madrid</h3>
                  <p>Master's degree in Artificial Intelligence</p>
                  <p className="text-accent">2017-2018</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Universidad Complutense de Madrid</h3>
                  <p>Bachelor's degree in Computer Science</p>
                  <p className="text-accent">2013-2017</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8 autoShowFromRight">
              <Card className="bg-background border-border text-foreground">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <div className="flex justify-between">
                    <span>Spanish</span>
                    <span className="text-accent">Native or Bilingual</span>
                  </div>
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="text-accent">Full Professional</span>
                  </div>
                  <div className="flex justify-between">
                    <span>French</span>
                    <span className="text-accent">Limited Working</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center text-accent pt-16">
            © 2025 Jorge Sánchez Cremades. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
