import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  className?: string;
}

const SectionHeading = ({ subtitle, title, className = "" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-8 ${className}`}
  >
    <p className="text-xs font-light text-coral uppercase tracking-[0.2em] mb-1">{subtitle}</p>
    <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight">{title}</h2>
    <div className="w-16 h-px bg-coral/40 mt-3" />
  </motion.div>
);

export default SectionHeading;
