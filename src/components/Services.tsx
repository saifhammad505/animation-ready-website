import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Zap,
  Brain,
  LineChart,
  Workflow,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "BI-as-a-Service",
      description:
        "Your dedicated BI department, owning the full BI lifecycle so your team can stay focused on execution and growth.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/biaas",
    },
    {
      icon: LineChart,
      title: "Data Analytics",
      description:
        "Turn raw data into actionable insights. Sales analysis, customer segmentation, financial forecasting, and performance optimization.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/data-analytics",
    },
    {
      icon: Database,
      title: "BI Dashboards",
      description:
        "Custom BI dashboards with real-time visibility. Executive-level reporting, operational KPIs, and actionable insights.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/bi-dashboards",
    },
    {
      icon: Zap,
      title: "Data Engineering",
      description:
        "Build modern, automated data architectures. SQL warehouses (cloud + on-prem), ETL pipelines, API integrations and more.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/data-engineering",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Automate reporting and approval workflows. Python, Power Automate, and automated report distribution.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/workflow-automation",
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description:
        "Move from reactive to proactive with ML models. Employee churn prediction, sales forecasting, fraud detection, and risk analysis.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/predictive-analytics",
    },
  ];

  return (
    <section id="services" className="py-24 bg-accent/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive suite of services to transform your data landscape and
            empower intelligent business decisions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {services.map((service, index) => {
    const Icon = service.icon;
    return (
      <Link key={index} to={service.link}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.5 }}
          whileHover={{ y: -8 }}
        >
          <Card
            className="
              relative 
              group 
              cursor-pointer 
              h-full 
              flex flex-col 
              backdrop-blur 
              bg-white/60 dark:bg-black/20 
              border border-border/40 
              hover:border-primary/40 
              hover:shadow-xl hover:shadow-primary/10 
              transition-all duration-300 
              rounded-2xl
            "
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/30 rounded-t-2xl"></div>

            <CardContent className="p-8 flex flex-col gap-4 flex-grow">
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
              >
                <Icon className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-2xl font-bold">{service.title}</h3>

              <p className="text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>

            </CardContent>
          </Card>
        </motion.div>
      </Link>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default Services;
