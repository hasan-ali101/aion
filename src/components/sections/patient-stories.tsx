import { useState } from "react";

const patients = [
  {
    videoId: "sXopFu_eiJA",
    placeholder: "/images/jonny-t.jpg",
    name: "Jonny T, 43",
    condition: "PTSD + Anxiety",
    stats: [
      { label: "Anxiety",    pct: "-22.2%", before: { score: 18, severity: "Severe" },   after: { score: 14, severity: "Moderate" } },
      { label: "Depression", pct: "-47.8%", before: { score: 23, severity: "Severe" },   after: { score: 12, severity: "Moderate" } },
    ],
  },
  {
    videoId: "dQw4w9WgXcQ",
    name: "Sarah M, 38",
    condition: "Depression + PTSD",
    stats: [
      { label: "Anxiety",    pct: "-38%",   before: { score: 21, severity: "Severe" },   after: { score: 13, severity: "Moderate" } },
      { label: "Depression", pct: "-50%",   before: { score: 20, severity: "Severe" },   after: { score: 10, severity: "Mild" } },
    ],
  },
];

const C = {
  dark:   "#1F3D2D",
  teal:   "#00796B",
  bg:     "#F4F6F4",
  border: "rgba(31,61,45,0.08)",
  muted:  "#8C9490",
};

const BAR_AREA = 80;

type StatData = { score: number; severity: string };
type Stat = { label: string; pct: string; before: StatData; after: StatData };

function StatPanel({ s, borderLeft }: { s: Stat; borderLeft: boolean }) {
  const maxScore = Math.max(s.before.score, s.after.score) * 1.15;
  const cols = [
    { data: s.before, bg: "#E5E7EB", textColor: "#6B7280", scoreColor: "#6B7280", weight: 500, colLabel: "Before" },
    { data: s.after,  bg: C.teal,   textColor: "white",    scoreColor: C.dark,   weight: 700, colLabel: "After"  },
  ];
  return (
    <div style={{ flex: 1, padding: "16px 20px 14px", borderLeft: borderLeft ? `1px solid ${C.border}` : "none" }}>
      {/* Header row: label left, big percentage right */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: C.dark, letterSpacing: "0.06em", textTransform: "uppercase" as const }}>{s.label}</p>
        <p style={{ margin: 0, fontSize: 22, fontWeight: 700, color: C.teal, lineHeight: 1 }}>{s.pct}</p>
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-end", height: BAR_AREA + 32 }}>
        {cols.map(({ data, bg, textColor, scoreColor, weight, colLabel }) => {
          const barPx = Math.round((data.score / maxScore) * BAR_AREA);
          return (
            <div key={colLabel} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end" }}>
              <span style={{ fontSize: 12, fontWeight: weight, color: scoreColor, lineHeight: 1, marginBottom: 4 }}>
                {data.score}
              </span>
              <div style={{
                width: "100%",
                height: barPx,
                background: bg,
                borderRadius: "4px 4px 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{ fontSize: 9, fontWeight: 600, color: textColor, textAlign: "center" as const, padding: "0 3px", lineHeight: 1.2 }}>
                  {data.severity}
                </span>
              </div>
              <span style={{ marginTop: 5, fontSize: 9, fontWeight: 600, color: C.muted, letterSpacing: "0.06em", textTransform: "uppercase" as const }}>
                {colLabel}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PatientTestimonials() {
  const [cur, setCur]         = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hoverCTA,  setHoverCTA]  = useState(false);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  const p = patients[cur];

  function goTo(idx: number) {
    if (idx < 0 || idx >= patients.length) return;
    setCur(idx);
    setPlaying(false);
  }

  const arrowBtns = [
    { dir: -1, pts: "15 18 9 12 15 6", disabled: cur === 0,                   hover: hoverPrev, setHover: setHoverPrev },
    { dir:  1, pts: "9 18 15 12 9 6",  disabled: cur === patients.length - 1, hover: hoverNext, setHover: setHoverNext },
  ];

  return (
    <section style={{ fontFamily: "'Montserrat', sans-serif", background: C.bg, padding: "60px 40px", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Montserrat:wght@400;500&display=swap');
        .pt-thumb { overflow: hidden; }
        .pt-thumb:hover img { transform: scale(1.03) !important; }
        .pt-play:hover { background: ${C.teal} !important; border-color: ${C.teal} !important; transform: translate(-50%,-50%) scale(1.1) !important; }
      `}</style>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 34, fontWeight: 700, color: C.dark, marginBottom: 32, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
          Hear from some of{" "}<span style={{ color: C.teal }}>our patients</span>
        </h2>
        <div style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 40px rgba(31,61,45,0.10)", border: `1px solid ${C.border}` }}>
          {/* Video */}
          <div
            className="pt-thumb"
            onClick={() => setPlaying(true)}
            style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: C.dark, cursor: "pointer" }}
          >
            {playing ? (
              <iframe
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                src={`https://www.youtube.com/embed/${p.videoId}?autoplay=1&rel=0`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={p.placeholder ?? `https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`}
                  onError={e => {
                    const el = e.currentTarget as HTMLImageElement;
                    if (!p.placeholder && el.src.includes("maxresdefault")) {
                      el.src = `https://img.youtube.com/vi/${p.videoId}/hqdefault.jpg`;
                    } else if (!p.placeholder) {
                      el.style.display = "none";
                    }
                  }}
                  alt=""
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", transition: "transform 0.5s ease", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,40,28,0.82) 0%, rgba(20,40,28,0.12) 50%, transparent 80%)", pointerEvents: "none" }} />
                <div className="pt-play" style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                  width: 64, height: 64, borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  backdropFilter: "blur(8px)", transition: "all 0.25s ease",
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 3 }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div style={{ position: "absolute", bottom: 22, left: 24, zIndex: 2 }}>
                  <p style={{ fontFamily: "'Sora', sans-serif", color: "white", fontSize: 18, fontWeight: 700, margin: 0, lineHeight: 1.2, textShadow: "0 1px 14px rgba(0,0,0,0.4)" }}>{p.name}</p>
                  <span style={{ display: "inline-block", marginTop: 7, background: C.teal, color: "white", fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.04em", textTransform: "uppercase" }}>{p.condition}</span>
                </div>
              </>
            )}
          </div>
          {/* Stats */}
          <div style={{ display: "flex", borderTop: `1px solid ${C.border}` }}>
            {p.stats.map((s, i) => <StatPanel key={i} s={s} borderLeft={i > 0} />)}
          </div>
        </div>
        {/* Nav */}
        <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {patients.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{ width: i === cur ? 26 : 8, height: 8, borderRadius: 100, border: "none", padding: 0, cursor: "pointer", background: i === cur ? C.teal : "#C8CEC9", transition: "all 0.3s ease" }} />
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {arrowBtns.map(({ dir, pts, disabled, hover, setHover }) => (
              <button key={dir} onClick={() => goTo(cur + dir)} disabled={disabled}
                onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                style={{ width: 40, height: 40, borderRadius: "50%", border: `1px solid ${hover && !disabled ? C.teal : "rgba(31,61,45,0.18)"}`, background: hover && !disabled ? C.teal : "white", color: hover && !disabled ? "white" : C.dark, display: "flex", alignItems: "center", justifyContent: "center", cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.2 : 1, transition: "all 0.2s ease", padding: 0 }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polyline points={pts} />
                </svg>
              </button>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div style={{ marginTop: 16 }}>
          <a href="#team" onMouseEnter={() => setHoverCTA(true)} onMouseLeave={() => setHoverCTA(false)}
            style={{ fontFamily: "'Sora', sans-serif", display: "inline-flex", alignItems: "center", gap: 8, background: hoverCTA ? C.teal : C.dark, color: "white", fontSize: 13, fontWeight: 600, padding: "12px 28px", borderRadius: 100, textDecoration: "none", boxShadow: hoverCTA ? "0 8px 28px rgba(0,121,107,0.32)" : "0 4px 20px rgba(31,61,45,0.22)", transform: hoverCTA ? "translateY(-1px)" : "translateY(0)", transition: "all 0.2s ease", letterSpacing: "0.01em" }}
          >
            Meet the team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
