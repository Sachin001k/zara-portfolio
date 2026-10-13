// Shared background (grid paper, glow orbs, wave lines) for the photography pages.
const PhotographyBackdrop = () => (
  <>
    <div className="absolute inset-0 grid-paper-bg" />
    <div
      className="glow-orb"
      style={{
        width: 300,
        height: 300,
        top: "8%",
        right: "4%",
        background: "radial-gradient(circle, hsl(35 60% 55% / 0.1), transparent 70%)",
      }}
    />
    <div
      className="glow-orb"
      style={{
        width: 240,
        height: 240,
        bottom: "15%",
        left: "5%",
        background: "radial-gradient(circle, hsl(140 35% 50% / 0.08), transparent 70%)",
        animationDelay: "2.5s",
      }}
    />

    {/* Wave top */}
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
        stroke="hsl(35 50% 65%)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.2"
      />
    </svg>
  </>
);

export default PhotographyBackdrop;
