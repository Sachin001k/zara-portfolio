import { Binoculars, Leaf, Plane, Sun, type LucideIcon } from "lucide-react";

export type Category = "Wildlife" | "Journeys" | "Botanicals" | "Sunsets";

export type Photo = {
  id: number;
  category: Category;
  title: string;
  location: string;
  caption: string;
  image: string;
  alt: string;
};

export const photos: Photo[] = [
  {
    id: 1,
    category: "Wildlife",
    title: "Tiger Close-Up",
    location: "Kabini, India",
    caption: "A tiger moving through dry forest with that unmistakable stare of pure focus.",
    image: "/photography/tiger-closeup.webp",
    alt: "Tiger standing in a forest clearing beside a large tree trunk.",
  },
  {
    id: 2,
    category: "Wildlife",
    title: "Safari Jeep",
    location: "Forest Track",
    caption: "A safari vehicle parked deep in the woods, waiting for the next sighting.",
    image: "/photography/safari-jeep.webp",
    alt: "A safari jeep parked on a dirt path in a forest.",
  },
  {
    id: 4,
    category: "Wildlife",
    title: "Tiger by the Tree",
    location: "Kabini, India",
    caption: "A tiger stretching into a tree trunk, all muscle and motion.",
    image: "/photography/tiger-on-tree.webp",
    alt: "A tiger bracing itself against a tree trunk in a forest.",
  },
  {
    id: 5,
    category: "Sunsets",
    title: "City Sunset",
    location: "Mumbai, India",
    caption: "A warm pink-orange sky falling over the skyline at dusk.",
    image: "/photography/city-sunset.webp",
    alt: "A city skyline silhouetted against a pink and orange sunset.",
  },
  {
    id: 6,
    category: "Journeys",
    title: "Sake Barrel Wall",
    location: "Tokyo, Japan",
    caption: "A long wall of ceremonial barrels catching afternoon light near the trees.",
    image: "/photography/sake-barrel-wall.webp",
    alt: "A long wall stacked with sake barrels beside a pathway and trees.",
  },
  {
    id: 7,
    category: "Journeys",
    title: "Cherry Blossom Street",
    location: "Tokyo, Japan",
    caption: "Spring in full bloom, with people pausing beneath a cherry tree canopy.",
    image: "/photography/cherry-blossom-street.webp",
    alt: "A pink cherry blossom tree on a city street with people standing nearby.",
  },
  {
    id: 10,
    category: "Botanicals",
    title: "Flower Market Bouquet",
    location: "Flower Market",
    caption: "Fresh blooms gathered into a generous basket of saturated colour.",
    image: "/photography/flower-market-bouquet.webp",
    alt: "A basket filled with bright flowers at a market stall.",
  },
  {
    id: 14,
    category: "Botanicals",
    title: "Orchid Macro",
    location: "Garden Walk",
    caption: "An intimate close-up of an orchid-like bloom against dark bark.",
    image: "/photography/orchid-macro.webp",
    alt: "A soft-focus flower hanging in front of a tree trunk.",
  },
  {
    id: 15,
    category: "Botanicals",
    title: "Plumeria Bloom",
    location: "Tropical Garden",
    caption: "Plumeria petals glowing in pink, orange, and gold.",
    image: "/photography/plumeria-bloom.webp",
    alt: "A cluster of vibrant plumeria flowers in pink and orange tones.",
  },
  {
    id: 16,
    category: "Botanicals",
    title: "Red Poppies",
    location: "Garden Border",
    caption: "Red poppies rising through green stems in sharp midday light.",
    image: "/photography/red-poppy-field.webp",
    alt: "Red poppies and green seed pods in a sunlit garden.",
  },
  {
    id: 17,
    category: "Botanicals",
    title: "Lavender Macro",
    location: "Herb Garden",
    caption: "Tiny purple blossoms with a visitor resting at the centre.",
    image: "/photography/lavender-macro.webp",
    alt: "A close-up of purple lavender flowers with a small insect on them.",
  },
  {
    id: 18,
    category: "Botanicals",
    title: "Allium Garden",
    location: "Botanical Garden",
    caption: "A sculptural field of allium blooms with soft green stems behind them.",
    image: "/photography/allium-garden.webp",
    alt: "A garden of round purple and white allium flowers on long stems.",
  },
  {
    id: 19,
    category: "Sunsets",
    title: "Palm Silhouettes",
    location: "Coastal Evening",
    caption: "Palm fronds framed against a burnt-orange sky as the sun slips away.",
    image: "/photography/sunset-palm-silhouette.jpg",
    alt: "Silhouetted palm trees against an orange sunset sky.",
  },
  {
    id: 20,
    category: "Sunsets",
    title: "Harbour Glow",
    location: "Waterfront",
    caption: "A band of fiery orange over the water, with hills fading into blue.",
    image: "/photography/sunset-harbour-glow.jpg",
    alt: "An orange sunset glowing over a harbour and distant hills.",
  },
  {
    id: 21,
    category: "Sunsets",
    title: "Sun over the Sea",
    location: "Beach",
    caption: "A pale sun hanging low above rolling waves.",
    image: "/photography/sunset-sun-over-sea.jpg",
    alt: "A low sun above the sea with waves breaking on the shore.",
  },
  {
    id: 22,
    category: "Sunsets",
    title: "Storm-lit Sky",
    location: "City Rooftops",
    caption: "Heavy clouds parting to let the last light burn through.",
    image: "/photography/sunset-storm-clouds.jpg",
    alt: "Dramatic dark clouds with orange light breaking through at sunset.",
  },
  {
    id: 23,
    category: "Sunsets",
    title: "Golden Reflection",
    location: "Lakeside",
    caption: "The setting sun mirrored perfectly in still water.",
    image: "/photography/sunset-lake-reflection.jpg",
    alt: "A setting sun reflected in a calm lake framed by trees.",
  },
  {
    id: 24,
    category: "Sunsets",
    title: "Under the Tree",
    location: "Lakeside",
    caption: "Branches arching over a glowing sun at the water's edge.",
    image: "/photography/sunset-tree-silhouette.jpg",
    alt: "A tree silhouetted against a golden sunset over water.",
  },
];

export const categories: Category[] = ["Wildlife", "Journeys", "Botanicals", "Sunsets"];

export const categoryMeta: Record<
  Category,
  { icon: LucideIcon; accent: string; cover: string; blurb: string }
> = {
  Wildlife: {
    icon: Binoculars,
    accent: "hsl(35 65% 52%)",
    cover: "/photography/tiger-closeup.webp",
    blurb: "Tigers, trails and safari mornings in India's forests.",
  },
  Journeys: {
    icon: Plane,
    accent: "hsl(210 28% 46%)",
    cover: "/photography/cherry-blossom-street.webp",
    blurb: "Streets, rituals and small moments from travels abroad.",
  },
  Botanicals: {
    icon: Leaf,
    accent: "hsl(140 35% 48%)",
    cover: "/photography/plumeria-bloom.webp",
    blurb: "Close-ups of blooms, petals and garden textures.",
  },
  Sunsets: {
    icon: Sun,
    accent: "hsl(var(--coral))",
    cover: "/photography/city-sunset.webp",
    blurb: "Evening skies in pink, orange and gold.",
  },
};

export const collectionSlug = (category: Category) => category.toLowerCase();

export const categoryFromSlug = (slug: string | undefined) =>
  categories.find((c) => collectionSlug(c) === slug);

export const photosIn = (category: Category) => photos.filter((p) => p.category === category);
