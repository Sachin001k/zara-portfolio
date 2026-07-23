import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mail, MapPin, Camera, BookOpen, Music2, FileText, Headphones } from "lucide-react";
import { siteContact } from "@/lib/site";

const FloatingParticles = () => (
  <>
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 4 + Math.random() * 6,
          height: 4 + Math.random() * 6,
          left: `${10 + Math.random() * 80}%`,
          top: `${10 + Math.random() * 80}%`,
          background: i % 3 === 0
            ? "hsl(var(--coral) / 0.2)"
            : i % 3 === 1
            ? "hsl(var(--olive) / 0.15)"
            : "hsl(var(--blush))",
        }}
        animate={{
          y: [0, -30 - Math.random() * 40, 0],
          x: [0, (Math.random() - 0.5) * 20, 0],
          opacity: [0.1, 0.5, 0.1],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 5 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut",
        }}
      />
    ))}
  </>
);

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Grid paper background */}
      <div className="absolute inset-0 grid-paper-bg" />

      {/* Gradient orbs for depth */}
      <div
        className="glow-orb"
        style={{
          width: 300,
          height: 300,
          top: "-5%",
          right: "10%",
          background: "radial-gradient(circle, hsl(var(--olive) / 0.15), transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 250,
          height: 250,
          bottom: "5%",
          left: "5%",
          background: "radial-gradient(circle, hsl(var(--coral) / 0.1), transparent 70%)",
          animationDelay: "3s",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 200,
          height: 200,
          top: "40%",
          left: "50%",
          background: "radial-gradient(circle, hsl(var(--blush)), transparent 70%)",
          animationDelay: "1.5s",
          opacity: 0.15,
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* TOP wave curtains — more layers for depth */}
      <svg className="absolute top-0 left-0 w-full h-[220px] z-[2]" viewBox="0 0 1440 220" preserveAspectRatio="none" fill="none">
        <path d="M-20,0 C100,60 250,30 400,55 C550,80 700,25 850,50 C1000,75 1150,20 1300,45 C1380,55 1420,40 1460,48" stroke="hsl(var(--blush))" strokeWidth="2.5" fill="none" opacity="0.45" />
        <path d="M-20,0 C80,70 230,40 380,65 C530,90 680,35 830,60 C980,85 1130,30 1280,55 C1370,65 1420,50 1460,58" stroke="hsl(210 40% 70%)" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M-20,0 C120,50 270,20 420,45 C570,70 720,15 870,40 C1020,65 1170,10 1320,35 C1390,45 1430,30 1460,38" stroke="hsl(25 40% 75%)" strokeWidth="2" fill="none" opacity="0.35" />
        <path d="M-20,0 C60,80 210,50 360,75 C510,100 660,45 810,70 C960,95 1110,40 1260,65 C1360,75 1420,60 1460,68" stroke="hsl(var(--olive))" strokeWidth="1.5" fill="none" opacity="0.2" />
        <path d="M-20,0 C140,40 290,15 440,38 C590,60 740,10 890,35 C1040,58 1190,5 1340,28 C1400,38 1440,25 1460,32" stroke="hsl(var(--coral) / 0.15)" strokeWidth="1" fill="none" opacity="0.25" />
      </svg>

      {/* BOTTOM wave curtains */}
      <svg className="absolute bottom-0 left-0 w-full h-[140px] z-[2]" viewBox="0 0 1440 140" preserveAspectRatio="none" fill="none">
        <path d="M-20,140 C100,95 250,115 400,100 C550,85 700,110 850,95 C1000,80 1150,105 1300,90 C1380,83 1420,93 1460,87" stroke="hsl(var(--blush))" strokeWidth="2" fill="none" opacity="0.35" />
        <path d="M-20,140 C80,85 230,105 380,90 C530,75 680,100 830,85 C980,70 1130,95 1280,80 C1370,73 1420,83 1460,77" stroke="hsl(210 40% 70%)" strokeWidth="1.5" fill="none" opacity="0.25" />
        <path d="M-20,140 C60,100 210,120 360,105 C510,90 660,115 810,100 C960,85 1110,110 1260,95 C1360,88 1420,98 1460,92" stroke="hsl(var(--olive) / 0.2)" strokeWidth="1" fill="none" opacity="0.2" />
      </svg>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">

        {/* Central glassmorphic card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass-card px-8 py-8 md:px-12 md:py-10"
          style={{
            boxShadow:
              "0 8px 32px hsl(var(--shadow-color) / 0.08), 0 20px 60px hsl(var(--shadow-color) / 0.04), inset 0 1px 0 hsl(var(--cream) / 0.6)",
          }}
        >
          {/* === PHOTOGRAPHY icon - TOP RIGHT === */}
          <div className="absolute -top-10 -right-8 md:-top-12 md:-right-12 z-20">
            <motion.button
              initial={{ opacity: 0, scale: 0.6, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.55, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.18, y: -8, rotate: -8, boxShadow: "0 12px 35px hsl(var(--shadow-color) / 0.15)" }}
              whileTap={{ scale: 0.92 }}
              onClick={() => navigate("/photography")}
              className="cloud-btn w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center gap-1.5 p-3"
            >
              <Camera size={36} strokeWidth={1.2} className="text-foreground/70 drop-shadow-sm" />
              <span className="text-[10px] font-light tracking-wider text-muted-foreground uppercase">Photos</span>
            </motion.button>
          </div>

          {/* === MUSIC icon - TOP LEFT === */}
          <div className="absolute -top-10 -left-8 md:-top-12 md:-left-12 z-20">
            <motion.button
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.18, y: -8, rotate: 8, boxShadow: "0 12px 35px hsl(var(--shadow-color) / 0.15)" }}
              whileTap={{ scale: 0.92 }}
              onClick={() => navigate("/music")}
              className="cloud-btn w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center gap-1.5 p-3"
            >
              <Music2 size={36} strokeWidth={1.2} className="text-foreground/70 drop-shadow-sm" />
              <span className="text-[10px] font-light tracking-wider text-muted-foreground uppercase">Music</span>
            </motion.button>
          </div>

          {/* === Inner layout === */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* LEFT: Big profile photo frame */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col items-center gap-3 shrink-0"
              style={{ perspective: "800px" }}
            >
              <div
                className="w-56 h-68 md:w-64 md:h-80 rounded-xl border-2 border-border/40 bg-muted/15 flex items-center justify-center overflow-hidden"
                style={{
                  boxShadow:
                    "0 8px 30px hsl(var(--shadow-color) / 0.1), 0 20px 0 -12px hsl(var(--card)), 0 20px 1px -11px hsl(var(--border) / 0.3)",
                }}
              >
                <img
                  src={siteContact.profileImage}
                  alt="Zara Pereira"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Contact info */}
              <div className="flex flex-col items-center gap-1.5 mt-1">
                <a
                  href={`mailto:${siteContact.email}`}
                  className="flex items-center gap-1.5 text-xs font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={12} /> {siteContact.email}
                </a>
                <span className="flex items-center gap-1.5 text-xs font-light text-muted-foreground">
                  <MapPin size={12} /> {siteContact.location}
                </span>
              </div>
            </motion.div>

            {/* RIGHT: Name + bio text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col items-start"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-2"
                style={{ fontFamily: "'Cafenty', cursive" }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Zara Pereira
              </motion.h1>

              <motion.p
                className="text-sm md:text-base font-light text-foreground/80 mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {siteContact.tagline}
              </motion.p>

              {/* Animated wavy lines */}
              <motion.svg
                width="220" height="28" viewBox="0 0 220 28" className="mb-4"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{ transformOrigin: "left" }}
              >
                <path d="M5,8 Q30,2 55,8 Q80,14 105,8 Q130,2 155,8 Q180,14 205,8" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" opacity="0.3" />
                <path d="M5,16 Q30,10 55,16 Q80,22 105,16 Q130,10 155,16 Q180,22 205,16" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" opacity="0.2" />
              </motion.svg>

              {/* About text */}
              <motion.p
                className="text-sm font-light text-muted-foreground leading-relaxed max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                {siteContact.bio}
              </motion.p>
            </motion.div>
          </div>

          {/* === WRITING icon - LEFT side === */}
          <div className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              initial={{ opacity: 0, x: -30, scale: 0.6 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.75, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.18, y: -8, rotate: 8, boxShadow: "0 12px 35px hsl(var(--shadow-color) / 0.15)" }}
              whileTap={{ scale: 0.92 }}
              onClick={() => navigate("/psychology-publications")}
              className="cloud-btn w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center gap-1.5 p-3"
            >
              <BookOpen size={36} strokeWidth={1.2} className="text-foreground/70 drop-shadow-sm" />
              <span className="text-[10px] font-light tracking-wider text-muted-foreground uppercase">Publications</span>
            </motion.button>
          </div>

          {/* === RESUME icon - RIGHT side === */}
          <div className="absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              initial={{ opacity: 0, x: 30, scale: 0.6 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.18, y: -8, rotate: -8, boxShadow: "0 12px 35px hsl(var(--shadow-color) / 0.15)" }}
              whileTap={{ scale: 0.92 }}
              onClick={() => navigate("/resume")}
              className="cloud-btn w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center gap-1.5 p-3"
            >
              <FileText size={36} strokeWidth={1.2} className="text-foreground/70 drop-shadow-sm" />
              <span className="text-[10px] font-light tracking-wider text-muted-foreground uppercase">Resume</span>
            </motion.button>
          </div>
        </motion.div>

        {/* === MUSIC CONNECT icon - BOTTOM CENTER === */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.9, type: "spring", bounce: 0.3 }}
          className="flex flex-col items-center mt-[-1rem] z-20 relative"
        >
          <motion.button
            whileHover={{ scale: 1.18, y: -8, rotate: 5, boxShadow: "0 12px 35px hsl(var(--shadow-color) / 0.15)" }}
            whileTap={{ scale: 0.92 }}
            onClick={() => navigate("/music-connect")}
            className="cloud-btn w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center p-3 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-30 transition-opacity" style={{ backgroundImage: "url('/media/image5.jpg')" }} />
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <Headphones size={36} strokeWidth={1.2} className="text-foreground/80 drop-shadow-sm" />
              <span className="text-[10px] font-medium tracking-wider text-foreground uppercase text-center leading-tight bg-background/50 px-2 py-0.5 rounded backdrop-blur-sm">
                Music Connect
              </span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
