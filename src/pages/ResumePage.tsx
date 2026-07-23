import { motion } from "framer-motion";
import { useState } from "react";
import MarqueeText from "@/components/MarqueeText";
import { ChevronDown, Heart, Briefcase, Share2, FileText, Award, Users } from "lucide-react";

interface ResumeSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  accent: string;
  items: { title: string; subtitle: string; description: string }[];
}

const resumeSections: ResumeSection[] = [
  {
    id: "wellness-taskforce",
    icon: <Heart size={16} />,
    title: "Wellness Taskforce",
    accent: "olive",
    items: [
      { title: "School Wellness Taskforce Member", subtitle: "Active Contributor", description: "Contributing to school-wide wellness initiatives, policy development, and student mental health programs." },
      { title: "Peer Support Programs", subtitle: "Wellness Advocate", description: "Organizing and facilitating peer support sessions and wellness awareness campaigns." },
    ],
  },
  {
    id: "nordoff-robbins",
    icon: <Users size={16} />,
    title: "Nordoff Robbins",
    accent: "coral",
    items: [
      { title: "Nordoff Robbins Music Therapy Training", subtitle: "Certified Practitioner", description: "Completed training in the Nordoff Robbins approach to music therapy, focusing on creative music-making as a therapeutic tool." },
      { title: "Applied Music Therapy Sessions", subtitle: "Practical Experience", description: "Conducted guided music therapy sessions with diverse groups, applying Nordoff Robbins techniques." },
    ],
  },
  {
    id: "work-experience",
    icon: <Briefcase size={16} />,
    title: "Work Experience",
    accent: "olive",
    items: [
      { title: "Music Wellness Curriculum Developer", subtitle: "Founder & Lead Educator", description: "Designed and delivered a comprehensive music wellness curriculum reaching 50+ students across multiple schools." },
      { title: "Music Workshop Facilitator", subtitle: "Community Educator", description: "Led interactive music workshops for students and teachers, integrating wellness principles into creative expression." },
    ],
  },
  {
    id: "share-the-music",
    icon: <Share2 size={16} />,
    title: "Share the Music",
    accent: "coral",
    items: [
      { title: "Share the Music CSR Initiative", subtitle: "Founder & Organizer", description: "Led music-based community service projects bringing instruments and music education to underserved communities." },
      { title: "AMIS Choir & Performances", subtitle: "Vocalist & Performer", description: "Participated in international music festivals, collaborative performances, and AMIS choir events." },
    ],
  },
  {
    id: "research-paper",
    icon: <FileText size={16} />,
    title: "Research Paper",
    accent: "olive",
    items: [
      { title: "Music & Wellness Research Paper", subtitle: "Academic Publication", description: "Published research exploring the intersection of music education and student well-being, with data-driven findings." },
      { title: "CREST Gold Award", subtitle: "Research Excellence", description: "Independent research project in music and wellness, awarded CREST Gold for exceptional scientific inquiry." },
    ],
  },
  {
    id: "grades",
    icon: <Award size={16} />,
    title: "Grades & Certifications",
    accent: "coral",
    items: [
      { title: "Trinity College London", subtitle: "Music Performance & Theory", description: "Achieved graded examinations in music performance and theory through Trinity College London." },
      { title: "IB Diploma Programme", subtitle: "International Baccalaureate", description: "Pursuing a well-rounded IB education with focus on music, arts, and sciences." },
    ],
  },
];

const ResumePage = () => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(["wellness-taskforce"]));

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="page-scroll relative">
      {/* Background */}
      <div className="absolute inset-0 grid-paper-bg" />
      <div
        className="glow-orb"
        style={{ width: 280, height: 280, top: "8%", right: "10%", background: "radial-gradient(circle, hsl(var(--olive) / 0.1), transparent 70%)" }}
      />
      <div
        className="glow-orb"
        style={{ width: 220, height: 220, bottom: "15%", left: "5%", background: "radial-gradient(circle, hsl(var(--coral) / 0.08), transparent 70%)", animationDelay: "2s" }}
      />

      <div className="relative z-10">
        <MarqueeText text="WELLNESS · NORDOFF ROBBINS · EXPERIENCE · SHARE THE MUSIC · RESEARCH · GRADES" />

        <div className="px-6 pb-12">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-light text-coral uppercase tracking-[0.2em] mb-1">Zara's</p>
              <h2 className="text-3xl md:text-4xl font-extralight text-foreground tracking-tight">Resume</h2>
              <motion.div
                className="w-16 h-px mt-3"
                style={{ background: "linear-gradient(90deg, hsl(var(--coral) / 0.5), transparent)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </motion.div>

            <div className="space-y-4">
              {resumeSections.map((section, i) => {
                const isExpanded = expandedIds.has(section.id);
                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div
                      className="glass-card overflow-hidden transition-all duration-300"
                      style={{
                        boxShadow: isExpanded
                          ? "0 12px 40px hsl(var(--shadow-color) / 0.1), inset 0 1px 0 hsl(var(--cream) / 0.5)"
                          : "0 4px 20px hsl(var(--shadow-color) / 0.05), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                      }}
                    >
                      <button
                        className="w-full flex items-center justify-between p-5 text-left group"
                        onClick={() => toggle(section.id)}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-primary-foreground"
                            style={{
                              background: section.accent === "olive"
                                ? "linear-gradient(135deg, hsl(var(--olive)), hsl(var(--olive-dark)))"
                                : "linear-gradient(135deg, hsl(var(--coral)), hsl(var(--brown-red)))",
                              boxShadow: section.accent === "olive"
                                ? "0 2px 8px hsl(var(--olive) / 0.3)"
                                : "0 2px 8px hsl(var(--coral) / 0.3)",
                            }}
                          >
                            {section.icon}
                          </span>
                          <h3 className="text-sm font-normal text-foreground group-hover:text-foreground/80 transition-colors">{section.title}</h3>
                          <span className="text-[10px] font-light text-muted-foreground bg-background/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
                            {section.items.length}
                          </span>
                        </div>
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown size={14} className="text-muted-foreground" />
                        </motion.div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 space-y-3">
                          {section.items.map((item, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                              transition={{ delay: j * 0.1, duration: 0.3 }}
                              className="p-4 rounded-xl bg-background/50 border border-border/20 backdrop-blur-sm"
                            >
                              <h4 className="font-normal text-foreground text-xs">{item.title}</h4>
                              <p
                                className="text-[10px] font-light mt-0.5"
                                style={{
                                  background: section.accent === "olive"
                                    ? "linear-gradient(135deg, hsl(var(--olive)), hsl(var(--olive-dark)))"
                                    : "linear-gradient(135deg, hsl(var(--coral)), hsl(var(--brown-red)))",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                }}
                              >
                                {item.subtitle}
                              </p>
                              <p className="text-xs font-light text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
