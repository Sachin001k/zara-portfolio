import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, ArrowRight, X, ExternalLink, Feather, BookMarked, FileText, Download } from "lucide-react";

type Tab = "Articles" | "Poetry" | "Short Stories" | "Publications";

const articles = [
  {
    id: 1,
    title: "Addressing Adolescent Mental Health in Schools",
    excerpt:
      "Published in Times NIE — exploring how music and structured wellbeing programmes can bridge the growing mental health gap among teenagers in school environments.",
    readTime: "3 min read",
    date: "March 18, 2025",
    publication: "Times NIE",
    pdfUrl: "https://drive.google.com/file/d/1-FU0EU3WJXaa4hP8Y6sMFch2SwCQ1zIs/view",
    body: `Published in Times NIE on Tuesday, March 18, 2025 — written in Grade 10.\n\nAdolescent mental health is one of the most pressing challenges facing schools today. With rising rates of anxiety, academic burnout, and social disconnection, the need for embedded, accessible support has never been more urgent.\n\nMusic offers a uniquely low-barrier intervention. Unlike traditional counselling, which requires students to articulate distress in words, music provides an alternative language — one that bypasses the cortical language centres and engages emotional processing directly. Group music-making, in particular, activates the social bonding systems of the brain, reducing feelings of isolation while building a sense of shared purpose.\n\nSchools that have integrated structured music wellness programmes report measurable improvements in student wellbeing indicators: reduced anxiety self-reports, improved attendance, and greater classroom participation. These outcomes suggest that music education — properly designed and delivered — functions not just as artistic enrichment, but as a form of preventive mental healthcare.\n\nThe investment required is modest. The return, measured in students who feel seen, heard, and supported, is profound.`,
  },
];

const poems: {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  full: string;
}[] = [];

const stories: {
  id: number;
  title: string;
  date: string;
  length: string;
  genre: string;
  excerpt: string;
  body: string;
}[] = [];

const publications = [
  {
    id: 1,
    title: "Addressing Adolescent Mental Health in Schools",
    journal: "Times NIE",
    date: "March 18, 2025",
    type: "Published Article",
    url: "https://drive.google.com/file/d/1-FU0EU3WJXaa4hP8Y6sMFch2SwCQ1zIs/view",
    isPdf: true,
  },
  {
    id: 2,
    title: "The Double-Edged Sword of ADD",
    journal: "Young Minds",
    date: "Recent",
    type: "Blog Post",
    url: "https://www.youngminds.org.uk/young-person/blog/the-double-edged-sword-of-add/",
    isPdf: false,
  },
  {
    id: 3,
    title: "Why Music Matters",
    journal: "Young Minds",
    date: "Recent",
    type: "Blog Post",
    url: "https://www.youngminds.org.uk/young-person/blog/why-music-matters/",
    isPdf: false,
  },
];

const tabs: Tab[] = ["Articles", "Publications"];

const tabIcons: Record<Tab, React.ReactNode> = {
  Articles: <FileText size={13} strokeWidth={1.4} />,
  Poetry: <Feather size={13} strokeWidth={1.4} />,
  "Short Stories": <BookOpen size={13} strokeWidth={1.4} />,
  Publications: <BookMarked size={13} strokeWidth={1.4} />,
};

const PsychologyPublicationsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Articles");
  const [selectedArticle, setSelectedArticle] = useState<(typeof articles)[0] | null>(null);
  const [selectedPoem, setSelectedPoem] = useState<(typeof poems)[0] | null>(null);
  const [selectedStory, setSelectedStory] = useState<(typeof stories)[0] | null>(null);

  return (
    <div className="page-scroll relative min-h-screen">
      <div className="absolute inset-0 grid-paper-bg" />
      <div
        className="glow-orb"
        style={{
          width: 280,
          height: 280,
          top: "8%",
          right: "6%",
          background: "radial-gradient(circle, hsl(var(--olive) / 0.1), transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 220,
          height: 220,
          bottom: "12%",
          left: "8%",
          background: "radial-gradient(circle, hsl(var(--coral) / 0.08), transparent 70%)",
          animationDelay: "2s",
        }}
      />

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
                Published Work
              </h1>
            </div>
            <motion.p
              className="text-base italic text-muted-foreground font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Articles · Poetry · Stories · Publications
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

          {/* Tab bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-light tracking-wide transition-all duration-200 border ${
                  activeTab === tab
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border/40 hover:text-foreground hover:border-foreground/30"
                }`}
              >
                <span className={activeTab === tab ? "" : "opacity-60"}>{tabIcons[tab]}</span>
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {/* ── ARTICLES ── */}
            {activeTab === "Articles" && (
              <motion.div
                key="articles"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {articles.map((a, i) => (
                  <motion.article
                    key={a.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.07 * i }}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedArticle(a)}
                    className="cursor-pointer group"
                  >
                    <div
                      className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl p-5 h-full"
                      style={{
                        boxShadow:
                          "0 4px 18px -4px hsl(var(--shadow-color) / 0.08), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="px-2 py-0.5 rounded-full text-[9px] font-medium tracking-wide text-white"
                          style={{ background: "hsl(var(--olive) / 0.75)" }}
                        >
                          {"publication" in a && a.publication ? a.publication : "Article"}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground/60 font-light ml-auto">
                          <Clock size={9} /> {a.readTime}
                        </div>
                      </div>
                      <h3 className="text-sm font-light text-foreground leading-snug mb-2">
                        {a.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-3 mb-3">
                        {a.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-[10px] text-muted-foreground/50 font-light">{a.date}</span>
                        <div className="flex items-center gap-2">
                          {"pdfUrl" in a && a.pdfUrl && (
                            <a
                              href={(a as { pdfUrl: string }).pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-[10px] font-light text-white px-2 py-0.5 rounded-full"
                              style={{ background: "hsl(var(--olive) / 0.7)" }}
                            >
                              <ExternalLink size={9} /> PDF
                            </a>
                          )}
                          <div className="flex items-center gap-1 text-[10px] font-light text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                            Read <ArrowRight size={10} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}

            {/* ── POETRY ── */}
            {activeTab === "Poetry" && (
              <motion.div
                key="poetry"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {poems.map((poem, i) => (
                  <motion.div
                    key={poem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i }}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedPoem(poem)}
                    className="cursor-pointer group"
                  >
                    <div
                      className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl p-6"
                      style={{
                        boxShadow:
                          "0 4px 18px -4px hsl(var(--shadow-color) / 0.08), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <Feather size={14} strokeWidth={1.2} className="text-muted-foreground/40" />
                        <span className="text-[10px] text-muted-foreground/50 font-light">{poem.date}</span>
                      </div>
                      <h3 className="text-base font-light text-foreground mb-4"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
                      >
                        {poem.title}
                      </h3>
                      {/* Poem excerpt — preserve line breaks */}
                      <pre
                        className="text-xs text-muted-foreground font-light leading-relaxed whitespace-pre-wrap font-sans mb-4"
                        style={{ fontFamily: "inherit" }}
                      >
                        {poem.excerpt}
                      </pre>
                      <div className="flex items-center gap-1 text-[10px] font-light text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        Read full poem <ArrowRight size={10} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* ── SHORT STORIES ── */}
            {activeTab === "Short Stories" && (
              <motion.div
                key="stories"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {stories.map((story, i) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i }}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedStory(story)}
                    className="cursor-pointer group"
                  >
                    <div
                      className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl p-6"
                      style={{
                        boxShadow:
                          "0 4px 18px -4px hsl(var(--shadow-color) / 0.08), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="px-2 py-0.5 rounded-full text-[9px] font-medium tracking-wide text-white"
                          style={{ background: "hsl(var(--coral) / 0.75)" }}
                        >
                          {story.genre}
                        </span>
                        <span className="text-[10px] text-muted-foreground/50 font-light ml-auto">{story.length}</span>
                      </div>
                      <h3
                        className="text-base font-light text-foreground mb-3"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
                      >
                        {story.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-4 mb-4 italic">
                        "{story.excerpt}"
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-muted-foreground/50 font-light">{story.date}</span>
                        <div className="flex items-center gap-1 text-[10px] font-light text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                          Read story <ArrowRight size={10} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* ── PUBLICATIONS ── */}
            {activeTab === "Publications" && (
              <motion.div
                key="pubs"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4 max-w-2xl mx-auto"
              >
                {publications.map((pub, i) => (
                  <motion.a
                    key={pub.id}
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i }}
                    whileHover={{ x: 4 }}
                    className="group"
                  >
                    <div
                      className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl p-5 flex items-start gap-4"
                      style={{
                        boxShadow:
                          "0 4px 18px -4px hsl(var(--shadow-color) / 0.08), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "hsl(var(--olive) / 0.12)" }}
                      >
                        {pub.isPdf ? (
                          <Download size={15} strokeWidth={1.4} className="text-olive" />
                        ) : (
                          <ExternalLink size={15} strokeWidth={1.4} className="text-olive" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-light text-foreground leading-snug mb-1 group-hover:text-foreground/80 transition-colors">
                          {pub.title}
                        </h3>
                        <p className="text-[11px] text-muted-foreground/70 font-light mb-1">
                          {pub.journal}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-muted-foreground/50 font-light">{pub.date}</span>
                          <span
                            className="text-[9px] px-2 py-0.5 rounded-full font-medium text-white"
                            style={{ background: "hsl(var(--olive) / 0.65)" }}
                          >
                            {pub.type}
                          </span>
                        </div>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-muted-foreground/30 group-hover:text-muted-foreground/70 transition-colors shrink-0 mt-1"
                      />
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Article modal ── */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center p-6 pt-20 overflow-y-auto"
            style={{ background: "hsl(var(--background) / 0.88)", backdropFilter: "blur(14px)" }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="bg-card/90 border border-border/30 rounded-2xl overflow-hidden max-w-2xl w-full"
              style={{ boxShadow: "0 24px 80px hsl(var(--shadow-color) / 0.15), inset 0 1px 0 hsl(var(--cream) / 0.4)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-1.5 w-full" style={{ background: "hsl(var(--olive))" }} />
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide text-white" style={{ background: "hsl(var(--olive) / 0.75)" }}>Article</span>
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground/70 font-light"><Clock size={10} /> {selectedArticle.readTime}</div>
                  </div>
                  <button onClick={() => setSelectedArticle(null)} className="w-8 h-8 rounded-full bg-muted/40 hover:bg-muted/70 flex items-center justify-center transition-colors">
                    <X size={14} className="text-foreground" />
                  </button>
                </div>
                <h2 className="text-xl font-light text-foreground mb-1 leading-snug">{selectedArticle.title}</h2>
                <p className="text-[11px] text-muted-foreground/60 font-light mb-5">{selectedArticle.date}</p>
                {selectedArticle.body.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{p}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Poem modal ── */}
      <AnimatePresence>
        {selectedPoem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "hsl(var(--background) / 0.9)", backdropFilter: "blur(16px)" }}
            onClick={() => setSelectedPoem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="bg-card/90 border border-border/30 rounded-2xl overflow-hidden max-w-sm w-full"
              style={{ boxShadow: "0 24px 80px hsl(var(--shadow-color) / 0.15), inset 0 1px 0 hsl(var(--cream) / 0.4)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-7">
                <div className="flex items-center justify-between mb-6">
                  <Feather size={16} strokeWidth={1.2} className="text-muted-foreground/40" />
                  <button onClick={() => setSelectedPoem(null)} className="w-8 h-8 rounded-full bg-muted/40 hover:bg-muted/70 flex items-center justify-center transition-colors">
                    <X size={14} className="text-foreground" />
                  </button>
                </div>
                <h2 className="text-2xl font-light text-foreground mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
                  {selectedPoem.title}
                </h2>
                <p className="text-[11px] text-muted-foreground/50 font-light mb-6">{selectedPoem.date}</p>
                <pre className="text-sm text-muted-foreground font-light leading-loose whitespace-pre-wrap font-sans">
                  {selectedPoem.full}
                </pre>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Story modal ── */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center p-6 pt-20 overflow-y-auto"
            style={{ background: "hsl(var(--background) / 0.88)", backdropFilter: "blur(14px)" }}
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="bg-card/90 border border-border/30 rounded-2xl overflow-hidden max-w-xl w-full"
              style={{ boxShadow: "0 24px 80px hsl(var(--shadow-color) / 0.15), inset 0 1px 0 hsl(var(--cream) / 0.4)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-1.5 w-full" style={{ background: "hsl(var(--coral))" }} />
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide text-white" style={{ background: "hsl(var(--coral) / 0.75)" }}>{selectedStory.genre}</span>
                    <span className="text-[11px] text-muted-foreground/60 font-light">{selectedStory.length}</span>
                  </div>
                  <button onClick={() => setSelectedStory(null)} className="w-8 h-8 rounded-full bg-muted/40 hover:bg-muted/70 flex items-center justify-center transition-colors">
                    <X size={14} className="text-foreground" />
                  </button>
                </div>
                <h2 className="text-2xl font-light text-foreground mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
                  {selectedStory.title}
                </h2>
                <p className="text-[11px] text-muted-foreground/50 font-light mb-6">{selectedStory.date}</p>
                {selectedStory.body.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{p}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PsychologyPublicationsPage;
