import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  Instagram,
  Users,
  Dna,
  Microscope,
  Stethoscope,
  Sparkles,
  ClipboardEdit,
  ShieldCheck,
  TrendingUp,
  ZoomIn,
  Target,
  Shield,
  UserCheck,
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Reveal, staggerContainer, staggerItem } from "@/components/Reveal";
import { Logo } from "@/components/Logo";
import doctorImage from "@/assets/doctor.webp";
import doctorHero from "@/assets/doctor-hero.webp";
import footerLogo from "@/assets/footer-logo.webp";
import manBefore from "@/assets/man-before.webp";
import manAfter from "@/assets/man-after.webp";
import womanBefore from "@/assets/woman-before.webp";
import womanAfter from "@/assets/woman-after.webp";

const services = [
  { icon: Users, title: "Queda de cabelo masculina e feminina" },
  { icon: Dna, title: "Calvície androgenética" },
  { icon: Microscope, title: "Avaliação capilar e tricologia médica" },
  { icon: ClipboardEdit, title: "Planejamento e acompanhamento para transplante capilar" },
  { icon: ShieldCheck, title: "Acompanhamento pós-transplante capilar" },
  { icon: TrendingUp, title: "Tratamentos clínicos para fortalecimento capilar" },
  { icon: ZoomIn, title: "Avaliação de falhas, rarefação e afinamento dos fios" },
];

export default function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* HERO — full width */}
      <section className="relative isolate min-h-[100vh] w-full overflow-hidden">
        {/* Doctor portrait — right side, masked fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full md:w-[65%] lg:w-[55%]">
          <img
            src={doctorHero}
            alt=""
            aria-hidden="true"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover object-right"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.85) 65%, black 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.85) 65%, black 100%)",
            }}
          />
          {/* Dark overlay so portrait recedes */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.55) 45%, rgba(2,6,23,0.35) 100%)",
            }}
          />
        </div>

        {/* Subtle gold ambient glow — single, restrained */}
        <div
          className="pointer-events-none absolute -top-40 left-1/3 -z-0 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.45), transparent 70%)" }}
        />

        {/* Logo — top-left corner */}
        <div className="absolute left-6 top-6 z-20 sm:left-10 sm:top-8 lg:left-16">
          <Reveal>
            <div className="md:hidden"><Logo size={88} /></div>
            <div className="hidden md:block"><Logo size={123} /></div>
          </Reveal>
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-center px-6 py-20 pt-40 sm:px-10 sm:pt-48 lg:px-16 lg:pt-56">
          <div className="max-w-2xl">
            <Reveal delay={0.15}>
              <p className="mt-8 text-[11px] uppercase tracking-[0.45em] text-gold/80">
                Tricologia — Transplante Capilar
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Cuidado médico para{" "}
                <span className="text-gold italic">queda de cabelo</span>, calvície e saúde capilar.
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-col gap-1">
                <p className="font-serif text-xl text-foreground/95">Dr. Luan Navarro</p>
                <p className="text-xs tracking-[0.3em] text-muted-foreground">
                  MÉDICO — CRM/BA 41925
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="mt-10 flex justify-center md:justify-start">
                <motion.a
                  href="https://wa.me/557799553395"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="led-border led-border-pill relative inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide text-foreground sm:text-base"
                >
                  <MessageCircle className="h-5 w-5 text-gold" />
                  <span>Agendar consulta pelo WhatsApp</span>
                </motion.a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
        <Reveal>
          <div className="gold-divider mx-auto w-40" />
        </Reveal>

        {/* ABOUT */}
        <section className="mt-24 sm:mt-32">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <div className="led-border relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={doctorImage}
                  alt="Dr. Luan Navarro"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-[2px] h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-[calc(1rem-2px)] object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Sobre</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                  Avaliação <span className="text-gold italic">individualizada</span> e ética.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Sou o Dr. Luan Navarro, médico com atuação voltada ao cuidado capilar, queda de
                  cabelo, calvície e transplante capilar. Meu objetivo é oferecer uma avaliação
                  individualizada, buscando identificar as possíveis causas da queda capilar e
                  orientar o melhor plano de tratamento para cada paciente, de forma ética, segura
                  e baseada em critérios médicos.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-6 flex items-center gap-3 text-sm text-gold/90">
                  <Stethoscope className="h-4 w-4" />
                  <span className="tracking-wider">CRM/BA 41925</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WHY — Value Proposition */}
        <section className="mt-28 sm:mt-36">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl leading-tight sm:text-4xl">
              Por que buscar <span className="text-gold italic">ajuda médica</span> especializada?
            </h2>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="mt-12 grid gap-5 md:grid-cols-3"
          >
            {[
              {
                icon: Target,
                title: "Diagnóstico Preciso",
                text: "Identificamos a causa real da sua queda capilar antes que você gaste tempo e dinheiro com tratamentos ineficazes.",
              },
              {
                icon: Shield,
                title: "Segurança e Tecnologia",
                text: "Procedimentos realizados com protocolos médicos atualizados, garantindo a sua saúde e segurança em cada etapa.",
              },
              {
                icon: UserCheck,
                title: "Resgate da Autoestima",
                text: "Um planejamento individualizado com foco em resultados estéticos naturais, devolvendo a sua confiança ao se olhar no espelho.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-white/[0.03] p-7 backdrop-blur-md transition-colors duration-300 hover:border-gold/50"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
              >
                <div
                  className="pointer-events-none absolute -top-24 -right-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, rgba(212,175,55,0.35), transparent 70%)" }}
                />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/5">
                  <card.icon
                    className="h-7 w-7"
                    strokeWidth={1.2}
                    color="#D4AF37"
                    style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.55))" }}
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl text-foreground/95">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="mt-28 sm:mt-36">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.4em] text-gold/80">
              Antes & Depois
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-4 max-w-2xl text-center font-serif text-3xl leading-tight sm:text-4xl">
              Resultados <span className="text-gold italic">reais e naturais</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted-foreground">
              Deslize para ver a evolução clínica.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
            <Reveal delay={0.3}>
              <div className="flex flex-col gap-4">
                <p className="text-center text-[11px] uppercase tracking-[0.4em] text-gold/80">
                  Homem
                </p>
                <BeforeAfterSlider
                  beforeSrc={manBefore}
                  afterSrc={manAfter}
                />
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-col gap-4">
                <p className="text-center text-[11px] uppercase tracking-[0.4em] text-gold/80">
                  Mulher
                </p>
                <BeforeAfterSlider
                  beforeSrc={womanBefore}
                  afterSrc={womanAfter}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-28 sm:mt-36">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.4em] text-gold/80">
              Atendimentos
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-4 max-w-2xl text-center font-serif text-3xl leading-tight sm:text-4xl">
              Tratamentos clínicos com <span className="text-gold italic">precisão médica</span>.
            </h2>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-12 grid gap-5 sm:grid-cols-2"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="led-border led-hover group relative p-6 transition-transform"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/5">
                    <s.icon
                      className="h-8 w-8"
                      strokeWidth={1.2}
                      color="#D4AF37"
                      style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.55))" }}
                    />
                  </div>
                  <h3 className="pt-2 font-serif text-lg leading-snug text-foreground/95">
                    {s.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CONTACT LINKS */}
        <section className="mt-28 sm:mt-36">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.4em] text-gold/80">
              Localização & Contato
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-4 max-w-xl text-center font-serif text-3xl leading-tight sm:text-4xl">
              Onde <span className="text-gold italic">encontrar</span>.
            </h2>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="mx-auto mt-10 flex max-w-md flex-col gap-4"
          >
            {[
              {
                icon: MapPin,
                label: "Ver localização no Google Maps",
                href: "https://www.google.com/maps/search/?api=1&query=Rua+Castro+Alves+746+Bom+Jesus+da+Lapa+BA",
              },
              {
                icon: Instagram,
                label: "Acessar Instagram (@dr.luan_navarro)",
                href: "https://instagram.com/dr.luan_navarro",
              },
              {
                icon: MessageCircle,
                label: "Falar com a equipe",
                href: "https://wa.me/557799553395",
              },
            ].map((link) => (
              <motion.a
                key={link.label}
                variants={staggerItem}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="led-border led-border-pill led-hover group relative flex items-center justify-center gap-3 px-6 py-4 text-sm font-medium text-foreground/95 sm:text-base"
              >
                <link.icon className="h-4 w-4 text-gold" />
                <span>{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <Reveal delay={0.3}>
            <div className="glass mx-auto mt-10 max-w-md rounded-2xl p-6 text-center">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Rua Castro Alves, 746, 1º Piso — São João, Bom Jesus da Lapa, BA, 47600-000.
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-gold/80">
                Atendimento: Segunda a sexta-feira
              </p>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 sm:mt-32">
          <div className="gold-divider mx-auto mb-8 w-32" />
          <Reveal>
            <div className="flex justify-center">
              <img
                src={footerLogo}
                alt="Marca Luan Navarro"
                loading="lazy"
                decoding="async"
                className="h-30 w-auto opacity-90"
                style={{ height: "7.5rem", filter: "drop-shadow(0 2px 12px rgba(212,175,55,0.35))" }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] leading-relaxed text-muted-foreground/60">
              As informações deste site têm caráter informativo e não substituem a consulta médica
              individualizada. Os resultados dos tratamentos podem variar conforme a avaliação
              clínica de cada paciente. Dr. Luan Navarro — Médico · CRM/BA 41925.
            </p>
          </Reveal>
        </footer>
      </div>
      <FloatingWhatsApp />
    </main>
  );
}
