import { Play } from "lucide-react";
import { getSchoolVideoUrl } from "@/data/schoolsSessions";

type GooglePhotosVideoProps = {
  photoId?: string;
  href?: string;
  label?: string;
  poster?: string;
};

const GooglePhotosVideo = ({ photoId, href, label, poster }: GooglePhotosVideoProps) => {
  const url = href || (photoId ? getSchoolVideoUrl(photoId) : "#");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-xl border border-border/30 bg-muted/20 aspect-video"
      aria-label={label ?? "Watch session video"}
    >
      {poster ? (
        <img
          src={poster}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-olive/10 via-blush/10 to-muted/30" />
      )}
      <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg transition-transform group-hover:scale-105">
          <Play size={22} className="ml-0.5 text-coral" fill="currentColor" />
        </span>
        <span className="text-xs font-light tracking-wide px-4 text-center">
          {label ?? "Watch video of Zara singing or teaching"}
        </span>
      </div>
    </a>
  );
};

export default GooglePhotosVideo;
