import { motion } from "framer-motion";
import aboutImg from "@/assets/Digital presentation-amico (1).svg"; // replace with your image path

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-accent/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImg}
              alt="About DataPearls"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                DataPearls
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              DataPearls is your strategic BI and analytics partner — delivering
              real-time visibility, automated reporting, and enterprise-grade
              insights that empower leaders to make confident, data-driven
              decisions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in modern data platforms, dashboards, predictive models,
              and workflow automation built on top of SQL, Python, Power BI, Azure,
              and cloud data warehouses. Our solutions unify scattered data, reduce
              manual reporting, and unlock operational efficiency at scale.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Enterprise BI dashboards & KPI systems</li>
              <li>✔ Automated data pipelines & reporting workflows</li>
              <li>✔ Predictive analytics & ML-driven insights</li>
              <li>✔ Modern data stack: SQL, Python, Azure, Fabric, Redshift, BigQuery</li>
            </ul>

            <div>
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
