import logoImage from "@/assets/logo.webp";

export function Logo({ size = 88 }: { size?: number }) {
  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute -inset-3 rounded-full opacity-50 blur-2xl"
        style={{ background: "radial-gradient(circle, #d4af37, transparent 70%)" }}
      />
      <img
        src={logoImage}
        alt="Luan Navarro"
        width={size}
        height={size}
        decoding="async"
        fetchPriority="high"
        className="relative h-full w-full object-contain"
        style={{ filter: "drop-shadow(0 4px 20px rgba(212,175,55,0.35))" }}
      />
    </div>
  );
}
