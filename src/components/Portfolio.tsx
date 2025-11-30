import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Images (update paths)
import opsImg from "@/assets/portfolio-ops.png";
import workforceImg from "@/assets/portfolio-employee-kpi.png";
import salesImg from "@/assets/portfolio-sales.png";
import cqImg from "@/assets/portfolio-call-quality.png";
import recruitImg from "@/assets/portfolio-resource.png";
import serviceImg from "@/assets/portfolio-service.png";
import reportingHubImg from "@/assets/portfolio-reportinghub.png";
import resourceImg from "@/assets/portfolio-resource.png";
import engagementImg from "@/assets/portfolio-engagement.png";
import support3cxImg from "@/assets/portfolio-3cx.png";

const projects = [
  {
    domain: "Operations Analytics",
    title: "Real-Time Operations Dashboard",
    summary:
      "A multi-layer operational intelligence dashboard offering real-time visibility into service performance, turnaround times, booking confirmations, and operational bottlenecks.",
    outcome: "Reduced manual reporting time by 40%",
    impact: "Real-time KPI visibility for operational and leadership teams",
    features: [
      "End-to-end operational KPI monitoring",
      "Real-time fill rate, conversion & TAT tracking",
      "Segmentation by region, team & customer",
      "Automated performance insights",
    ],
    image: opsImg,
    link: "/case-study/operations-dashboard",
  },

  {
  domain: "Customer Support Analytics",
  title: "Automated 3CX Reporting & Support Performance Dashboard",
  summary:
    "An automated analytics solution that ingests 3CX call logs from CSV files into SQL Server and visualizes customer support performance through a comprehensive Power BI dashboard.",
  outcome: "100% automation of reporting workflows",
  impact: "Real-time visibility into call quality, agent productivity, and support performance",
  features: [
    "CSV-to-SQL automated ingestion pipeline",
    "Daily 3CX call log integration",
    "Inbound & outbound performance insights",
    "Call quality scores & target tracking",
    "Gap-time analysis & productivity trends",
  ],
  image: support3cxImg, // import this image
  link: "/case-study/3cx-automation",
},


  {
    domain: "Workforce Analytics",
    title: "Workforce Performance Intelligence",
    summary:
      "A comprehensive KPI performance system enabling standardized staff evaluations, performance tracking, and competency trend analysis across departments.",
    outcome: "Standardized performance measurement across teams",
    impact: "Improved leadership decision-making visibility",
    features: [
      "KPI scoring engine tied to targets",
      "Competency & behaviour evaluation",
      "Attendance & punctuality intelligence",
      "Commission calculation automation",
    ],
    image: workforceImg,
    link: "/case-study/workforce-performance",
  },
  {
    domain: "Sales & Revenue Intelligence",
    title: "Sales & Profitability Dashboard",
    summary:
      "A real-time sales visibility and profitability solution with revenue trends, client contribution, and margin analytics across multiple categories.",
    outcome: "Improved forecasting accuracy & profitability visibility",
    impact: "Unified real-time sales analytics for decision-makers",
    features: [
      "Revenue & margin tracking",
      "Client & product profitability",
      "MoM trend insights",
      "Cost, price & margin modelling",
    ],
    image: salesImg,
    link: "/case-study/sales-analytics",
  },
  {
    domain: "Customer Experience Analytics",
    title: "Call Quality Analytics Platform",
    summary:
      "An end-to-end quality monitoring system integrating digital evaluation forms, SQL-based scoring, and real-time quality dashboards.",
    outcome: "Significant improvement in call quality scores",
    impact: "Enabled targeted training & transparent evaluations",
    features: [
      "Digital evaluation forms",
      "Quality scoring engine (SQL)",
      "Strong/weak area detection",
      "Automated training triggers",
    ],
    image: cqImg,
    link: "/case-study/call-quality",
  },
  {
    domain: "Recruitment Intelligence",
    title: "Recruitment Pipeline & Onboarding Dashboard",
    summary:
      "A full-funnel recruitment intelligence system mapping candidate journey, identifying bottlenecks, and accelerating hiring throughput.",
    outcome: "Improved hiring turnaround time (TAT)",
    impact: "Daily operational usage across recruitment functions",
    features: [
      "Stage-level pipeline visibility",
      "Onboarding compliance tracking",
      "TAT measurement by stage",
      "Sourcing insights by region/language",
    ],
    image: recruitImg,
    link: "/case-study/recruitment-pipeline",
  },
  {
    domain: "Service Delivery Analytics",
    title: "Service Performance Dashboard",
    summary:
      "A performance analytics solution measuring fill rates, turnaround times, and booking confirmations across multiple service categories.",
    outcome: "Faster identification of service issues",
    impact: "Improved operational consistency & satisfaction",
    features: [
      "Fill rate, conversion & confirmation KPIs",
      "Language & regional segmentation",
      "Account manager performance analytics",
      "Exception reporting",
    ],
    image: serviceImg,
    link: "/case-study/service-performance",
  },
  {
    domain: "Enterprise BI Platforms",
    title: "Enterprise Reporting Hub",
    summary:
      "A centralized reporting portal enabling unlimited internal/external users to access dashboards securely without BI licensing costs.",
    outcome: "£12,000 annual savings on BI licenses",
    impact: "80% increase in organizational data accessibility",
    features: [
      "Centralized analytics gateway",
      "Role-based access control",
      "External client portal",
      "Automated daily refresh",
    ],
    image: reportingHubImg,
    link: "/case-study/reporting-hub",
  },
 
  {
    domain: "Engagement & Feedback Analytics",
    title: "Engagement & Satisfaction Dashboard",
    summary:
      "A satisfaction and NPS intelligence platform identifying drivers of engagement and trends across demographic segments.",
    outcome: "Better visibility into engagement drivers",
    impact: "Enabled HR to design stronger retention strategies",
    features: [
      "NPS scoring & segmentation",
      "Satisfaction trends",
      "Age & tenure analysis",
      "Correlation & driver insights",
    ],
    image: engagementImg,
    link: "/case-study/engagement-analytics",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6 space-y-16">

        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore premium analytics solutions designed to improve visibility, performance, and decision-making across organizations.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((p, i) => (
            <a
              href={p.link}
              key={i}
              className="group block"
            >
              <Card className="relative overflow-hidden rounded-xl border border-border/50 hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  
                  {/* Left Image Section */}
                  <div className="relative h-72 md:h-full">
                    <img
                      src={p.image}
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-60 group-hover:opacity-80 transition-all duration-300 blur-sm"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="p-8 space-y-5 bg-background/80 backdrop-blur">
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                      {p.domain}
                    </span>

                    <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {p.summary}
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div>
                        <p className="text-primary font-semibold">Outcome</p>
                        <p className="text-muted-foreground">{p.outcome}</p>
                      </div>
                      <div>
                        <p className="text-primary font-semibold">Impact</p>
                        <p className="text-muted-foreground">{p.impact}</p>
                      </div>
                    </div>

                    <ul className="space-y-1 text-muted-foreground">
                      {p.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 pt-2 text-primary font-semibold">
                      View Case Study <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
