const MarqueeText = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`overflow-hidden py-2 ${className}`}>
    <div className="marquee-text text-6xl md:text-8xl lg:text-9xl font-light text-outline uppercase tracking-wider select-none">
      {text}&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;
    </div>
  </div>
);

export default MarqueeText;
