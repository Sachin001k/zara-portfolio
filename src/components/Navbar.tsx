import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Music", path: "/music" },
  { label: "Music Connect", path: "/music-connect" },
  { label: "Music & The Brain", path: "/music-and-brain" },
  { label: "Musings", path: "/musings" },
  { label: "Psychology Publications", path: "/psychology-publications" },
  { label: "Photos", path: "/photography" },
  { label: "Resume", path: "/resume" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/15"
      style={{
        background: "hsl(var(--background) / 0.85)",
        backdropFilter: "blur(20px) saturate(1.2)",
        WebkitBackdropFilter: "blur(20px) saturate(1.2)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl tracking-tight text-foreground hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Cafenty', cursive" }}
        >
          Zara Pereira
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <div key={item.path} className="flex items-center">
                {index > 0 && (
                  <span className="mx-1 text-olive/30 text-sm select-none">|</span>
                )}
                <Link
                  to={item.path}
                  className={`relative px-5 py-1.5 text-sm font-light tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "hsl(var(--olive) / 0.12)",
                        boxShadow: "inset 0 1px 0 hsl(var(--cream) / 0.4)",
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </div>
            );
          })}

          <Link
            to="/"
            className={`ml-4 px-5 py-1.5 text-sm font-light tracking-wide rounded-full transition-all duration-200 ${
              location.pathname === "/"
                ? "bg-olive text-primary-foreground"
                : "bg-olive/80 text-primary-foreground hover:bg-olive"
            }`}
            style={{
              boxShadow: "0 2px 8px hsl(var(--olive) / 0.25)",
            }}
          >
            About Me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border/15"
            style={{
              background: "hsl(var(--background) / 0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 px-4 rounded-lg text-sm font-light transition-colors ${
                    location.pathname === item.path
                      ? "bg-olive/15 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="py-2 px-4 rounded-full text-sm font-light bg-olive text-primary-foreground mt-2 text-center"
                style={{ boxShadow: "0 2px 8px hsl(var(--olive) / 0.25)" }}
              >
                About Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
