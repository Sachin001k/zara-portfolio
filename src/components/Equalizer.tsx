const Equalizer = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-end gap-[3px] h-6 ${className}`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className="w-[3px] bg-coral rounded-full equalizer-bar"
        style={{ height: "8px" }}
      />
    ))}
  </div>
);

export default Equalizer;
