import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/557799553395"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7"
    >
      {/* Pulsing rings */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: "rgba(212,175,55,0.5)",
          animation: "wa-ping 2s cubic-bezier(0,0,0.2,1) infinite",
        }}
      />
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: "rgba(212,175,55,0.35)",
          animation: "wa-ping 2s cubic-bezier(0,0,0.2,1) infinite 1s",
        }}
      />

      {/* Button */}
      <motion.span
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16"
        style={{
          background: "linear-gradient(135deg, #ffdf73 0%, #d4af37 55%, #8a6d1d 100%)",
          boxShadow:
            "0 10px 30px -6px rgba(212,175,55,0.6), 0 0 0 4px rgba(5,10,21,0.85), inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
      >
        <MessageCircle
          className="h-7 w-7 sm:h-8 sm:w-8"
          strokeWidth={2.2}
          color="#0a0f1d"
        />
      </motion.span>

      <style>{`
        @keyframes wa-ping {
          0% { transform: scale(1); opacity: 0.7; }
          80%, 100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </motion.a>
  );
}
