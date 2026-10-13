import { useState } from "react";

type InlineVideoProps = {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
};

const formatDuration = (seconds: number) => {
  const total = Math.round(seconds);
  const mins = Math.floor(total / 60);
  const secs = total % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

/** Self-hosted video with poster and a duration badge (loads metadata only until played). */
const InlineVideo = ({ src, poster, title, className = "" }: InlineVideoProps) => {
  const [duration, setDuration] = useState<number | null>(null);

  return (
    <div className={`relative overflow-hidden rounded-xl border border-border/20 bg-black ${className}`}>
      <video
        src={src}
        poster={poster}
        title={title}
        controls
        playsInline
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        className="w-full aspect-video object-contain"
      />
      {duration !== null && Number.isFinite(duration) && (
        <span className="pointer-events-none absolute top-2 right-2 rounded-md bg-black/75 px-1.5 py-0.5 text-[11px] font-medium text-white tabular-nums">
          {formatDuration(duration)}
        </span>
      )}
    </div>
  );
};

export default InlineVideo;
