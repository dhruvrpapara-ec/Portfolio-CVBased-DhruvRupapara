import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Award, Calendar, Users, Target, BookOpen, Star } from "lucide-react";

// --- Data ---
const achievements = [
  "Core Head — Semiconductor Summit 2.0, CHARUSAT",
  "Active Member — IEEE Circuits & Systems Society",
  "Ambassador — Donate Life, Surat",
];

const featuredAchievements = [
  { 
    title: "NSS Best Volunteer Award (2024–25)",
    org: "CHARUSAT",
    desc: "Recognized for outstanding leadership, community impact, and leading a task force of over 500 volunteers across multiple mega-initiatives."
  },
  {
    title: "IEEE Day 2025 Ambassador",
    org: "Gujarat Region",
    desc: "Selected to represent the Gujarat region, organizing technical outreach programs and connecting engineering students across the state."
  },
  {
    title: "Two-Year NSS Activity Report Publication",
    org: "NSS CHARUSAT",
    desc: "Led design and publication of “सेवा, समर्पण, सफलता — The Chronicle of AY 2023–2025” magazine.",
    link: "https://dhruvrupapara-magazin-nss-charusat.vercel.app/"
  }
];

const certs = [
  "Emotional Intelligence in Leadership",
  "MATLAB & Simulink Basics",
  "Be a Leader, Develop a Leader",
  "CCC — Concept of Computer (77%)",
];

const sessions = [
  { t: "LinkedIn Insights: From Profile to Professionalism", d: "First-Year B.Tech Students • 24 April 2025" },
  { t: "Give to Life: Inspiring Hope Through Organ Donation", d: "B.Tech First-Year Students • 16 February 2025" },
];

// --- Components ---

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  const springValue = useSpring(from, { stiffness: 50, damping: 20, duration: duration * 1000 });

  useEffect(() => {
    if (inView) {
      springValue.set(to);
    }
  }, [inView, springValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={nodeRef} />;
}

function MagneticHoverCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ y: -5, scale: 1.01 }}
      className={`relative group rounded-[2rem] border border-[#ffffff10] bg-[#0A0A0A]/60 backdrop-blur-xl overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(167, 139, 250, 0.15), transparent 80%)`,
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative w-full bg-[#050505] py-32 md:py-48 overflow-hidden font-sans">
      {/* Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(76,29,149,0.08)_0%,rgba(0,0,0,0)_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,rgba(0,0,0,0)_70%)] blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        
        {/* Cinematic Header */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#A78BFA] mb-6"
          >
            <span className="inline-block h-px w-8 bg-gradient-to-r from-[#A78BFA] to-transparent" />
            06 — Beyond the Resume
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]"
          >
            Achievements, <br className="hidden md:block" />Leadership & Impact.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-[#A1A1AA] max-w-2xl font-medium"
          >
            Beyond academics — a journey of leadership, service, innovation, and massive community impact.
          </motion.p>
        </div>

        {/* Impact Statistics Counters */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          <div className="p-6 md:p-8 rounded-3xl border border-[#ffffff10] bg-gradient-to-br from-[#111] to-[#0A0A0A] text-center shadow-2xl">
            <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2"><Counter to={500} />+</div>
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#A78BFA]">Volunteers Led</div>
          </div>
          <div className="p-6 md:p-8 rounded-3xl border border-[#ffffff10] bg-gradient-to-br from-[#111] to-[#0A0A0A] text-center shadow-2xl">
            <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2"><Counter to={10} />+</div>
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#06B6D4]">Events Managed</div>
          </div>
          <div className="p-6 md:p-8 rounded-3xl border border-[#ffffff10] bg-gradient-to-br from-[#111] to-[#0A0A0A] text-center shadow-2xl">
            <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2"><Counter to={50} />+</div>
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#10B981]">IEEE Members</div>
          </div>
          <div className="p-6 md:p-8 rounded-3xl border border-[#ffffff10] bg-gradient-to-br from-[#111] to-[#0A0A0A] text-center shadow-2xl">
            <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2"><Counter to={450} />+</div>
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#E11D48]">Students Taught</div>
          </div>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Featured Highlight Card 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 h-full"
          >
            <MagneticHoverCard className="p-10 h-full flex flex-col justify-between">
              <div className="bg-[#4C1D95]/20 w-fit p-3 rounded-2xl border border-[#4C1D95]/40 mb-6">
                <Award className="w-8 h-8 text-[#A78BFA]" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#A78BFA] mb-2">{featuredAchievements[0].org}</div>
                <h3 className="font-display text-3xl font-bold text-white mb-4 leading-tight">{featuredAchievements[0].title}</h3>
                <p className="text-[#A1A1AA] text-lg font-medium leading-relaxed max-w-lg">{featuredAchievements[0].desc}</p>
              </div>
            </MagneticHoverCard>
          </motion.div>

          {/* Featured Highlight Card 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 h-full"
          >
            <MagneticHoverCard className="p-8 h-full flex flex-col justify-between">
              <div className="bg-[#06B6D4]/20 w-fit p-3 rounded-2xl border border-[#06B6D4]/40 mb-6">
                <Target className="w-8 h-8 text-[#06B6D4]" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#06B6D4] mb-2">{featuredAchievements[1].org}</div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">{featuredAchievements[1].title}</h3>
                <p className="text-[#A1A1AA] text-sm font-medium">{featuredAchievements[1].desc}</p>
              </div>
            </MagneticHoverCard>
          </motion.div>

          {/* Featured Highlight Card 3 (Magazine) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <MagneticHoverCard className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E11D48]/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#E11D48]/20 p-2 rounded-lg border border-[#E11D48]/40">
                    <BookOpen className="w-5 h-5 text-[#FB7185]" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FB7185]">{featuredAchievements[2].org}</div>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">{featuredAchievements[2].desc}</h3>
              </div>
              <a 
                href={featuredAchievements[2].link} 
                target="_blank" 
                rel="noreferrer"
                className="group flex-none flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#050505] hover:bg-[#E11D48] hover:text-white transition-colors shadow-xl z-10"
              >
                <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              </a>
            </MagneticHoverCard>
          </motion.div>

          {/* Regular Achievements List inside Bento */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1"
          >
            <MagneticHoverCard className="p-8 h-full">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#A78BFA] mb-6 flex items-center gap-2">
                <Star className="w-4 h-4" /> Other Honours
              </h3>
              <ul className="space-y-5">
                {achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#E5E7EB] font-medium leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[#A78BFA]" />
                    {a}
                  </li>
                ))}
              </ul>
            </MagneticHoverCard>
          </motion.div>

        </div>

        {/* Certifications (Horizontal Scrolling Chips) */}
        <div className="mt-24">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#10B981] mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#10B981]/50" />
            Certifications
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#10B981]/50" />
          </h3>
          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide gap-4 w-full">
            {certs.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -3, backgroundColor: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.3)" }}
                className="flex-none whitespace-nowrap rounded-full border border-[#ffffff10] bg-[#111] px-6 py-4 text-sm font-semibold text-[#E5E7EB] transition-all cursor-default shadow-lg"
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sessions Conducted */}
        <div className="mt-16">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4] mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#06B6D4]/50" />
            Sessions Conducted
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-[#ffffff10] bg-[#0A0A0A] p-8 md:p-10 cursor-pointer shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                  <div className="bg-[#111] w-fit p-3 rounded-2xl border border-[#ffffff10]">
                    <Users className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-[#06B6D4] transition-colors">{s.t}</h4>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#A1A1AA] uppercase tracking-wider">
                      <Calendar className="w-4 h-4" />
                      {s.d}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
