import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      title: "Fragmented Data",
      description: "Information silos prevent unified business insights",
    },
    {
      title: "Manual Reporting",
      description: "Time-consuming, error-prone Excel processes",
    },
    {
      title: "Delayed KPIs",
      description: "Lack of real-time insights causes slow reactions",
    },
    {
      title: "Inefficient Workflows",
      description: "Bottlenecks and missed opportunities",
    },
    {
      title: "No Standardization",
      description: "Difficulty measuring performance consistently",
    },
    {
      title: "Lack of Actionable Insights",
      description: "Unable to find insights to drive actions",
    },
  ];

  const solutions = [
    {
      title: "Unified Data Platform",
      description:
        "Consolidate all data into a single, accessible source for a holistic view.",
    },
    {
      title: "Automated Insights",
      description:
        "Streamline reporting to deliver timely, accurate information with zero manual effort.",
    },
    {
      title: "Real-Time Dashboards",
      description:
        "Instant access to KPIs and trends enabling proactive decision-making.",
    },
    {
      title: "Workflow Automation & Alerts",
      description:
        "Automate repetitive tasks and create smart triggers that notify teams when KPIs spike, drop, or cross thresholds.",
    },
    
    {
      title: "Data Quality & Governance",
      description:
        "Ensure clean, accurate, standardized data across systems to improve trust and consistency.",
    },
    {
      title: "Actionable Intelligence Layer",
      description:
        "Beyond dashboards — we deliver insights, alerts, and narratives your team can execute on.",
    },
    
    
  ];

  return (
    <section id="about" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        
        {/* Problem Section */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              The{" "}
              <span className="text-destructive">Problems</span> We Solve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most businesses struggle with scattered, slow, and unreliable data —
              making accurate and timely decision-making nearly impossible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className="border-destructive/20 hover:border-destructive/40 transition-colors duration-300"
              >
                <CardContent className="p-6 space-y-3">
                  <AlertCircle className="w-8 h-8 text-destructive" />
                  <h3 className="text-xl font-bold">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              The{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              We Deliver
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              DataPearls centralizes your data, automates reporting, and gives you
              real-time visibility into every aspect of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;
