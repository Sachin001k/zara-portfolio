import { useState } from "react";
import { motion } from "framer-motion";
import MarqueeText from "@/components/MarqueeText";
import GooglePhotosVideo from "@/components/GooglePhotosVideo";
import { musicConnectReach, participantOrganisations, schoolSessions } from "@/data/schoolsSessions";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Calendar, School, Users, Eye, Download, HeartHandshake, Building2, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const CURRICULUM_PDF_URL = "/documents/Music-Connect-Curriculum.pdf";

const HEAL_THE_HEALERS_FLYERS = [
  { src: "/media/heal-the-healers/flyer.jpg", alt: "Heal the Healers information session flyer" },
  {
    src: "/media/heal-the-healers/three-pillars-flyer.jpg",
    alt: "Heal the Healers: three pillars workshop series flyer",
  },
];

// Rotating card colours, matching the Reach stat cards.
const ORG_CARD_STYLES = [
  "bg-olive/35 text-foreground",
  "bg-blush/80 text-foreground",
  "bg-olive-dark text-cream",
  "bg-coral/35 text-foreground",
];

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
  const [flyer, setFlyer] = useState<(typeof HEAL_THE_HEALERS_FLYERS)[number] | null>(null);

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
                    src="/media/music-connect-logo.jpg"
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
                    <span className="font-medium text-foreground">Music Connect</span> is Zara&apos;s
                    original music-for-wellness curriculum, designed to
                    promote emotional wellbeing, connection, and self-expression through
                    evidence-informed musical experiences. Its foundations are grounded in
                    psychological theory and research, drawing on findings from neuroscience,
                    developmental psychology, and the wider body of research on music and wellbeing.
                    To deepen her understanding of the field, Zara has undertaken specialist training
                    with the{" "}
                    <span className="font-medium text-foreground">
                      Nordoff-Robbins Centre for Music Therapy
                    </span>
                    , completed online coursework
                    through the{" "}
                    <span className="font-medium text-foreground">Berklee College of Music</span>,
                    and observed experienced practitioners
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

                <div className="flex flex-wrap items-center gap-3 mt-5">
                  <a
                    href={CURRICULUM_PDF_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-olive/30 px-4 py-2 text-xs font-light text-olive-dark hover:bg-olive/10 transition-colors"
                  >
                    <Eye size={13} /> Preview curriculum
                  </a>
                  <a
                    href={CURRICULUM_PDF_URL}
                    download="Music-Connect-Curriculum.pdf"
                    className="inline-flex items-center gap-1.5 rounded-full bg-olive px-4 py-2 text-xs font-light text-primary-foreground hover:bg-olive-dark transition-colors"
                    style={{ boxShadow: "0 4px 15px hsl(var(--olive) / 0.3)" }}
                  >
                    <Download size={13} /> Download curriculum
                  </a>
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

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-olive/35 p-5 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-olive-dark tabular-nums">
                      {musicConnectReach.teachersAndEducators}
                    </p>
                    <p className="text-[10px] font-normal text-foreground/80 uppercase tracking-[0.12em] mt-1">
                      Teachers &amp; Educators
                    </p>
                  </div>
                  <div className="rounded-2xl bg-blush/80 p-5 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-foreground tabular-nums">
                      {musicConnectReach.studentsAndAdults.toLocaleString()}+
                    </p>
                    <p className="text-[10px] font-normal text-foreground/80 uppercase tracking-[0.12em] mt-1">
                      Students &amp; Adults
                    </p>
                    <p className="text-[9px] font-light text-foreground/50 mt-0.5">Globally</p>
                  </div>
                  <div className="rounded-2xl bg-olive-dark p-5 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-cream tabular-nums">
                      {musicConnectReach.countries}
                    </p>
                    <p className="text-[10px] font-normal text-cream/80 uppercase tracking-[0.12em] mt-1">
                      Countries
                    </p>
                    <p className="text-[10px] font-bold text-cream mt-0.5">India · UK · USA</p>
                  </div>
                  <div className="rounded-2xl bg-coral/35 p-5 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-coral tabular-nums">
                      {musicConnectReach.partnerOrganizations}
                    </p>
                    <p className="text-[10px] font-normal text-foreground/80 uppercase tracking-[0.12em] mt-1">
                      Partner Organizations
                    </p>
                  </div>
                </div>

                <p className="text-[10px] font-light text-muted-foreground">
                  Reaching schools and communities across India, the UK, and the US
                </p>

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

            {/* ── Heal the Healers ── */}
            <motion.section
              custom={2}
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="glass-card p-5 md:p-8 mb-12"
              style={{
                boxShadow:
                  "0 8px 32px hsl(var(--shadow-color) / 0.06), inset 0 1px 0 hsl(var(--cream) / 0.5)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
                <div>
                  <p className="text-[10px] font-light text-coral uppercase tracking-[0.2em] mb-1">
                    Music for caregivers · Mumbai
                  </p>
                  <h2 className="text-2xl md:text-3xl font-extralight text-foreground tracking-tight flex items-center gap-2 mb-4">
                    <HeartHandshake size={22} className="text-olive" /> Heal the Healers
                  </h2>
                  <div className="space-y-3 text-sm font-light text-muted-foreground leading-relaxed">
                    <p>
                      <span className="font-medium text-foreground">Heal the Healers</span> brings a
                      music-based wellness intervention for caregivers to Mumbai. Zara facilitates the
                      programme alongside{" "}
                      <span className="font-medium text-foreground">Dr Farah Husain</span>, Senior
                      Anaesthesiologist and music therapist certified by the Indian Association of
                      Music Therapists, and founder of the music-therapy-based life skills programme{" "}
                      <em>Symphonies of Strength</em>.
                    </p>
                    <p>
                      Caregivers, teachers and others in supportive roles often carry the stress of
                      others while rarely taking time for their own wellbeing. The series began with a
                      free information session on Saturday, 26 September 2026, followed by a workshop
                      series built on three pillars: <em>Resilience</em>,{" "}
                      <em>Happiness as a way of life</em> and <em>Coping with Stress</em>.
                    </p>
                    <p>The sessions have reached 100+ caregivers to date.</p>
                  </div>

                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-light text-muted-foreground">
                    <li className="rounded-xl bg-background/60 border border-border/20 px-3 py-2">
                      <span className="block text-[10px] uppercase tracking-[0.15em] text-coral mb-0.5">
                        Information session
                      </span>
                      Sat, 26 September · 5:00 PM IST
                    </li>
                    <li className="rounded-xl bg-background/60 border border-border/20 px-3 py-2">
                      <span className="block text-[10px] uppercase tracking-[0.15em] text-coral mb-0.5">
                        Workshops (5–6 PM, via Zoom)
                      </span>
                      Oct 10 · Oct 17 · Oct 25 · Oct 29
                    </li>
                  </ul>

                  <Link
                    to="/psychology-publications"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-light text-olive hover:text-olive-dark transition-colors"
                  >
                    <Newspaper size={13} /> Featured in The Times of India – NIE
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {HEAL_THE_HEALERS_FLYERS.map((f) => (
                    <button
                      key={f.src}
                      type="button"
                      onClick={() => setFlyer(f)}
                      className="group overflow-hidden rounded-xl border border-border/20 bg-background/40"
                      aria-label={`Enlarge: ${f.alt}`}
                    >
                      <img
                        src={f.src}
                        alt={f.alt}
                        loading="lazy"
                        className="w-full aspect-[2/3] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* ── Participant organisations ── */}
            <motion.section
              custom={3}
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-5">
                <Building2 size={18} className="text-olive" />
                <h2 className="text-xl md:text-2xl font-extralight text-foreground tracking-tight">
                  Participant Organisations
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {participantOrganisations.map((org, i) => (
                  <div
                    key={org.name}
                    className={`rounded-2xl p-4 min-h-[96px] flex flex-col justify-center text-center ${ORG_CARD_STYLES[i % ORG_CARD_STYLES.length]}`}
                  >
                    <p className="text-sm font-medium leading-snug">{org.name}</p>
                    <p className="text-[9px] uppercase tracking-[0.15em] mt-1.5 opacity-70">{org.type}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.div
              custom={4}
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
                <SchoolPost key={session.id} session={session} index={index + 5} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={flyer !== null} onOpenChange={(open) => !open && setFlyer(null)}>
        <DialogContent className="max-w-2xl p-2 bg-card border-border/30">
          <DialogTitle className="sr-only">{flyer?.alt ?? "Heal the Healers flyer"}</DialogTitle>
          {flyer && (
            <img src={flyer.src} alt={flyer.alt} className="w-full max-h-[85vh] object-contain rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MusicConnectPage;
