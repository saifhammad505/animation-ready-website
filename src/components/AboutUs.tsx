import { BarChart3, Users, Target, Sparkles } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with data-driven insights that transform raw information into strategic advantages, enabling smarter decisions and measurable growth.",
    },
    {
      icon: Sparkles,
      title: "Our Vision",
      description: "To be the leading partner for organizations seeking to harness the full potential of their data through innovative analytics and beautiful, actionable dashboards.",
    },
    {
      icon: BarChart3,
      title: "Data Excellence",
      description: "We combine technical expertise with business acumen to deliver analytics solutions that are not just accurate, but also intuitive and impactful.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Every solution is tailored to your unique challenges. We don't just deliver dashboards—we deliver insights that drive your business forward.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            About DataPearls
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in transforming data into actionable insights
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Who We Are
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              DataPearls is a specialized data analytics and business intelligence consultancy dedicated to helping organizations unlock the full potential of their data. We transform complex datasets into clear, actionable insights through beautiful, interactive dashboards and comprehensive analytics solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With expertise spanning Power BI, Tableau, Looker Studio, and custom BI solutions, we serve clients across diverse industries—from retail and healthcare to finance and manufacturing. Our team combines technical excellence with deep business understanding to deliver solutions that don't just look good, but drive real business outcomes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're looking to build your first dashboard, integrate disparate data sources, or establish a comprehensive analytics infrastructure, DataPearls brings the expertise and dedication to make it happen.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Why Choose DataPearls?
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We don't just build dashboards—we build partnerships. Our commitment to understanding your business, combined with our technical expertise and dedication to excellence, ensures that every solution we deliver becomes a strategic asset for your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
