import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8">
      <ScrollArea className="h-screen">
        <div className="container mx-auto space-y-8 pb-16">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Avatar className="h-24 w-24 md:h-32 md:w-32">
              <AvatarFallback className="text-xl md:text-3xl bg-primary text-primary-foreground">
                JS
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">Jorge Sánchez Cremades</h1>
              <h2 className="text-xl text-muted-foreground">Data Analytics Engineer | Madrid, Community of Madrid, Spain</h2>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="outline">LinkedIn Profile</Badge>
                <Badge variant="outline">GitHub Profile</Badge>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Software Engineer specializing in Machine Learning, Data Engineering, and Analytics with a strong consulting background. 
                Passionate about developing algorithms, optimizing code, designing software, and implementing AI models. 
                Currently focused on software development and data engineering, transitioning towards management and strategic roles. 
                Enjoys working on independent digital projects, primarily using Flutter, such as Temporadapp and Can My Cloud Fetch It?. 
                Aspires to found a scalable, value-providing company.
              </p>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card>
            <CardHeader>
              <CardTitle>Top Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Google Cloud</Badge>
                <Badge>Large Language Models (LLM)</Badge>
                <Badge>Data Build Tool (DBT)</Badge>
                <Badge>Machine Learning (ML)</Badge>
                <Badge>Data Engineering</Badge>
                <Badge>Analytics</Badge>
                <Badge>SQL</Badge>
                <Badge>Python</Badge>
                <Badge>Cloud-based Analytics</Badge>
                <Badge>ETL Processes</Badge>
                <Badge>BI Reporting Tools</Badge>
                <Badge>Vertex AI</Badge>
                <Badge>Dagster</Badge>
                <Badge>Looker</Badge>
                <Badge>BigQuery</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>Docker</Badge>
                <Badge>AWS</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Capchase */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">Data Analytics Engineer @ Capchase</h3>
                  <p className="text-sm text-muted-foreground">March 2023 - Present | Madrid, Community of Madrid, Spain</p>
                </div>
                <p>
                  As a Data Analytics Engineer, I've led several high-impact data engineering and analytics initiatives, 
                  significantly improving operational efficiency, data quality, and model performance. I am comfortable 
                  working across both analytics and client-facing repositories. Key achievements include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Core Operational Model Enhancement:</strong> Designed, implemented, and refactored complex delinquency 
                    and financial models within DBT (BigQuery) and Looker, utilizing SQL and data modeling best practices. 
                    This initiative improved code quality and reporting capabilities and enhanced ETL processes, making models 
                    and tools more robust and cost-effective.
                  </li>
                  <li>
                    <strong>Metrics Versioning:</strong> Successfully implemented metrics versioning, leading to a more robust 
                    tracking system and fewer issues raised by stakeholders.
                  </li>
                  <li>
                    <strong>Machine Learning Pipeline Standardization:</strong> Developed a standardized ML pipeline using Vertex AI 
                    and Dagster, substantially reducing deployment time and enhancing model consistency, reliability, and monitoring, 
                    enabling scalable MLOps.
                  </li>
                  <li>
                    <strong>TAM Companies Enrichment Flow:</strong> Spearheaded an exploratory project to improve lead scoring by 
                    analyzing the viability of using GenAI. This led to the design and implementation of a new flow between 
                    Orchestrator and Metric-Service to extract B2B/SaaS status and LinkedIn data, resulting in an 85% cost reduction.
                  </li>
                  <li>
                    <strong>Looker Financials to Netsuite Automation:</strong> Led a project to automate data transfer from Looker 
                    to Netsuite, significantly reducing manual work for the finance department. Implementation in Maquinillo (Dagster) 
                    included a model to freeze metrics, enhancing accountability.
                  </li>
                  <li>
                    <strong>Dynamic Eligibility for Pay Implementation:</strong> Enabled dynamic eligibility for Pay draws, 
                    automating a previously manual process. This involved designing and refactoring code to be "Pay first," 
                    significantly reducing manual effort and potential errors.
                  </li>
                  <li>
                    Developed critical BI reporting tools for PayOps and Finance, enhancing visibility and control over delinquent 
                    transactions, FX risk management, and financial exposure, reducing financial risks and operational costs.
                  </li>
                </ul>
              </div>

              <Separator />

              {/* Apres - Senior ML Engineer */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">Senior Machine Learning Engineer @ Apres</h3>
                  <p className="text-sm text-muted-foreground">June 2022 - March 2023 | San Francisco, California, United States</p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Designed and implemented a custom vehicle-driver assignments scheduler using Google OR-Tools, learning the framework from 
                    scratch and delivering a solution handling complex scenarios efficiently.
                  </li>
                  <li>
                    Improved Graph Neural Network (GNN) technology using PyTorch for better performance and embeddings visualization.
                  </li>
                  <li>
                    Scaled a custom online Feature Store and Python intelligence modules to handle millions of records through 
                    indexing, schema changes, profiling, and code optimization (moving from Pandas to NumPy).
                  </li>
                </ul>
              </div>

              <Separator />

              {/* Apres - ML Engineer */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">Machine Learning Engineer @ Apres</h3>
                  <p className="text-sm text-muted-foreground">January 2022 - June 2022 | San Francisco, California, United States</p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Implemented the company's online intelligence module over gRPC for fast, on-demand computations, 
                    including narrative generation, statistics, and model predictions.
                  </li>
                  <li>
                    Improved the custom online Feature Store scalability using PostgreSQL configuration, DB schema changes, 
                    and Python optimizations.
                  </li>
                  <li>
                    Conducted technical interviews, helping expand the engineering team.
                  </li>
                </ul>
              </div>

              <Separator />
              
              {/* Apres - AI Solutions Engineer */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">AI Solutions Engineer @ Apres</h3>
                  <p className="text-sm text-muted-foreground">February 2021 - January 2022 | San Francisco, California, United States</p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Designed and implemented custom ML pipelines for various clients (fraud detection, demand forecasting, 
                    recommendation, credit default).
                  </li>
                  <li>
                    Designed and built the company's online Feature Store from scratch using PostgreSQL and Python.
                  </li>
                  <li>
                    Designed and implemented the internal ML orchestration module using Dagster, Docker, and AWS.
                  </li>
                  <li>
                    Developed intelligence modules using Python libraries (Pandas, NumPy, scikit-learn, SciPy) for 
                    ML algorithms, dataset analytics, and narrative generation.
                  </li>
                </ul>
              </div>

              <Separator />

              {/* Deloitte */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">Information Technology Business Consultant @ Deloitte</h3>
                  <p className="text-sm text-muted-foreground">September 2019 - February 2021 | Madrid, Spain</p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Led the finance department's data transformation (EMEA, AMER, APAC) for a global hotel group 
                    and managed the global Data Dictionary.
                  </li>
                  <li>
                    Conducted situation appraisals for international clients regarding Data Management and Business Intelligence.
                  </li>
                </ul>
              </div>

              <Separator />

              {/* EtsFactory */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">Data Engineer @ EtsFactory</h3>
                  <p className="text-sm text-muted-foreground">June 2018 - August 2018 | Madrid, Spain</p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Designed and developed services/APIs for automating Solvency II file processing and analysis using Python.
                  </li>
                  <li>
                    Developed microservices for retrieving and processing massive financial data.
                  </li>
                </ul>
              </div>

              <Separator />

              {/* Dive.tech */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer @ Dive.tech</h3>
                  <p className="text-sm text-muted-foreground">April 2017 - October 2017 | Madrid, Spain</p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Improved/maintained movie/series detection algorithms (C++/OpenCV) and TV scheduling retrieval (Python).
                  </li>
                  <li>
                    Migrated services to AWS EC2 using Docker and Jenkins.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">IÉSEG School of Management</h3>
                <p>Master of Science in Business Analysis & Consulting (2018-2020)</p>
              </div>
              <div>
                <h3 className="font-semibold">Universidad Politécnica de Madrid</h3>
                <p>Master's degree in Artificial Intelligence (2017-2018)</p>
              </div>
              <div>
                <h3 className="font-semibold">University of Hertfordshire</h3>
                <p>Bachelor's degree in Computer Science (2016-2017)</p>
              </div>
              <div>
                <h3 className="font-semibold">Universidad Complutense de Madrid</h3>
                <p>Bachelor's degree in Computer Science, Theory of Computation & Artificial Intelligence (2013-2017)</p>
              </div>
            </CardContent>
          </Card>

          {/* Languages & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
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
                <CardTitle>Certifications & Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>First Certificate in English (FCE)</li>
                  <li>Sopra Steria Awards to the best Bachelor's Thesis</li>
                  <li>ETS Challenge 2018 (First Position)</li>
                  <li>Subjects finished with honors</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center text-sm text-muted-foreground pt-8">
            © 2023 Jorge Sánchez Cremades. All rights reserved.
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

export default App
