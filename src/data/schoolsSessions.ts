import { googlePhotosMediaUrl } from "./googlePhotos";

export type SchoolSession = {
  id: string;
  name: string;
  date: string;
  paragraphs: string[];
  highlights?: string[];
  images?: string[];
  galleryUrl?: string;
  /** Google Photos share photo IDs (legacy album embeds) */
  videoIds?: string[];
  /** Full Google Photos album / video share URLs */
  videoUrls?: string[];
};

/** Doc order — chronological narrative from Zara's website */
export const schoolSessions: SchoolSession[] = [
  {
    id: "sara-dsouza",
    name: "Internship with Music Therapist Sara D'Souza",
    date: "August 2024 – March 2025",
    paragraphs: [
      "Ms D'Souza was kind enough to open up her private music therapy sessions to me. This internship was the catalyst for my interest in the intersection of music and psychology. I was given opportunities to observe, learn and even lead sessions. It was here that I formed a very special bond with a student, who was largely non-communicative, but who one day decided to call me \"Mama\" alongside her mother and Ms D'Souza.",
    ],
    images: ["/media/doc3/image1.jpg"],
  },
  {
    id: "music-circle",
    name: "The Music Circle",
    date: "September 2025",
    paragraphs: [
      "Under the supervision of Priyanka Pandit.",
      "Leading some Music Connect activities and observing an expert practitioner.",
    ],
    images: ["/media/image3.jpg"],
  },
  {
    id: "share-the-music-asr",
    name: "Share the Music CSR, American School of Bombay",
    date: "August 2025 to present",
    paragraphs: [
      "Music Connect: Launch of the Curriculum in Share the Music CSR, American School of Bombay.",
      "Leading Music for Wellness Activities for the children of Happy Feet HOME.",
    ],
    images: ["/media/image4.jpg", "/media/image10.jpg"],
  },
  {
    id: "happy-feet-home",
    name: "Day Visit to Happy Feet Home",
    date: "October 2025",
    paragraphs: [
      "This visit to the Happy Feet Home was instrumental in Zara learning more about the lived experiences of the students she worked with. She learned about the care, struggles and extensive support the children of this NGO receive. The need to use music as a tool to escape, uplift and connect people became even more relevant.",
    ],
    images: ["/media/image9.jpg"],
  },
  {
    id: "teacher-training-asr",
    name: "Teacher Training Academy at The American School of Bombay",
    date: "January 2026",
    paragraphs: [
      "The first student to ever lead a session for teachers from The State of Maharashtra.",
      "60 teachers came from around the region to learn skills from technical experts.",
      "Each unit of the Music Connect curriculum was taught and experienced by teachers and it now reaches multiple schools across the region.",
    ],
    images: ["/media/image11.jpg", "/media/image6.jpg"],
    videoIds: ["AF1QipP9NZbJaJ7EKDWxoQQGreyY29uDh3Ubk6kONKqr"],
  },
  {
    id: "akanksha-school",
    name: "Akanksha School, NGO, Mumbai",
    date: "November 2025 to present",
    paragraphs: [
      "It was here that Zara found herself as a leader, a mentor and a friend to the young students of this progressive school. The connections made and the experience of sharing musical skills together left an indelible impact. Zara will continue to work with this school during the school year 2026/7.",
    ],
    highlights: [
      "Working with students on the Music for Wellness Curriculum",
      "Voice coach for The Sound of Music production",
    ],
    images: [
      "/media/image14.jpg",
      "/media/image5.jpg",
      "/media/image12.jpg",
      "/media/image13.jpg",
      "/media/image1.jpg",
    ],
    galleryUrl: "https://photos.app.goo.gl/oCZssnrZMMqXndLD7",
  },
  {
    id: "aseema-school",
    name: "Aseema School, NGO, Mumbai",
    date: "January 2026 to April 2026",
    paragraphs: [
      "Zara spent time engaging with students in the build up to and during their exam season. Students benefitted from being grounded in the present, moving their minds away from their studies and immersing themselves in the activities.",
    ],
    images: ["/media/doc3/image2.jpg"],
  },
  {
    id: "vipla-foundation",
    name: "Vipla Foundation",
    date: "April 2026",
    paragraphs: [
      "I was lucky enough to interact with the students and teachers of Vipla Foundation in BKC. Here my curriculum was adapted to meet the needs of non-verbal students. Music was the bridge that brought the group together.",
    ],
    images: ["/media/doc3/image4.jpg"],
  },
  {
    id: "solve-day-asr",
    name: "Solve Day, Session Leader at The American School of Bombay",
    date: "Solve Day",
    paragraphs: [
      "Zara adapted her curriculum for students from Grade 6 to 12 at her school in order to introduce music as a form of healing, to relieve anxiety and provide a means of escapism. Students participated willingly in the activities and collectively made a shared playlist to meet different emotional needs.",
    ],
    images: ["/media/image7.jpg"],
    videoIds: ["AF1QipNrReqTrbhCw85d1yrKKaLoHBBMY0-ZC0Rq5EZg"],
  },
  {
    id: "st-anthonys",
    name: "St Anthony's Home for the Aged",
    date: "November 2025 – present",
    paragraphs: [
      "Zara visits the residents from this home for the aged and conducts regular sing-a-long sessions based on shared songs, requests and hymns. Many residents have requested their favourite songs and enjoy their time with Zara. This has been a rewarding experience, as there are many residents who come to life during these moments. Some non-communicative residents tap along, sway and smile to the beat and melodies of these songs.",
    ],
    images: ["/media/image15.jpg"],
    videoIds: ["AF1QipOsniF-obU-SQQokBAnZ89aAsS06A3Cg1us9H_H"],
  },
  {
    id: "heavers",
    name: "Heavers Day Care Services",
    date: "June to July 2026",
    paragraphs: [
      "My time at Heavers Day Care Services was meaningful as it is a Dementia Day Care centre which my Grandmother visits. It was a deeply personal and uplifting experience to bring my curriculum to the carers at the centre and for grandmother to enjoy watching me conduct the sessions for her companions. The carers are now implementing my curriculum.",
    ],
    images: ["/media/doc3/image6.jpg", "/media/doc3/image7.jpg"],
  },
  {
    id: "sage-eldercare",
    name: "Sage Eldercare, New Jersey",
    date: "July 2026",
    paragraphs: [
      "I interned at Sage Eldercare in New Jersey in July 2026. It was here that I was fortunate to introduce my curriculum, with some adaptations for the population. I also worked alongside a trained music therapist who taught me in collaborative song writing sessions with the residents.",
    ],
    images: ["/media/doc3/image3.jpg"],
    videoUrls: [
      "https://photos.app.goo.gl/TLuSXERqVShHtp2BA",
      "https://photos.app.goo.gl/PrwR6tdG7iV8xDRW7",
    ],
  },
];

export const musicConnectReach = {
  teachers: [
    { label: "Akanksha", count: 22 },
    { label: "Aseema", count: 20 },
    { label: "ASB Teaching Academy", count: 15 },
    { label: "Vipla", count: 10 },
  ],
  adultInstructors: 15,
  studentsAndAdults: 1050,
} as const;

export function getSchoolVideoUrl(photoId: string) {
  return googlePhotosMediaUrl(photoId);
}
