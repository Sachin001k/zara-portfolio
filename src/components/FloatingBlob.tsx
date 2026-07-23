import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface FloatingBlobProps {
  color: string;
  size: number;
  x: string;
  y: string;
  label: string;
  icon: string;
  path: string;
  delay?: number;
}

const FloatingBlob = ({ color, size, x, y, label, icon, path, delay = 0 }: FloatingBlobProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.6, type: "spring", bounce: 0.4 }}
      className="absolute cursor-pointer group"
      style={{ left: x, top: y }}
      onClick={() => navigate(path)}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className="rounded-full flex flex-col items-center justify-center transition-shadow duration-300 group-hover:shadow-xl relative"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      >
        {/* Ripple effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: `2px solid ${color}` }}
          initial={{ scale: 1, opacity: 0 }}
          whileHover={{ scale: 1.4, opacity: 0.3 }}
          transition={{ duration: 0.5 }}
        />
        <span className="text-3xl md:text-4xl mb-1">{icon}</span>
        <span className="text-xs md:text-sm font-medium text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

export default FloatingBlob;
