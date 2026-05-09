import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronsLeftRight } from "lucide-react";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Antes",
  afterAlt = "Depois",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!draggingRef.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      updateFromClientX(x);
    };
    const onUp = () => (draggingRef.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [updateFromClientX]);

  const startDrag = (clientX: number) => {
    draggingRef.current = true;
    updateFromClientX(clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-gold/25"
      style={{
        boxShadow:
          "0 30px 80px -20px rgba(212,175,55,0.35), 0 0 0 1px rgba(212,175,55,0.15) inset",
      }}
      onMouseDown={(e) => startDrag(e.clientX)}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
    >
      {/* After image (base) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        draggable={false}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Before image (clipped) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        draggable={false}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* Badges */}
      <div
        className="pointer-events-none absolute left-4 top-4 rounded-full border border-gold/40 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur-md transition-opacity duration-200"
        style={{ opacity: pos > 12 ? 1 : 0 }}
      >
        Antes
      </div>
      <div
        className="pointer-events-none absolute right-4 top-4 rounded-full border border-gold/40 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur-md transition-opacity duration-200"
        style={{ opacity: pos < 88 ? 1 : 0 }}
      >
        Depois
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 w-[2px]"
        style={{
          left: `${pos}%`,
          transform: "translateX(-50%)",
          background:
            "linear-gradient(to bottom, transparent, #ffdf73 15%, #d4af37 50%, #ffdf73 85%, transparent)",
          boxShadow: "0 0 12px rgba(212,175,55,0.7)",
        }}
      />

      {/* Handle */}
      <button
        type="button"
        aria-label="Arraste para comparar"
        onMouseDown={(e) => {
          e.stopPropagation();
          startDrag(e.clientX);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          startDrag(e.touches[0].clientX);
        }}
        className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full active:cursor-grabbing"
        style={{
          left: `${pos}%`,
          background: "linear-gradient(135deg, #ffdf73 0%, #d4af37 60%, #8a6d1d 100%)",
          boxShadow:
            "0 0 0 4px rgba(5,10,21,0.85), 0 0 24px rgba(212,175,55,0.6)",
        }}
      >
        <ChevronsLeftRight className="h-5 w-5" strokeWidth={2.2} color="#050a15" />
      </button>
    </div>
  );
}
