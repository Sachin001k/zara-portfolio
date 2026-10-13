import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, ArrowRight, X, Maximize2 } from "lucide-react";

type Article = {
  id: string;
  title: string;
  publication: string;
  date: string;
  readTime: string;
  byline: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  /** Paragraphs; entries starting with "## " render as subheadings. */
  body: string[];
};

const articles: Article[] = [
  {
    id: "music-tool-to-heal",
    title: "Music as a tool to heal: From the stage to the operating theatre",
    publication: "The Times of India – NIE",
    date: "September 21, 2026",
    readTime: "4 min read",
    byline:
      "Zara Pereira, class XII, The American School of Bombay and founder of Music Connect, a research-informed music-for-wellbeing curriculum. She is collaborating with Dr Husain on “Heal the Healers”, a music intervention for caregivers in Mumbai.",
    image: "/media/publications/toi-nie-music-tool-to-heal.jpg",
    imageAlt: "Times of India NIE clipping: Music as a tool to heal",
    excerpt:
      "Drawing on an interview with Dr Farah Husain, senior anaesthesiologist and music therapist, Zara explores how music influences stress, pain and recovery — even under general anaesthesia.",
    body: [
      "For centuries, music has been used to comfort, heal and unite people. Performers take to the stage, choirs sing in unity and musicians fill auditoriums with symphonies. Today, a growing body of scientific research suggests that music may also play a significant, quantifiable role in a very different type of theatre: the operating theatre. Dr Farah Husain, a senior anaesthesiologist and music therapist at Lok Nayak Hospital & Maulana Azad Medical College, New Delhi, researches how music influences stress, pain and recovery—even while patients are under general anaesthesia.",
      "“The turning point came during the COVID-19 pandemic,” she recalls. “Before entering the intensive care units in full PPE, our team began singing prayers together. That shared ritual noticeably reduced our own anxiety.” This inspired her to introduce music to postgraduate medical students to help manage the emotional demands of their profession. “I realised that if music could help healthcare professionals manage extreme stress, why couldn’t it help patients experiencing anxiety before an operation?”",
      "Her clinical research has since found that patients exposed to music during anaesthesia demonstrate lower stress markers and more stable physiological responses. “That suggested music isn’t simply comforting,” she says. “It actively interacts with the nervous system and pain pathways.” Intriguingly, the brain can continue processing sound under anaesthesia. “We know that the auditory pathway remains intact and the auditory cortex continues to register sound,” Dr Husain explains. Patients may have no conscious awareness of hearing music during surgery yet experience reduced stress and pain responses afterwards. The precise neural networks involved remain uncertain, but advances in neuroimaging may provide answers.",
      "## Playlists on the surgery floor",
      "While slow, predictable instrumental music can reduce pre-operative anxiety, Dr Husain believes the future lies in personalisation. Music connected to memory, culture or identity may produce stronger responses. “The future may well be a hybrid approach—a clinically designed foundation that can then be personalised according to each patient’s preferences and cultural background.”",
      "## Music and medicine: the future",
      "If larger trials support current findings, music could become part of surgical care alongside interventions such as counselling and guided breathing. “It is inexpensive, non-invasive and carries virtually no risk,” Dr Husain says. “I can see prescribed playlists becoming part of anaesthetic induction, recovery and post-operative pain management.”",
      "The aim is not to replace medication, but complement it. Eventually, artificial intelligence and wearable technology could even tailor music in real time to a patient’s physiology. Music has always travelled: from recording studios to stages, across cultures and generations. Now, perhaps, to the operating theatre. Its possibilities seem boundless. What began with healthcare workers singing together during one of medicine’s darkest moments has grown into an exploration of one of humanity’s oldest therapies. As neuroscience continues to unravel the relationship between sound and the brain, music may prove to be more than comfort—it could become an instrument of healing itself.",
    ],
  },
  {
    id: "adolescent-mental-health",
    title: "Addressing Adolescent Mental Health in Schools",
    publication: "The Times of India – NIE",
    date: "March 18, 2025",
    readTime: "3 min read",
    byline: "Zara Pereira, Grade 10, American School of Bombay",
    image: "/media/publications/toi-nie-adolescent-mental-health.jpg",
    imageAlt: "Times of India NIE clipping: Addressing adolescent mental health in schools",
    excerpt:
      "An interview with UK-based Principal Clinical Psychologist Dorothy King on how school communities can better support students and how teenagers can manage school-based anxiety.",
    body: [
      "An interview with UK-based Principal Clinical Psychologist Dorothy King (BSc; MSc; DClinPsy) provided some insights on the taboo subject of mental health amongst adolescents. The dialogue shed light on how school communities can better cater towards their student’s needs and how teenagers can manage school-based anxiety or mental health concerns.",
      "## The student experience",
      "Abnormal psychology is an area of interest that I have researched, and Dr King shed further light on neuronal divergence, psychological disorders and atypical behaviour patterns, all of which are prevalent and diagnosed today. Of notable interest was how such behaviour is presented in teenagers as opposed to in adults. Dr King explained that in childhood and young adolescence, individuals struggle with self-awareness, making it much harder for them to articulate emotional and mental struggles. Individuals tend to exhibit symptoms of heightened irritability, fatigue, or lack of concentration.",
      "## Case study",
      "Dr King shared an anecdote about a young refugee boy who exhibited symptoms of exhaustion, which teachers dismissed as laziness or a lack of concentration. PTSD and trauma influenced the deeper reasons behind this behaviour. Dr King introduced a traffic light system in which individuals could silently and confidentially indicate how they were functioning in a class, particularly during episodes of detachment. The green light signified the student being able to manage their symptoms alone; amber conveyed a need for assistance; and red indicated that there was a need for help. This intervention highlighted the importance of recognising symptoms and signs accurately. It also empowered the student to identify their own needs and obstacles.",
      "## Building supportive environments",
      "This solution is plausible in any school, but to implement it successfully, schools must take the initiative to foster a sense of trust between teachers and students rather than a sense of authority.",
      "At ASB, we are lucky to have a supportive and nurturing environment where our educators recognise our needs. Students need to continue to advocate for themselves so their behaviour patterns are not misdiagnosed.",
    ],
  },
  {
    id: "why-music-matters",
    title: "Why Music Matters",
    publication: "YoungMinds",
    date: "July 28, 2026",
    readTime: "5 min read",
    byline: "Zara, 17 — resident contributor to YoungMinds",
    image: "/media/publications/youngminds-why-music-matters.jpg",
    imageAlt: "YoungMinds blog post: Why music matters",
    excerpt:
      "Zara shares her experience of music — from a Swahili lullaby sung at her cradle to the science of rhythm and calm — and how it can help your mental health.",
    body: [
      "I was born to the sound of music: the gentle tones of a Swahili love song were sung to me when my Kenyan-born grandparents visited me by my hospital cradle.",
      "The song Malaika carries my family’s cultural heritage, it traces the roots of immigrants and was carried forward to a new life in England. It also has a very soothing melody, one that any baby or adult would feel at ease with.",
      "## Music is universal",
      "Music is more than sound and a personal narrative though. For babies, music can help calm their limbic system, as they respond to the gentle emotional qualities of music. Music releases dopamine during a pleasurable musical experience, which can help make us all more attentive, alert, engaged and optimistic.",
      "For adolescents, music can be a balm, connecting people over shared interests and helping transport the mind to a better or new place. For older people, music can be nostalgic, triggering memories and helping to motivate movement.",
      "## Music is a reward",
      "Young people can really benefit from music, as the brain treats it like a reward. When we activate this system, dopamine is released, which unlocks feelings of pleasure and motivation which can be essential when we are learning, or struggling to find motivation to study or undertake a dull task. Think back to sporting events, public events and formal events: music is the common denominator. It uplifts, sets the tone, creates momentum.",
      "## Music creates a sense of calm",
      "Used in the same way for babies, the science can be extended across age groups. Science dictates that at the right tempo, music can reduce the heart rate, blood pressure and levels of the stress hormone cortisol through rhythmic entrainment syncing the heart beat with the song. It encourages the body to slow down, through encouraging slower breathing, moving the body’s reactive “fight or flight” from the sympathetic to the parasympathetic activation.",
      "Music is a great resource to set the mood before sleep, before an exam or just a resource when times feel pressured.",
      "## Music is an imprint of your journey",
      "Music is also an intangible way to document your own life story. Favourite playlists and song collections can not only reflect who you are, your roots, connections and culture, but can also document where you were at a particular moment in time. Tapping into this, and returning to song collections, can reignite memories, remind you of good times and connections, and allow you to escape into a pleasant past.",
      "## Music is a lifelong companion",
      "In the lyrics of songs and familiar or catchy melodies, we can sometimes consciously or unconsciously connect with ourselves and other people’s experiences. In times of isolation or pain, we might feel alone. However, there are many songs, whether popular or niche, that cover a myriad of social themes, reflecting our shared humanity. You are never alone when you can find a connection with a song.",
      "Music has limitations. It cannot replace formal or professional help. However, it can be part of a mental health support system or tool kit that is portable and largely free. It is part of my DNA, my everyday lived experience, and it is worth exploring if you do not use it as a daily resource. Music is so versatile that you can create preferred playlists to suit moods, experiences and emotions.",
    ],
  },
  {
    id: "double-edged-sword-add",
    title: "The Double-Edged Sword of ADD",
    publication: "YoungMinds",
    date: "June 23, 2026",
    readTime: "5 min read",
    byline: "Zara, 17 — resident contributor to YoungMinds",
    image: "/media/publications/youngminds-the-double-edged-sword-of-add.jpg",
    imageAlt: "YoungMinds blog post: The double-edged sword of ADD",
    excerpt:
      "ADD and ADHD can come with positive and negative consequences. Zara discusses her own diagnosis, hyperfixation and time blindness, and what she wishes people knew.",
    body: [
      "We hear a lot these days about ADHD and ADD. Perhaps it’s more prevalent due to our ability to diagnose it, or maybe our inattention due to social media and phone habits mirror some of the symptoms of ADD.",
      "When I received my diagnosis of ADD at the age of 14, it didn’t come as a surprise, as I knew my mind was sometimes difficult to navigate and control. The diagnosis was actually a relief, as it gave me some clarity and a lens to review my own patterns, thoughts and navigation through life.",
      "For others, like my family and my teachers, the ADD was a surprise, as I had been happily sailing through life – I had some struggles with routine, but nothing that flagged real concerns about my learning. It was only after a few investigations with my teachers, an occupational therapist, and my mum’s own diagnosis that I finally reached the stage of being assessed.",
      "## Reading the signs",
      "Looking back, all the signs were there! I was inattentive if something was not of interest to me, I was living inside my head a lot, routines were difficult for me to follow, and I would lose myself in time. I had good intentions and multiple interests, but finishing projects and tasks were a struggle.",
      "I didn’t realise at the time that appearing or presenting as a “coaster” made me internalise this narrative. My brother was “book smart” and was a great test taker. So we assumed that he was the brains of the family.",
      "The diagnosis explained why there was a gap in my ability to perform, and it has taken me a few years to turn around the narrative I had made about myself. I still carry a lot of self-doubt, despite a good grade book and my ability to study subjects with real depth.",
      "## The double-edged sword",
      "Living with ADD is a double-edged sword. It has been branded as a “superpower” by some, which of course is a positive narrative for students like myself. However, the uncertainty of how the brain is going to function and respond through the day is sometimes unsettling.",
      "On a good day, with the help of medication which I began taking two years ago, I am able to focus, manage school, pay particular attention to the subjects I love and manage through a school day. However, the additional effort that I have to use to apply myself, make sense of extensive content and activate the learning systems in my brain can sometimes result in feelings of exhaustion.",
      "Hyperfixation and time blindness: these two frenemies are often at odds with one another. In some way, hyperfixation or being locked into a subject can be great for the natural sciences. I can get buried in the study of enzymes. However, I can lose track of time and then neglect some of my other subjects that don’t light up my brain in the same way.",
      "There are parts of my personality that of course intersect with my diagnosis. I love socialising, I love talking and I love certain subjects more than others. When this collides with my brain’s alignment with areas that excite me, I can sometimes miss out on instructions or content in a subject. My brain also needs information presented to me in small chunks. Pages of information or endless slide shows become banal.",
      "## What I wish people knew about ADD",
      "I wish that people knew that living with ADD can be unpredictable. I am still learning to harness my brain. Some days it leads me and on other days, I can fully control it. This unpredictability means that my energy and focus can come in fits and starts. Inconsistency is the bane of my life! I do have perfectionist tendencies which can conflict with my ability to focus and, most recently, anxiety has joined the ADD party.",
      "I have sought help from professionals who have tried to help me build routines. However, this has often ended up futile as they suggest forming new habits and using a calendar, a diary or online tools. Here is the issue: I have a problem building and forming habits. Tools do not help me!",
      "I try now instead to run through items of the day in the evening when I get home, before bed and first thing. These verbal reminders, that I may sometimes share with a friend or family member, help me activate my working memory and navigate my day. Papers get lost, trackers get tiresome and calendars are for the corporate world! Repeating lists in my head perhaps connects with my love of rhythm and my ability to remember song lyrics!",
      "## What I’ve learned",
      "ADD/ADHD is really a very unique and personal journey, a way of navigating life. It is not always crippling, it just requires some thought, some creativity and most importantly getting to know what works for you.",
      "There are struggles that individuals with ADD have to encounter, but if you can tune in to your mind, know your patterns and learn how to optimise your brain, environment and study habits, you will find success in the paths you pursue.",
    ],
  },
];

const serif = { fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" } as const;

const ArticleMeta = ({ article }: { article: Article }) => (
  <div className="flex flex-wrap items-center gap-2">
    <span
      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide text-white"
      style={{ background: "hsl(var(--olive) / 0.8)" }}
    >
      {article.publication}
    </span>
    <span className="text-[11px] text-muted-foreground/70 font-light">{article.date}</span>
    <span className="flex items-center gap-1 text-[11px] text-muted-foreground/60 font-light">
      <Clock size={10} /> {article.readTime}
    </span>
  </div>
);

const PsychologyPublicationsPage = () => {
  const [selected, setSelected] = useState<Article | null>(null);
  const [zoomImage, setZoomImage] = useState<Article | null>(null);

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

      <div className="relative z-10 px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <BookOpen size={28} strokeWidth={1.2} className="text-muted-foreground/60" />
              <h1 className="text-4xl md:text-6xl font-light text-foreground" style={serif}>
                Published Work
              </h1>
            </div>
            <motion.p
              className="text-base italic text-muted-foreground font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              The Times of India · YoungMinds
            </motion.p>
            <motion.div
              className="w-24 h-px mx-auto mt-4"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--olive) / 0.5), transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          {/* Articles */}
          <div className="space-y-8">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-4 md:p-5 grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-6"
                style={{
                  boxShadow:
                    "0 10px 36px -10px hsl(var(--shadow-color) / 0.14), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                }}
              >
                {/* Screenshot */}
                <button
                  type="button"
                  onClick={() => setZoomImage(article)}
                  className="group relative flex items-center justify-center overflow-hidden rounded-xl border border-border/20 bg-white"
                  aria-label={`Enlarge: ${article.imageAlt}`}
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    className="w-full h-full max-h-[460px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-light text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={10} /> Enlarge
                  </span>
                </button>

                {/* Details */}
                <div className="flex flex-col py-1 md:py-3 md:pr-3">
                  <div className="mb-3">
                    <ArticleMeta article={article} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-light text-foreground leading-snug mb-3" style={serif}>
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelected(article)}
                    className="mt-auto self-start inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-foreground text-background text-xs font-light tracking-wide hover:opacity-90 transition-opacity"
                  >
                    Read full article <ArrowRight size={12} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Full article reader */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 md:p-8"
            style={{ background: "hsl(var(--background) / 0.9)", backdropFilter: "blur(16px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="relative bg-card border border-border/30 rounded-2xl max-w-3xl w-full my-4 p-6 md:p-10"
              style={{ boxShadow: "0 24px 80px hsl(var(--shadow-color) / 0.18)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors"
              >
                <X size={14} className="text-foreground" />
              </button>

              <div className="mb-3 pr-10">
                <ArticleMeta article={selected} />
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-foreground leading-snug mb-6" style={serif}>
                {selected.title}
              </h2>

              <img
                src={selected.image}
                alt={selected.imageAlt}
                className="w-full rounded-xl border border-border/20 mb-8"
              />

              <div className="space-y-4">
                {selected.body.map((para) =>
                  para.startsWith("## ") ? (
                    <h3 key={para} className="text-lg font-light text-foreground pt-2" style={serif}>
                      {para.slice(3)}
                    </h3>
                  ) : (
                    <p key={para} className="text-sm text-muted-foreground font-light leading-relaxed">
                      {para}
                    </p>
                  ),
                )}
              </div>

              <p className="mt-8 pt-5 border-t border-border/30 text-xs text-muted-foreground/80 font-light italic leading-relaxed">
                — {selected.byline}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enlarged screenshot */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ background: "hsl(var(--background) / 0.92)", backdropFilter: "blur(16px)" }}
            onClick={() => setZoomImage(null)}
          >
            <button
              onClick={() => setZoomImage(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
            >
              <X size={16} className="text-foreground" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={zoomImage.image}
              alt={zoomImage.imageAlt}
              className="max-h-full max-w-full rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PsychologyPublicationsPage;
