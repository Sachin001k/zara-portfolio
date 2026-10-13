import { motion } from "framer-motion";
import { useState } from "react";
import MarqueeText from "@/components/MarqueeText";
import { Link } from "react-router-dom";
import { ChevronDown, Award, HeartHandshake, Stethoscope, GraduationCap, Mic2, PenLine } from "lucide-react";

interface ResumeItem {
  title: string;
  subtitle?: string;
  link?: { label: string; to: string };
  points?: string[];
}

interface ResumeSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  accent: string;
  items: ResumeItem[];
}

const resumeSections: ResumeSection[] = [
  {
    id: "awards-honors",
    icon: <Award size={16} />,
    title: "Awards & Honors",
    accent: "olive",
    items: [
      {
        title: "School Mission Awards",
        subtitle:
          "For Continuous Inquiry (2023-24); for Enhancing the Lives of Others (2022-25); for Courage & Optimism (2023-24)",
      },
      { title: "School Choir Award", subtitle: "(2021-22) (2023-24)" },
      {
        title: "School Subject Excellence Awards",
        subtitle: "Physics (2023-24), Biology (2024-25), English (2023-24) (2024-25)",
      },
      {
        title: "Student of the Course Award",
        subtitle: "Oxford Psychology Summer Course at University of Cambridge (July 2024)",
      },
    ],
  },
  {
    id: "music-wellness",
    icon: <HeartHandshake size={16} />,
    title: "Music Wellness Initiatives",
    accent: "coral",
    items: [
      {
        title: "Researcher, Effect of Music on Adolescent Mood",
        subtitle: "January 2026 - June 2026",
        points: [
          "Conducted a longitudinal, quasi-experimental study examining the relationship between structured musical engagement and adolescent mood among 30 participants, using the Moods and Feelings Questionnaire (MFQ) and statistical analysis including repeated-measures ANOVA and paired-samples t-tests.",
          "Found a statistically significant decline in MFQ scores from 9.57 to 2.07 (p < .001), with 83% of participants showing improvement across five sessions.",
          "Accepted for publication in the Scopus-indexed journal Adolescência & Saúde and presented at the 4th Global Conference on Psychology. CREST Gold Award by British Science Association (October 2026)",
        ],
      },
      {
        title: "Founder, Music Connect",
        subtitle: "June 2025 - Present",
        link: { label: "www.zaramusicconnect.com/music-connect", to: "/music-connect" },
        points: [
          "Founded an open-access music wellness curriculum inspired by Nordoff-Robbins approaches, using structured musical activities to support Social and Emotional Learning (SEL) among children and adolescents.",
          "Developed the curriculum into an accessible resource for educators and caregivers, securing downloads and endorsements from clinical psychologists and music therapists.",
          "Expanded Music Connect through schools, NGOs, and organizational collaborations, reaching 6,000+ students across India, the UK, and the US. Received national media coverage.",
          "Trained 182 educators, instructors, and caregivers to independently deliver music wellness and SEL sessions, creating a scalable train-the-trainer model for the curriculum.",
          "Selected as the only high school student trainer for the American School of Bombay’s Academy, delivering educator training on music-based approaches to student well-being.",
        ],
      },
      {
        title: "Facilitator, Heal the Healers",
        subtitle: "August 2026 - Present",
        points: [
          "Bringing a music-based wellness intervention for caregivers to Mumbai, working alongside Dr. Farah Husain, Senior Anaesthesiologist and music therapist certified by the Indian Association of Music Therapists.",
          "Facilitating a series of music-based wellness sessions designed to support the emotional well-being of caregivers, reaching 100+ caregivers to date.",
          "Featured in The Times of India – Newspaper in Education (NIE) for her work.",
        ],
      },
    ],
  },
  {
    id: "music-therapy",
    icon: <Stethoscope size={16} />,
    title: "Music Therapy Training & Professional Experience",
    accent: "olive",
    items: [
      {
        title: "Trainee, Nordoff-Robbins Center for Music Therapy at NYU Steinhardt",
        subtitle: "July 2025, July 2026",
        points: [
          "Completed the Center’s online high school music therapy program, exploring Nordoff-Robbins approaches through interactive sessions, therapeutic exercises, and music-making.",
          "Selected as the only high school student invited to an in-person, graduate-level training course, learning alongside graduate students and practitioners.",
          "Participated in hands-on workshops, therapeutic exercises, group facilitation, and collaborative music-making; received the Managing Director’s appreciation for contributions to group exercises and music-making.",
        ],
      },
      {
        title: "Trainee, HopeStone Interventions – Education Center for Children with Special Needs",
        subtitle: "Oct 2024 - May 2025",
        points: [
          "Trained weekly under Sara Ellen D’Souza, Music Therapist and Special Educator, initially observing and assisting individual music therapy sessions for 3 children with neurodevelopmental disorders.",
          "Progressed to facilitating individual sessions, using structured music-based activities to support communication, turn-taking, and developmental skills.",
          "Tracked progress through parent-guided feedback, identifying improvements in skills and behaviors observed in the children’s day-to-day lives.",
        ],
      },
      {
        title: "Trainee & Facilitator, The Music Circle",
        subtitle: "September 2024",
        points: [
          "Training under Priyanka Seth Pandit, founder of The Music Circle and a Music Together® Master Teacher, observing approaches that use music to support children’s social and emotional development.",
          "Facilitating selected Music Connect activities with children while gaining hands-on exposure to music-based teaching, group engagement, and SEL practices.",
        ],
      },
      {
        title: "Student, Music Therapy Principles at Berklee College of Music",
        subtitle: "June 2025",
        points: [
          "Completing a 12-week, undergraduate-level course covering music therapy methods, treatment planning, therapeutic processes, and applications across clinical and community settings.",
          "Applied principles of assessment, implementation, evaluation, and documentation to music-based therapeutic interventions.",
        ],
      },
    ],
  },
  {
    id: "school-leadership",
    icon: <GraduationCap size={16} />,
    title: "School Leadership",
    accent: "coral",
    items: [
      {
        title:
          "Environmental Committee Lead (Y11), Task Force Steering Committee Lead (Y12) & School Mental Health Ambassador (Y12), ASB Student Wellbeing Task Force",
        subtitle: "September 2024 - Present",
        points: [
          "Led the introduction of soundproof study pods and expanded silent study spaces, with the initiative subsequently implemented in the Elementary School.",
          "Proposed reforms to the school schedule, including restructuring the 2-hour Eagle’s Hour and reducing repetitive advisory periods to increase student autonomy and productive study time.",
          "Currently discussing the launch of Eagle Connect, a proposed buddy-based system designed to strengthen peer connection and support across the school community; presented wellness recommendations to faculty and school leadership.",
          "Selected for a schoolwide leadership role to lead wellbeing initiatives, including Wellbeing Wednesdays and student workshops, and serve as a Student Ambassador for the school’s wellbeing programme.",
        ],
      },
      {
        title: "Leader, ASB Share the Music CSR",
        subtitle: "2023 - Present",
        points: [
          "Oversaw instrumental groups, coordinating lesson plans, music theory resources, attendance, and program delivery in collaboration with teachers and NGO-school representatives.",
          "Taught piano and singing during sessions and gathered partner feedback to strengthen the program.",
        ],
      },
      {
        title: "Co-Deputy Secretary General, ASB Model United Nations",
        subtitle: "2021 - 2025",
        points: [
          "Served on the MUN Executive Team for 4 years, culminating in the role of Co-Deputy Secretary General.",
          "Coordinated communication with 30 schools across Asia for ASBMUN, supporting school participation and conference-wide coordination.",
        ],
      },
    ],
  },
  {
    id: "music-performance",
    icon: <Mic2 size={16} />,
    title: "Music Performance",
    accent: "olive",
    items: [
      {
        title: "Honor Choir Member, Association for Music in International Schools (AMIS)",
        subtitle: "2022 - Present",
        points: [
          "Selected for the AMIS Honor Choir in Korea (2024, 2026) and Singapore (2025) with a ~20% acceptance rate; performed as Alto 1 alongside 80+ international student musicians across 6 pieces.",
        ],
      },
      {
        title: "Singer & Pianist",
        subtitle: "2014 - Present",
        points: [
          "Completed Grades 1–7 in Vocals (Rock & Pop) through Trinity College London; trained in singing and piano.",
          "Performed at live venues and events, including a café and international jazz festival.",
        ],
      },
      {
        title: "Musical Theatre Artist & Vocal Coach, ASB & Akanksha Foundation",
        subtitle: "2022 - 2025",
        points: [
          "Performed solos and ensemble roles across 4 productions over 4 years of musical theatre at the American School of Bombay.",
          "Mentored Akanksha Foundation (NGO) students in pitch-matching, vocal technique, and song preparation for their musical.",
        ],
      },
    ],
  },
  {
    id: "psychology-writing",
    icon: <PenLine size={16} />,
    title: "Psychology & Writing",
    accent: "coral",
    items: [
      {
        title: "Psychology Student, Fitzwilliam College at University of Cambridge Summer Program",
        points: [
          "Studied Psychology through research, presentations, and collaborative projects, including exploration of the intersection of music and psychology.",
          "Graduated top of the Psychology class and received the Student of the Course Award for academic achievement and personal contribution to the program.",
        ],
      },
      {
        title: "Mental Health Writer, YoungMinds & The Times of India",
        subtitle: "2024 - Present",
        points: [
          "Writes on youth mental health and well-being as a resident contributor to YoungMinds, the UK’s leading youth mental health charity.",
          "Published “Addressing Adolescent Mental Health in Schools” in The Times of India NIE, drawing on an interview with a clinical psychologist to examine mental health support in schools.",
          "Published “Music as a tool to heal: From the stage to the operating theatre” in The Times of India, NIE, drawing on an interview with trained Music Therapist Dr Husain ahead of their collaborative “Heal the Healers” initiative.",
        ],
      },
    ],
  },
];

const ResumePage = () => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(["awards-honors"]));

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
        <MarqueeText text="AWARDS · MUSIC WELLNESS · MUSIC THERAPY · LEADERSHIP · PERFORMANCE · PSYCHOLOGY & WRITING" />

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
                              <h4 className="font-normal text-foreground text-xs leading-snug">{item.title}</h4>
                              {item.subtitle && (
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
                              )}
                              {item.link && (
                                <Link
                                  to={item.link.to}
                                  className="inline-block text-[10px] font-light text-olive underline underline-offset-2 hover:text-olive-dark mt-1"
                                >
                                  {item.link.label}
                                </Link>
                              )}
                              {item.points && (
                                <ul className="mt-2 space-y-1.5 list-disc pl-4 marker:text-muted-foreground/50">
                                  {item.points.map((point) => (
                                    <li
                                      key={point}
                                      className="text-xs font-light text-muted-foreground leading-relaxed"
                                    >
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              )}
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
