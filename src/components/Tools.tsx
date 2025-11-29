import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Server,
  Cloud,
  Brain,
  Code2,
  GitBranch,
  Workflow,
  Network,
  PhoneCall,
  Package,
} from "lucide-react";

const tools = [
  // BI & Visualization
  {
    name: "Power BI",
    category: "BI & Visualization",
    description:
      "Leading BI platform for interactive dashboards, data modeling, and enterprise reporting.",
    icon: BarChart3,
  },
  {
    name: "Tableau",
    category: "BI & Visualization",
    description:
      "Visual analytics platform for advanced dashboards and data storytelling.",
    icon: BarChart3,
  },
  {
    name: "Google Data Studio / Looker Studio",
    category: "BI & Visualization",
    description:
      "User-friendly dashboarding tool for accessible, shareable business insights.",
    icon: BarChart3,
  },
  {
    name: "Microsoft Excel",
    category: "BI & Visualization",
    description:
      "Essential spreadsheet tool for data analysis, modeling, and business reporting.",
    icon: BarChart3,
  },
  {
    name: "Reporting Hub",
    category: "BI & Visualization",
    description:
      "Centralized reporting layer providing unified access to dashboards and KPIs.",
    icon: BarChart3,
  },

  // Databases & Warehouses
  {
    name: "SQL Server",
    category: "Databases & Warehousing",
    description:
      "Robust relational database for secure data storage and analytics workloads.",
    icon: Database,
  },
  {
    name: "MySQL",
    category: "Databases & Warehousing",
    description:
      "Open-source RDMS for scalable and reliable structured data storage.",
    icon: Database,
  },
  {
    name: "PostgreSQL",
    category: "Databases & Warehousing",
    description:
      "Advanced open-source SQL database known for power, reliability, and extensibility.",
    icon: Database,
  },
  {
    name: "SQL Azure",
    category: "Databases & Warehousing",
    description:
      "Cloud-based SQL database optimized for performance, scale, and security.",
    icon: Cloud,
  },
  {
    name: "Amazon Redshift",
    category: "Databases & Warehousing",
    description:
      "Fully managed cloud data warehouse for fast querying and scalable analytics.",
    icon: Server,
  },
  {
    name: "Google BigQuery",
    category: "Databases & Warehousing",
    description:
      "Serverless, high-performance data warehouse for large-scale SQL analytics.",
    icon: Server,
  },
  {
    name: "Snowflake",
    category: "Databases & Warehousing",
    description:
      "Modern cloud data warehouse with elastic compute and secure data sharing.",
    icon: Server,
  },
  {
    name: "Apache Hive",
    category: "Databases & Warehousing",
    description:
      "Distributed warehouse system designed for querying and analyzing big data.",
    icon: Database,
  },
  {
    name: "MS Fabric",
    category: "Databases & Warehousing",
    description:
      "End-to-end analytics platform unifying data engineering, warehousing, and BI.",
    icon: Cloud,
  },
  {
    name: "Azure Synapse",
    category: "Databases & Warehousing",
    description:
      "Unified analytics service combining big data and data warehousing capabilities.",
    icon: Cloud,
  },
  {
    name: "MongoDB",
    category: "Databases & Warehousing",
    description:
      "Document-oriented NoSQL database for flexible, schema-less data storage.",
    icon: Database,
  },

  // Data Engineering & Pipelines
  {
    name: "Azure Data Factory",
    category: "Data Engineering & Pipelines",
    description:
      "Cloud ETL/ELT service for orchestrating and managing data pipelines.",
    icon: Workflow,
  },
  {
    name: "Apache Spark",
    category: "Data Engineering & Pipelines",
    description:
      "Distributed processing engine for large-scale data transformation and analytics.",
    icon: Workflow,
  },
  {
    name: "dbt",
    category: "Data Engineering & Pipelines",
    description:
      "Analytics engineering framework for versioned, testable SQL transformations.",
    icon: Code2,
  },
  {
    name: "Airflow",
    category: "Data Engineering & Pipelines",
    description:
      "Workflow orchestration platform for complex, scheduled data processes.",
    icon: Workflow,
  },
  {
    name: "3CX Call Logs & Telephony Data",
    category: "Data Engineering & Pipelines",
    description:
      "Integration of telephony data for call analytics, SLA tracking, and reporting.",
    icon: PhoneCall,
  },
  {
    name: "REST APIs",
    category: "Data Engineering & Pipelines",
    description:
      "API-based integrations to connect line-of-business systems and data sources.",
    icon: Network,
  },

  // Programming, Analytics & ML
  {
    name: "Python",
    category: "Programming & Analytics",
    description:
      "Core language for analytics, automation, data engineering, and ML pipelines.",
    icon: Code2,
  },
  {
    name: "R",
    category: "Programming & Analytics",
    description:
      "Statistical computing language used for advanced analytics and modeling.",
    icon: Code2,
  },
  {
    name: "Pandas",
    category: "Programming & Analytics",
    description:
      "Python library for powerful data manipulation, cleaning, and analysis.",
    icon: Code2,
  },
  {
    name: "NumPy",
    category: "Programming & Analytics",
    description:
      "Fundamental package for scientific computing and numerical operations in Python.",
    icon: Code2,
  },

  // ML & AI
  {
    name: "Scikit-Learn",
    category: "Machine Learning & AI",
    description:
      "ML library for classical models: regression, classification, clustering, and more.",
    icon: Brain,
  },
  {
    name: "TensorFlow",
    category: "Machine Learning & AI",
    description:
      "Deep learning framework for building and deploying production-ready models.",
    icon: Brain,
  },
  {
    name: "PyTorch",
    category: "Machine Learning & AI",
    description:
      "Flexible deep learning framework for research-grade and production models.",
    icon: Brain,
  },
  {
    name: "Keras",
    category: "Machine Learning & AI",
    description:
      "High-level neural network API for rapid experimentation and model building.",
    icon: Brain,
  },
  {
    name: "Azure ML",
    category: "Machine Learning & AI",
    description:
      "Cloud platform for building, training, and deploying machine learning solutions.",
    icon: Brain,
  },

  // Automation, DevOps & Collaboration
  {
    name: "Power Automate",
    category: "Automation & DevOps",
    description:
      "Workflow automation across apps, data, and approvals for business processes.",
    icon: Workflow,
  },
  {
    name: "Docker",
    category: "Automation & DevOps",
    description:
      "Containerization platform for consistent deployment of apps and services.",
    icon: Package,
  },
  {
    name: "Git / GitHub",
    category: "Automation & DevOps",
    description:
      "Version control and collaboration tooling for analytics, code, and automation.",
    icon: GitBranch,
  },
];

const Tools = () => {
  return (
    <section
      id="tools"
      className="py-24 bg-slate-950 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-sm font-semibold tracking-[0.25em] text-primary/70 uppercase">
            Powered by Industry-Leading Tools
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The Stack Behind Our BI, Analytics & Automation Solutions
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            We design and deliver solutions on top of modern, battle-tested
            technologies, integrating seamlessly with the tools your
            organization already trusts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02, duration: 0.4 }}
              >
                <Card className="h-full border border-slate-700/70 bg-slate-900/60 hover:bg-slate-900 hover:border-primary/60 transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-xs font-medium uppercase tracking-wide text-primary/70">
                        {tool.category}
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {tool.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
