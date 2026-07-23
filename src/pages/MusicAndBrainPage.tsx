import { motion } from "framer-motion";
import { BrainCircuit, BookOpen, ExternalLink, Link as LinkIcon, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MusicAndBrainPage = () => {
  return (
    <div className="page-scroll relative min-h-screen">
      <div className="absolute inset-0 grid-paper-bg" />
      <div
        className="glow-orb"
        style={{
          width: 320,
          height: 320,
          top: "10%",
          left: "5%",
          background: "radial-gradient(circle, hsl(var(--olive) / 0.12), transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 250,
          height: 250,
          bottom: "15%",
          right: "5%",
          background: "radial-gradient(circle, hsl(var(--coral) / 0.08), transparent 70%)",
          animationDelay: "1.5s",
        }}
      />

      <div className="relative z-10 px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BrainCircuit size={32} strokeWidth={1.2} className="text-olive opacity-80" />
            </div>
            <h1
              className="text-4xl md:text-6xl font-light text-foreground mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
            >
              Music and the Brain
            </h1>
            <motion.div
              className="w-24 h-px mx-auto mt-6"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--olive) / 0.5), transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          <div className="space-y-12">
            {/* Intro Section */}
            <motion.section
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={sectionVariants}
              className="glass-card p-8 md:p-10 rounded-2xl"
              style={{
                boxShadow:
                  "0 8px 32px hsl(var(--shadow-color) / 0.06), inset 0 1px 0 hsl(var(--cream) / 0.5)",
              }}
            >
              <p className="text-base md:text-lg font-light text-foreground leading-relaxed">
                Rituals and traditions starting from our first cry to lullabies, family songs and traditions are often unknowingly rooted in science. Music was sung to me from birth, with the Swahili love song Malaika written by Adam Salim greeting me in hospital by my Kenyan-born grandparents. Since that day, music has infused every step of my life and now the science of how it impacts us as humans has complemented this journey.
              </p>
            </motion.section>

            {/* My published academic writing */}
            <motion.section
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={sectionVariants}
              className="space-y-4"
            >
              <h2 className="text-2xl font-light text-foreground flex items-center gap-2">
                <BookOpen size={20} className="text-olive" />
                My published academic writing
              </h2>
              <div className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl p-6 group transition-all hover:bg-card/90">
                <p className="text-sm font-light text-muted-foreground mb-4">
                  Explore my articles and research discussing the impact of music on wellbeing, emotional regulation, and neurodiversity.
                </p>
                <Link
                  to="/psychology-publications"
                  className="inline-flex items-center gap-2 text-xs font-medium text-white px-5 py-2 rounded-full"
                  style={{ background: "hsl(var(--olive))" }}
                >
                  View Publications <ExternalLink size={12} />
                </Link>
              </div>
            </motion.section>

            {/* Reading and research */}
            <motion.section
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={sectionVariants}
              className="space-y-4"
            >
              <h2 className="text-2xl font-light text-foreground flex items-center gap-2">
                <BrainCircuit size={20} className="text-coral" />
                Reading and research
              </h2>
              <div className="glass-card p-6 md:p-8 space-y-4">
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  I continually engage with current literature in neuroscience, developmental psychology, and music therapy to ensure that my curriculum and approach are grounded in evidence. This section is a working repository of ideas and frameworks that inform my practice.
                </p>
                
                {/* Example of what she might put here based on the docx tab 3 */}
                <div className="mt-6 space-y-3">
                  <h3 className="text-sm font-medium text-foreground">The Aim of Music Therapy</h3>
                  <ul className="space-y-2">
                    {[
                      "Reaching and maintaining developmental milestones.",
                      "Rehabilitation and recovery of cognitive, sensorimotor, and communication deficits due to neurologic injury or disease.",
                      "Emotional processing and expression.",
                      "Coping with stress and anxiety surrounding diagnosis and medical treatment.",
                      "Pain management and relaxation techniques.",
                      "Psychological wellbeing related to short- and long-term effects of medical diagnosis and hospital admission.",
                      "Maintaining a sense of 'normal' life, and creating positive, shared experiences for the whole family.",
                      "Boosting engagement with other therapies."
                    ].map((item, index) => (
                      <li key={index} className="text-xs font-light text-muted-foreground pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-coral/60">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[10px] text-muted-foreground/60 italic pt-2">
                    Source: GOSH NHS Case Studies on Music Therapy
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Recommended reading */}
            <motion.section
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={sectionVariants}
              className="space-y-4"
            >
              <h2 className="text-2xl font-light text-foreground flex items-center gap-2">
                <BookOpen size={20} className="text-olive" />
                Recommended reading
              </h2>
              <div className="glass-card p-6 md:p-8">
                <p className="text-sm font-light text-muted-foreground mb-4">
                  A curated list of books and papers that have deeply influenced my understanding of music and human development.
                </p>
                <div className="bg-muted/30 rounded-xl p-4 border border-border/20 text-center">
                  <span className="text-xs font-light text-muted-foreground italic">Reading list coming soon...</span>
                </div>
              </div>
            </motion.section>

            {/* Organisations I follow or have interacted with */}
            <motion.section
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={sectionVariants}
              className="space-y-4"
            >
              <h2 className="text-2xl font-light text-foreground flex items-center gap-2">
                <Heart size={20} className="text-coral" />
                Organisations I follow or have interacted with
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Nordoff-Robbins Centre", desc: "Specialist training and clinical observation in music therapy." },
                  { name: "Akanksha Foundation", desc: "Mentorship and voice coaching for students in progressive education." },
                  { name: "Aseema School", desc: "Engaging students with music wellness during high-stress exam seasons." },
                  { name: "Sage Eldercare", desc: "Implementing the Music Connect curriculum for eldercare residents." },
                  { name: "Heavers Day Care Services", desc: "Adapting curriculum for residents under the Alzheimer's Society." },
                  { name: "Young Minds", desc: "Leading UK charity fighting for children and young people's mental health." }
                ].map((org, i) => (
                  <div key={i} className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl p-5 hover:bg-card/90 transition-colors cursor-default group">
                    <h3 className="text-sm font-medium text-foreground flex items-center gap-1.5 mb-1.5">
                      <LinkIcon size={12} className="text-olive opacity-0 group-hover:opacity-100 transition-opacity" />
                      {org.name}
                    </h3>
                    <p className="text-[11px] font-light text-muted-foreground leading-relaxed">
                      {org.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicAndBrainPage;
