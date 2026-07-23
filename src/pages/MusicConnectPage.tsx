import { motion } from "framer-motion";
import MarqueeText from "@/components/MarqueeText";
import GooglePhotosVideo from "@/components/GooglePhotosVideo";
import { musicConnectReach, schoolSessions } from "@/data/schoolsSessions";
import { MUSIC_CONNECT_DRIVE_URL } from "@/data/musicConnect";
import { Calendar, School, Users, GraduationCap } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SchoolPost = ({
  session,
  index,
}: {
  session: (typeof schoolSessions)[number];
  index: number;
}) => (
  <motion.article
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    variants={sectionVariants}
    className="glass-card overflow-hidden"
    style={{
      boxShadow:
        "0 8px 32px hsl(var(--shadow-color) / 0.06), inset 0 1px 0 hsl(var(--cream) / 0.5)",
    }}
  >
    <div className="p-6 md:p-8 space-y-5">
      <header className="space-y-2 border-b border-border/20 pb-5">
        <p className="text-[10px] font-light text-coral uppercase tracking-[0.2em]">
          Schools & Sessions
        </p>
        <h3 className="text-lg md:text-xl font-light text-foreground leading-snug">{session.name}</h3>
        <p className="text-xs font-light text-muted-foreground flex items-center gap-1.5">
          <Calendar size={12} className="text-olive shrink-0" />
          {session.date}
        </p>
      </header>

      {session.paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-sm font-light text-muted-foreground leading-relaxed">
          {paragraph}
        </p>
      ))}

      {session.highlights && session.highlights.length > 0 && (
        <ul className="space-y-1.5">
          {session.highlights.map((item) => (
            <li
              key={item}
              className="text-sm font-light text-foreground/90 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-coral"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {session.images && session.images.length > 0 && (
        <div
          className={`grid gap-3 ${
            session.images.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {session.images.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-xl border border-border/25 bg-muted/10"
            >
              <img
                src={src}
                alt={`${session.name} — session photo`}
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      )}

      {session.videoIds && session.videoIds.length > 0 && (
        <div className="space-y-4 pt-1">
          {session.videoIds.map((videoId, videoIndex) => (
            <GooglePhotosVideo
              key={videoId}
              photoId={videoId}
              label={
                session.videoIds!.length > 1
                  ? `Watch video ${videoIndex + 1}`
                  : "Watch video of Zara singing or teaching"
              }
              poster={session.images?.[videoIndex] ?? session.images?.[0]}
            />
          ))}
        </div>
      )}

      {session.videoUrls && session.videoUrls.length > 0 && (
        <div className="space-y-4 pt-1">
          {session.videoUrls.map((url, videoIndex) => (
            <GooglePhotosVideo
              key={url}
              href={url}
              label={
                session.videoUrls!.length > 1
                  ? `Watch video ${videoIndex + 1}`
                  : "Watch video of Zara singing or teaching"
              }
              poster={session.images?.[0]}
            />
          ))}
        </div>
      )}
    </div>
  </motion.article>
);

const MusicConnectPage = () => {
  const teacherTotal = musicConnectReach.teachers.reduce((sum, t) => sum + t.count, 0);

  return (
    <div className="page-scroll relative">
      <div className="absolute inset-0 grid-paper-bg" />
      <div
        className="glow-orb"
        style={{
          width: 300,
          height: 300,
          top: "5%",
          left: "10%",
          background: "radial-gradient(circle, hsl(var(--olive) / 0.1), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <MarqueeText text="MUSIC CONNECT · SCHOOLS & SESSIONS · MUSIC FOR WELLNESS IN THE COMMUNITY" />

        <div className="px-4 sm:px-6 md:px-10 pb-16">
          <div className="mx-auto w-full max-w-6xl">
            {/* Header + logo + intro + reach — wider two-column */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-10 mb-12 pt-2 items-start">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                  <img
                    src="/media/music-connect-logo.png"
                    alt="Music Connect logo"
                    className="w-24 h-24 md:w-28 md:h-28 object-contain shrink-0 rounded-2xl"
                  />
                  <div>
                    <p className="text-xs font-light text-coral uppercase tracking-[0.2em] mb-1">
                      Zara Pereira
                    </p>
                    <h1 className="text-3xl md:text-4xl font-extralight text-foreground tracking-tight leading-tight">
                      Music Connect
                    </h1>
                  </div>
                </div>

                <div className="space-y-4 text-sm font-light text-muted-foreground leading-relaxed">
                  <p>
                    Music Connect is Zara&apos;s original music-for-wellness curriculum, designed to
                    promote emotional wellbeing, connection, and self-expression through
                    evidence-informed musical experiences. Its foundations are grounded in
                    psychological theory and research, drawing on findings from neuroscience,
                    developmental psychology, and the wider body of research on music and wellbeing.
                    To deepen her understanding of the field, Zara has undertaken specialist training
                    with the Nordoff-Robbins Centre for Music Therapy, completed online coursework
                    through the Berklee College of Music, and observed experienced practitioners
                    working in clinical settings.
                  </p>
                  <p>
                    Music Connect has been implemented with students and educators across India, the
                    United Kingdom, and the United States, where Zara has delivered workshops and
                    trained teachers to use music as a practical tool for supporting wellbeing in
                    educational settings.
                  </p>
                  <p>
                    The curriculum uses engaging, interactive musical experiences to build connection
                    and support longer-term developmental outcomes. Activities are designed to
                    strengthen communication, emotional expression, social connection, resilience,
                    self-regulation, creativity, and confidence, while encouraging cognitive
                    engagement and collaboration. Rather than providing clinical intervention, Music
                    Connect translates evidence-informed principles from psychology and music-based
                    practice into an accessible educational programme that empowers schools and
                    communities to use music to support wellbeing.
                  </p>
                  <p className="text-xs italic opacity-80">
                    *Zara does not claim to be a music therapist.
                  </p>
                </div>
              </motion.div>

              {/* Reach sidebar */}
              <motion.aside
                custom={1}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="glass-card p-5 md:p-6 space-y-5 lg:sticky lg:top-24"
                style={{
                  boxShadow:
                    "0 8px 32px hsl(var(--shadow-color) / 0.06), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                }}
              >
                <div>
                  <p className="text-[10px] font-light text-coral uppercase tracking-[0.2em] mb-1">
                    Music Connect
                  </p>
                  <h2 className="text-lg font-light text-foreground flex items-center gap-2">
                    <Users size={16} className="text-olive" /> Reach
                  </h2>
                </div>

                <div>
                  <p className="text-xs font-normal text-foreground mb-2 flex items-center gap-1.5">
                    <GraduationCap size={13} className="text-olive" /> Teachers
                  </p>
                  <ul className="space-y-1.5">
                    {musicConnectReach.teachers.map((t) => (
                      <li
                        key={t.label}
                        className="flex justify-between gap-3 text-xs font-light text-muted-foreground border-b border-border/15 pb-1.5"
                      >
                        <span>{t.label}</span>
                        <span className="text-foreground tabular-nums">{t.count}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[10px] font-light text-muted-foreground mt-2">
                    {teacherTotal} teachers trained across partner organisations
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <p className="text-xs font-light text-muted-foreground">
                    <span className="text-foreground font-normal">Adult instructors:</span>{" "}
                    {musicConnectReach.adultInstructors} globally
                  </p>
                  <p className="text-xs font-light text-muted-foreground">
                    <span className="text-foreground font-normal">Students:</span>{" "}
                    {musicConnectReach.studentsAndAdults.toLocaleString()} students and adults
                    globally
                  </p>
                </div>

                <div className="pt-2 border-t border-border/20">
                  <p className="text-[10px] font-light text-coral uppercase tracking-[0.2em] mb-1">
                    Endorsements
                  </p>
                  <p className="text-xs font-light text-muted-foreground leading-relaxed">
                    Endorsements will appear here as they are shared.
                  </p>
                </div>
              </motion.aside>
            </div>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="mb-8 flex items-center gap-2 text-xs font-light text-muted-foreground"
            >
              <School size={14} className="text-olive-dark shrink-0" />
              Schools &amp; Sessions · {schoolSessions.length} partner organisations
            </motion.div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">
              {schoolSessions.map((session, index) => (
                <SchoolPost key={session.id} session={session} index={index + 3} />
              ))}
            </div>

            <motion.section
              custom={schoolSessions.length + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="mt-14 glass-card p-6 md:p-8"
              style={{
                boxShadow:
                  "0 8px 32px hsl(var(--shadow-color) / 0.06), inset 0 1px 0 hsl(var(--cream) / 0.5)",
              }}
            >
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-base font-light text-foreground">Download the curriculum</h2>
                <a
                  href={MUSIC_CONNECT_DRIVE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-olive px-8 py-3 text-sm font-light text-primary-foreground hover:bg-olive-dark transition-colors"
                  style={{ boxShadow: "0 4px 15px hsl(var(--olive) / 0.3)" }}
                >
                  Download curriculum
                </a>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicConnectPage;
