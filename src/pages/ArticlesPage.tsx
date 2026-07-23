import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, ArrowRight, X, ExternalLink, FileText } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Music Therapy",
    title: "How Music Rewires the Brain: A Deep Dive into Neuroplasticity",
    excerpt:
      "Emerging research shows that regular musical engagement reshapes neural pathways, improving memory, emotional regulation, and cognitive flexibility across all age groups.",
    readTime: "6 min read",
    date: "March 2024",
    featured: true,
    pdfUrl: "https://drive.google.com/file/d/1-FU0EU3WJXaa4hP8Y6sMFch2SwCQ1zIs/view",
    body: `Music has long been recognised as a powerful emotional force, but recent neuroscience has revealed something even more profound: structured musical engagement physically rewires the brain. Through a process called neuroplasticity, repeated musical stimulation strengthens synaptic connections in regions associated with memory, language, and emotional processing.\n\nIn my work with students across Dubai schools, I've observed first-hand how children who engage in weekly music therapy sessions demonstrate measurably improved focus and reduced anxiety. One student who struggled with sensory processing found that drumming patterns gave her a predictable rhythm to anchor her emotions — a finding consistent with research from the Nordoff Robbins Institute.\n\nThe implications extend well beyond childhood. For elderly populations, music activates preserved memories even in advanced dementia, offering a window into identity when other channels close. For educators, this means music is not a supplementary subject — it is a cognitive tool.`,
  },
  {
    id: 2,
    category: "Education",
    title: "Teaching Through Sound: Inclusive Classroom Strategies for Music Educators",
    excerpt:
      "Practical frameworks for making music education accessible to students with diverse learning needs, drawing from three years of classroom experience.",
    readTime: "5 min read",
    date: "January 2024",
    featured: false,
    body: `Inclusive music education is not about lowering standards — it is about expanding the pathways through which students can access musical understanding. Over three years teaching in diverse Dubai classrooms, I developed a framework I call the Three-Door Model: entry through listening, through movement, or through creation.\n\nSome students arrive at musical understanding through active listening and analysis. Others need to physically embody rhythm through movement before notation makes sense. A third group learns best by creating — even simple improvisations — before studying theory. Effective teachers hold all three doors open simultaneously.\n\nAssistive technologies, from eye-gaze instruments to simplified notation apps, have expanded what's possible. But the most important tool remains the teacher's ability to observe which door each student gravitates toward, and to meet them there.`,
  },
  {
    id: 3,
    category: "Wellness",
    title: "The Science of Sound Healing: Separating Evidence from Hype",
    excerpt:
      "A nuanced look at what the research actually says about sound baths, binaural beats, and music-based stress reduction — and where the evidence is strongest.",
    readTime: "7 min read",
    date: "November 2023",
    featured: false,
    body: `Sound healing has experienced a mainstream renaissance, from corporate wellness programs to hospital integrative care units. But what does the evidence actually support?\n\nThe strongest research centres on music-assisted relaxation and receptive music therapy. Multiple randomised controlled trials show significant reductions in cortisol levels and self-reported anxiety following structured music listening sessions. The key variables appear to be tempo (50–80 BPM matching resting heart rate), harmonic consonance, and personal musical preference.\n\nBinaural beats — audio designed to influence brainwave states — show more modest evidence. Some studies suggest mild reductions in anxiety, but effect sizes are small and replication rates uneven. Sound baths using Tibetan bowls show positive outcomes in subjective wellbeing measures, though isolating the acoustic element from the broader mindfulness context remains methodologically challenging.\n\nThe honest conclusion: music-based wellness interventions have real, measurable benefits. The mechanisms are not always mystical — often they are straightforwardly psychological. And that is more than sufficient reason to take them seriously.`,
  },
  {
    id: 4,
    category: "Research",
    title: "CREST Gold: What I Learned Researching Music's Impact on Adolescent Wellbeing",
    excerpt:
      "Reflections on a year-long research project studying how structured musical engagement affects stress, social connection, and academic performance in teenagers.",
    readTime: "8 min read",
    date: "September 2023",
    featured: false,
    body: `The CREST Gold Award research project was the most rigorous intellectual undertaking of my academic career to date. Over twelve months, I tracked a cohort of 40 adolescents across two Dubai schools, measuring self-reported wellbeing, cortisol biomarkers, and academic engagement before and after a structured music programme.\n\nThe findings were both confirming and surprising. Confirming: students in the music programme reported significantly higher social connectedness and lower perceived stress. Surprising: the strongest effects were not in students who were already musical, but in those with no prior formal training. The novelty of the experience, combined with the collaborative nature of ensemble work, appeared to be the active ingredient.\n\nPresenting these findings at the CREST ceremony reinforced my conviction that evidence-based music therapy deserves a formal place in school wellness frameworks — not as an extracurricular luxury, but as a core component of student support.`,
  },
  {
    id: 5,
    category: "Music Therapy",
    title: "Songs Without Words: Music Therapy for Non-Verbal Communication",
    excerpt:
      "Exploring how music becomes a primary language for individuals with autism, acquired brain injury, and selective mutism — and what this teaches us about communication itself.",
    readTime: "5 min read",
    date: "July 2023",
    featured: false,
    body: `Language is only one of the brain's communication systems. Music engages a parallel network — one that bypasses the cortical language centres while activating deep emotional and social processing areas. For individuals who have lost, never had, or struggle to access verbal language, this parallel channel can be transformative.\n\nIn my supervised practice with non-verbal students, I observed how musical turn-taking — passing a phrase back and forth on instruments — created genuine dialogues. A student who could not maintain eye contact or verbal exchange sustained five-minute musical conversations with focused attention and apparent pleasure.\n\nThis is not magic. It is neurological. Music provides a structured, low-stakes, high-reward environment for practising the fundamentals of communication: timing, listening, responding, and self-expression. The instruments become a shared language that neither party needs to translate.`,
  },
  {
    id: 6,
    category: "Education",
    title: "From Examinations to Expression: Rethinking Music Assessment",
    excerpt:
      "Why traditional graded examinations capture only a fraction of musical growth, and what more holistic assessment frameworks might look like.",
    readTime: "4 min read",
    date: "May 2023",
    featured: false,
    body: `Trinity College London Grade 8 represents a genuine achievement. I know — I earned it. But I also know that the skills assessed in that examination captured only a portion of my musical development. Sight-reading, scales, and prepared pieces say little about improvisation, collaborative listening, or the ability to move an audience.\n\nThis matters for education policy. When music teachers are evaluated by examination pass rates, the curriculum narrows accordingly. Students who would flourish as improvisers or community musicians disengage from a system that only values one kind of excellence.\n\nHolistic assessment frameworks — portfolios, peer evaluation, reflective journals, community performance projects — are more labour-intensive but vastly more informative. They reveal musical growth in all its dimensions, not just the ones that fit on a score sheet.`,
  },
];

const categoryColors: Record<string, string> = {
  "Music Therapy": "hsl(var(--coral))",
  Education: "hsl(var(--olive))",
  Wellness: "hsl(210 40% 60%)",
  Research: "hsl(25 50% 65%)",
};

const PDF_PREVIEW_URL = "https://drive.google.com/file/d/1-FU0EU3WJXaa4hP8Y6sMFch2SwCQ1zIs/preview";

const categories = ["All", "Music Therapy", "Education", "Wellness", "Research"];

const ArticleCard = ({
  article,
  index,
  onClick,
}: {
  article: (typeof articles)[0];
  index: number;
  onClick: () => void;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.08 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4 }}
    onClick={onClick}
    className="cursor-pointer group"
  >
    <div
      className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl p-5 h-full transition-all duration-300"
      style={{
        boxShadow:
          "0 4px 20px -4px hsl(var(--shadow-color) / 0.08), inset 0 1px 0 hsl(var(--cream) / 0.5)",
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className="px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide text-white shrink-0"
          style={{ background: categoryColors[article.category], opacity: 0.85 }}
        >
          {article.category}
        </span>
        <div className="flex items-center gap-1 text-[11px] text-muted-foreground/70 font-light shrink-0">
          <Clock size={10} />
          {article.readTime}
        </div>
      </div>

      <h3 className="text-sm font-light text-foreground leading-snug mb-2 group-hover:text-foreground/80 transition-colors">
        {article.title}
      </h3>
      <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-3 mb-4">
        {article.excerpt}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-[10px] text-muted-foreground/60 font-light">{article.date}</span>
        <div className="flex items-center gap-1 text-[11px] font-light opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: categoryColors[article.category] }}
        >
          Read more <ArrowRight size={11} />
        </div>
      </div>
    </div>
  </motion.article>
);

const ArticlesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof articles)[0] | null>(null);

  const featured = articles.find((a) => a.featured);
  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="page-scroll relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 grid-paper-bg" />
      <div
        className="glow-orb"
        style={{
          width: 300,
          height: 300,
          top: "10%",
          right: "5%",
          background: "radial-gradient(circle, hsl(var(--olive) / 0.1), transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 220,
          height: 220,
          bottom: "15%",
          left: "8%",
          background: "radial-gradient(circle, hsl(var(--coral) / 0.08), transparent 70%)",
          animationDelay: "2.5s",
        }}
      />

      {/* Wave top */}
      <svg
        className="absolute top-0 left-0 w-full h-[160px] z-[1]"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-20,0 C100,50 250,25 400,45 C550,65 700,20 850,40 C1000,60 1150,15 1300,35 C1380,42 1420,32 1460,38"
          stroke="hsl(var(--blush))"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M-20,0 C80,60 230,35 380,55 C530,75 680,30 830,50 C980,70 1130,25 1280,45 C1370,52 1420,42 1460,48"
          stroke="hsl(210 40% 70%)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
        />
      </svg>

      <div className="relative z-10 px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <BookOpen size={28} strokeWidth={1.2} className="text-muted-foreground/60" />
              <h1
                className="text-4xl md:text-6xl font-light text-foreground"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
              >
                Articles
              </h1>
            </div>
            <motion.p
              className="text-base italic text-muted-foreground font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Thoughts on music, therapy, and education
            </motion.p>
            <motion.div
              className="w-24 h-px mx-auto mt-4"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--olive) / 0.5), transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          {/* Featured article */}
          {activeCategory === "All" && featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-10"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-3 font-light">
                Featured
              </p>
              <div
                className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-5"
                style={{ minHeight: "640px" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.55 }}
                  className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden"
                  style={{
                    boxShadow:
                      "0 8px 32px -8px hsl(var(--shadow-color) / 0.1), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border/15">
                    <div className="flex items-center gap-3">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wide text-white"
                        style={{ background: categoryColors[featured.category] }}
                      >
                        {featured.category}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-muted-foreground/70 font-light">
                        <Clock size={11} /> {featured.readTime}
                      </div>
                    </div>
                    <span className="text-[11px] text-muted-foreground/60 font-light">
                      {featured.date}
                    </span>
                  </div>
                  <iframe
                    title={featured.title}
                    src={PDF_PREVIEW_URL}
                    loading="lazy"
                    className="w-full h-[500px] bg-muted/20"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.55 }}
                  className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-7 flex flex-col justify-between"
                  style={{
                    boxShadow:
                      "0 8px 32px -8px hsl(var(--shadow-color) / 0.1), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FileText size={15} className="text-muted-foreground/60" />
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-light">
                        Direct PDF
                      </p>
                    </div>
                    <h2 className="text-xl md:text-2xl font-light text-foreground mb-3 leading-snug">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5">
                      {featured.excerpt}
                    </p>
                    <div className="rounded-xl border border-border/20 bg-muted/10 p-4 mb-5">
                      <p className="text-xs text-muted-foreground/70 font-light leading-relaxed">
                        The embedded preview loads the published article directly. Use the button below if you want
                        to open the Google Drive file in a new tab.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelected(featured)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-xs font-light tracking-wide"
                    >
                      Open article view
                      <ArrowRight size={12} />
                    </button>
                    <a
                      href={featured.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/30 text-xs font-light text-foreground hover:bg-muted/20 transition-colors"
                    >
                      Open Google Drive
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-light tracking-wide transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border/40 hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Articles grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered
                .filter((a) => !(activeCategory === "All" && a.featured))
                .map((article, i) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    index={i}
                    onClick={() => setSelected(article)}
                  />
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Article detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center p-6 pt-16 overflow-y-auto"
            style={{ background: "hsl(var(--background) / 0.88)", backdropFilter: "blur(14px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="bg-card/90 border border-border/30 rounded-2xl overflow-hidden max-w-4xl w-full"
              style={{
                boxShadow:
                  "0 24px 80px hsl(var(--shadow-color) / 0.15), inset 0 1px 0 hsl(var(--cream) / 0.4)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header strip */}
              <div
                className="h-1.5 w-full"
                style={{ background: categoryColors[selected.category] }}
              />
              <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="p-7 border-b lg:border-b-0 lg:border-r border-border/15">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wide text-white"
                        style={{ background: categoryColors[selected.category] }}
                      >
                        {selected.category}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-muted-foreground/70 font-light">
                        <Clock size={11} /> {selected.readTime}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      className="w-8 h-8 rounded-full bg-muted/40 hover:bg-muted/70 flex items-center justify-center transition-colors"
                    >
                      <X size={14} className="text-foreground" />
                    </button>
                  </div>

                  <h2 className="text-xl font-light text-foreground mb-1 leading-snug">
                    {selected.title}
                  </h2>
                  <p className="text-[11px] text-muted-foreground/60 font-light mb-5">
                    {selected.date}
                  </p>

                  <div className="prose prose-sm max-w-none">
                    {selected.body.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-sm text-muted-foreground font-light leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {"pdfUrl" in selected && selected.pdfUrl && (
                    <a
                      href={selected.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-foreground text-background text-xs font-light tracking-wide"
                    >
                      Open Google Drive
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                {"pdfUrl" in selected && selected.pdfUrl ? (
                  <iframe
                    title={selected.title}
                    src={selected.pdfUrl.replace("/view", "/preview")}
                    loading="lazy"
                    className="w-full min-h-[620px] bg-muted/20"
                  />
                ) : (
                  <div className="p-7">
                    <div className="rounded-xl border border-border/20 bg-muted/10 p-5">
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        This article is text-only in the modal view.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArticlesPage;
