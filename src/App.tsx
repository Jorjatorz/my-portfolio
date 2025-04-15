import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalSections = 6;

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < totalSections) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);
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

  return (
    <div className="relative">
      {/* Navigation Controls */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full ${
              activeSection === index ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Navigate to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => scrollToSection(activeSection - 1)}
        disabled={activeSection === 0}
        className={`fixed left-1/2 top-4 transform -translate-x-1/2 z-50 ${
          activeSection === 0 ? "opacity-0" : "opacity-70 hover:opacity-100"
        } transition-opacity duration-300`}
        aria-label="Previous section"
      >
        <ChevronUp size={32} />
      </button>
      
      <button
        onClick={() => scrollToSection(activeSection + 1)}
        disabled={activeSection === totalSections - 1}
        className={`fixed left-1/2 bottom-4 transform -translate-x-1/2 z-50 ${
          activeSection === totalSections - 1 ? "opacity-0" : "opacity-70 hover:opacity-100"
        } transition-opacity duration-300`}
        aria-label="Next section"
      >
        <ChevronDown size={32} />
      </button>

      {/* Section 1: Header */}
      <div 
        ref={(el) => { sectionRefs.current[0] = el; }}
        className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 snap-start"
      >
        <div className="container px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Avatar className="h-32 w-32 md:h-48 md:w-48">
              <AvatarFallback className="text-3xl md:text-5xl bg-primary text-primary-foreground">
                JS
              </AvatarFallback>
            </Avatar>
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold">Jorge Sánchez Cremades</h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">Data Analytics Engineer</h2>
              <h3 className="text-xl text-muted-foreground">Madrid, Community of Madrid, Spain</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="outline" className="text-lg p-2">LinkedIn Profile</Badge>
                <Badge variant="outline" className="text-lg p-2">GitHub Profile</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Summary + Skills */}
      <div 
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-800 snap-start"
      >
        <div className="container px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-3xl">Summary</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert">
                <p className="text-lg">
                  Software Engineer specializing in Machine Learning, Data Engineering, and Analytics with a strong consulting background. 
                  Passionate about developing algorithms, optimizing code, designing software, and implementing AI models. 
                </p>
                <p className="text-lg">
                  Currently focused on software development and data engineering, transitioning towards management and strategic roles. 
                  Enjoys working on independent digital projects, primarily using Flutter, such as Temporadapp and Can My Cloud Fetch It?. 
                  Aspires to found a scalable, value-providing company.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-3xl">Top Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-md p-1.5">Google Cloud</Badge>
                  <Badge className="text-md p-1.5">Large Language Models (LLM)</Badge>
                  <Badge className="text-md p-1.5">Data Build Tool (DBT)</Badge>
                  <Badge className="text-md p-1.5">Machine Learning (ML)</Badge>
                  <Badge className="text-md p-1.5">Data Engineering</Badge>
                  <Badge className="text-md p-1.5">Analytics</Badge>
                  <Badge className="text-md p-1.5">SQL</Badge>
                  <Badge className="text-md p-1.5">Python</Badge>
                  <Badge className="text-md p-1.5">Cloud-based Analytics</Badge>
                  <Badge className="text-md p-1.5">ETL Processes</Badge>
                  <Badge className="text-md p-1.5">BI Reporting Tools</Badge>
                  <Badge className="text-md p-1.5">Vertex AI</Badge>
                  <Badge className="text-md p-1.5">Dagster</Badge>
                  <Badge className="text-md p-1.5">Looker</Badge>
                  <Badge className="text-md p-1.5">BigQuery</Badge>
                  <Badge className="text-md p-1.5">PostgreSQL</Badge>
                  <Badge className="text-md p-1.5">Docker</Badge>
                  <Badge className="text-md p-1.5">AWS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Section 3: Experience Capchase */}
      <div 
        ref={(el) => { sectionRefs.current[2] = el; }}
        className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 snap-start"
      >
        <div className="container px-4 py-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">Data Analytics Engineer @ Capchase</CardTitle>
              <p className="text-xl text-muted-foreground">March 2023 - Present | Madrid, Spain</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                As a Data Analytics Engineer, I've led several high-impact data engineering and analytics initiatives, 
                significantly improving operational efficiency, data quality, and model performance.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>
                  <strong>Core Operational Model Enhancement:</strong> Designed, implemented, and refactored complex delinquency 
                  and financial models within DBT (BigQuery) and Looker, utilizing SQL and data modeling best practices.
                </li>
                <li>
                  <strong>Metrics Versioning:</strong> Successfully implemented metrics versioning, leading to a more robust 
                  tracking system and fewer issues raised by stakeholders.
                </li>
                <li>
                  <strong>Machine Learning Pipeline Standardization:</strong> Developed a standardized ML pipeline using Vertex AI 
                  and Dagster, substantially reducing deployment time and enhancing model consistency.
                </li>
                <li>
                  <strong>TAM Companies Enrichment Flow:</strong> Spearheaded an exploratory project to improve lead scoring by 
                  analyzing the viability of using GenAI, resulting in an 85% cost reduction.
                </li>
                <li>
                  <strong>Looker Financials to Netsuite Automation:</strong> Led a project to automate data transfer from Looker 
                  to Netsuite, significantly reducing manual work for the finance department.
                </li>
                <li>
                  <strong>Dynamic Eligibility for Pay Implementation:</strong> Enabled dynamic eligibility for Pay draws, 
                  automating a previously manual process, significantly reducing manual effort and potential errors.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section 4: Experience Apres */}
      <div 
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-800 snap-start"
      >
        <div className="container px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Senior Machine Learning Engineer @ Apres</CardTitle>
                <p className="text-xl text-muted-foreground">June 2022 - March 2023 | San Francisco, California</p>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    Designed and implemented a custom vehicle-driver assignments scheduler using Google OR-Tools, handling complex scenarios efficiently.
                  </li>
                  <li>
                    Improved Graph Neural Network (GNN) technology using PyTorch for better performance and embeddings visualization.
                  </li>
                  <li>
                    Scaled a custom online Feature Store and Python intelligence modules to handle millions of records through optimization.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Machine Learning Engineer @ Apres</CardTitle>
                <p className="text-xl text-muted-foreground">January 2022 - June 2022 | San Francisco, California</p>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    Implemented the company's online intelligence module over gRPC for fast, on-demand computations.
                  </li>
                  <li>
                    Improved the custom online Feature Store scalability using PostgreSQL configuration and optimizations.
                  </li>
                  <li>
                    Conducted technical interviews, helping expand the engineering team.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">AI Solutions Engineer @ Apres</CardTitle>
                <p className="text-xl text-muted-foreground">February 2021 - January 2022 | San Francisco, California</p>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    Designed and implemented custom ML pipelines for various clients (fraud detection, demand forecasting, etc.).
                  </li>
                  <li>
                    Designed and built the company's online Feature Store from scratch using PostgreSQL and Python.
                  </li>
                  <li>
                    Designed and implemented the internal ML orchestration module using Dagster, Docker, and AWS.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Section 5: Other Experience */}
      <div 
        ref={(el) => { sectionRefs.current[4] = el; }}
        className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 snap-start"
      >
        <div className="container px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Previous Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">Information Technology Business Consultant @ Deloitte</h3>
                  <p className="text-muted-foreground">September 2019 - February 2021 | Madrid, Spain</p>
                  <ul className="list-disc pl-6 text-lg">
                    <li>
                      Led the finance department's data transformation (EMEA, AMER, APAC) for a global hotel group.
                    </li>
                    <li>
                      Conducted situation appraisals for international clients regarding Data Management and BI.
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">Data Engineer @ EtsFactory</h3>
                  <p className="text-muted-foreground">June 2018 - August 2018 | Madrid, Spain</p>
                  <ul className="list-disc pl-6 text-lg">
                    <li>
                      Designed and developed services/APIs for automating Solvency II file processing and analysis.
                    </li>
                    <li>
                      Developed microservices for retrieving and processing massive financial data.
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">Software Engineer @ Dive.tech</h3>
                  <p className="text-muted-foreground">April 2017 - October 2017 | Madrid, Spain</p>
                  <ul className="list-disc pl-6 text-lg">
                    <li>
                      Improved/maintained movie/series detection algorithms (C++/OpenCV).
                    </li>
                    <li>
                      Migrated services to AWS EC2 using Docker and Jenkins.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Section 6: Education, Languages & Certifications */}
      <div 
        ref={(el) => { sectionRefs.current[5] = el; }}
        className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-800 snap-start"
      >
        <div className="container px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <div>
                  <h3 className="text-xl font-semibold">IÉSEG School of Management</h3>
                  <p>Master of Science in Business Analysis & Consulting (2018-2020)</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Universidad Politécnica de Madrid</h3>
                  <p>Master's degree in Artificial Intelligence (2017-2018)</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">University of Hertfordshire</h3>
                  <p>Bachelor's degree in Computer Science (2016-2017)</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Universidad Complutense de Madrid</h3>
                  <p>Bachelor's degree in Computer Science (2013-2017)</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <div className="flex justify-between">
                    <span>Spanish</span>
                    <span className="text-muted-foreground">Native or Bilingual</span>
                  </div>
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="text-muted-foreground">Full Professional</span>
                  </div>
                  <div className="flex justify-between">
                    <span>French</span>
                    <span className="text-muted-foreground">Limited Working</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Certifications & Awards</CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>First Certificate in English (FCE)</li>
                    <li>Sopra Steria Awards to the best Bachelor's Thesis</li>
                    <li>ETS Challenge 2018 (First Position)</li>
                    <li>Subjects finished with honors</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center text-muted-foreground pt-16">
            © 2025 Jorge Sánchez Cremades. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
