import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BarChart3, Database, Workflow, Brain } from "lucide-react";

const categories = [
  {
    name: "Data Visualization",
    icon: BarChart3,
    gradient: "from-cyan-500 to-blue-600",
    tools: ["Power BI", "Tableau", "Looker Studio", "Excel", "Seaborn", "Matplotlib","React-Vis", "D3.js"],
  },
  {
    name: "Databases & Warehousing",
    icon: Database,
    gradient: "from-emerald-500 to-teal-600",
    tools: [
      "SQL Server", "MySQL", "PostgreSQL", "Azure SQL", "BigQuery",
      "Redshift", "Snowflake",  "MS Fabric",
    ],
  },
  {
    name: "Data Engineering & Pipelines",
    icon: Workflow,
    gradient: "from-orange-500 to-rose-600",
    tools: [
      "Azure Data Factory", "Apache Spark", "dbt", "Apache Airflow",
      "Power Automate", "REST APIs",
    ],
  },
  {
    name: "Machine Learning & AI",
    icon: Brain,
    gradient: "from-violet-500 to-purple-600",
    tools: [
      "Pandas", "Azure ML", "Scikit-Learn",
      "TensorFlow", "PyTorch", "Keras","FastAPI"    ],
  },
];

const ToolsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prev = () => setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
  const next = () => setActiveIndex((prev) => (prev + 1) % categories.length);

  const current = categories[activeIndex];
  const Icon = current.icon;

  return (
    <section className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgb(2,6,23)_70%)]" />
      </div>

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            The Tools Powering
            <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Our Solutions
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Modern, scalable, enterprise-grade platforms behind our data engineering,
            analytics and automation solutions.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveIndex(idx)}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                    : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                <CatIcon className="w-4 h-4" />
                <span className="hidden sm:inline">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main showcase card */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Animated card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${current.gradient} rounded-3xl blur-xl opacity-20`} />
              
              {/* Card */}
              <div className="relative p-8 md:p-12 bg-gradient-to-br from-slate-900/90 to-slate-900/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl shadow-2xl">
                {/* Category header */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white text-center sm:text-left">
                    {current.name}
                  </h3>
                </div>

                {/* Tools grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {current.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: toolIndex * 0.05, duration: 0.3 }}
                      className="group relative"
                    >
                      <div className="relative px-4 py-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/80 cursor-default">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                        <span className="relative text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300 block text-center">
                          {tool}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress indicators */}
                <div className="flex justify-center gap-2 mt-10">
                  {categories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className="relative w-12 h-1 rounded-full overflow-hidden bg-slate-700"
                    >
                      {idx === activeIndex && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${categories[idx].gradient}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: isPaused ? 0 : 5, ease: "linear" }}
                          style={{ originX: 0 }}
                        />
                      )}
                      {idx < activeIndex && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${categories[idx].gradient}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;
