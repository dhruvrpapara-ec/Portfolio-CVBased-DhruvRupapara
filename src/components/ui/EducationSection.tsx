import { useRef, MouseEvent } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "B.Tech — Electronics & Communication Engineering", school: "Charotar University of Science and Technology (CHARUSAT)", loc: "Anand, Gujarat", years: "2023 – 2027", highlight: "CGPA: 8.42 | Chairperson, NSS & IEEE CASS" },
  { degree: "Higher Secondary — Science Stream", school: "The Imperial Science School", loc: "Dhoraji, Gujarat", years: "2021 – 2023", highlight: "Focus on Physics, Mathematics, & Electronics" },
  { degree: "Secondary Education", school: "The Imperial Science School", loc: "Dhoraji, Gujarat", years: "2019 – 2021", highlight: "Strong foundation in analytical problem solving" },
  { degree: "Primary Education", school: "J.B. Diamonds & KARP Impex Vidya Sankul", loc: "Surat, Gujarat", years: "2014 – 2019", highlight: "Early development in science and leadership" },
  { degree: "Primary Education", school: "Shree Kailash Vidhyalay", loc: "Rajkot, Gujarat", years: "2011 – 2014", highlight: "Initial academic and extracurricular growth" },
];

function EducationCard({ e, i, left }: { e: any, i: number, left: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative md:grid md:grid-cols-2 md:gap-16 items-center"
    >
      {/* Glowing Pulse Node on Timeline */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
        className="absolute left-[28px] md:left-1/2 top-1/2 -translate-y-1/2 z-20 -translate-x-1/2"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06B6D4] opacity-50 duration-1000" />
          <span className="relative inline-flex h-4 w-4 rounded-full border-[2px] border-[#050505] bg-[#06B6D4] shadow-[0_0_20px_rgba(6,182,212,1)]" />
        </span>
      </motion.div>

      {/* Connecting Horizontal Line (Desktop) */}
      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] w-8 bg-gradient-to-r ${left ? "from-transparent to-[#06B6D4]/50 left-[calc(50%-2rem)]" : "from-[#06B6D4]/50 to-transparent right-[calc(50%-2rem)]"}`} />

      {/* Years and Location (Desktop Only) */}
      <div className={`hidden md:block ${left ? "md:order-1 md:text-right md:pr-16" : "md:order-2 md:pl-16"}`}>
        <div className="font-display text-4xl font-bold text-white tracking-tight drop-shadow-md">{e.years}</div>
        <div className="mt-2 text-sm uppercase tracking-[0.2em] font-semibold text-[#06B6D4]">{e.loc}</div>
      </div>

      {/* Glassmorphism Details Card */}
      <div className={`relative ${left ? "md:order-2 md:ml-12" : "md:order-1 md:mr-12"} ml-20 md:ml-0 group perspective-1000`}>
        <motion.div
          onMouseMove={handleMouseMove}
          whileHover={{ y: -5, scale: 1.02, rotateX: left ? -2 : 2, rotateY: left ? 2 : -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative rounded-[2rem] border border-[#ffffff10] bg-[#0A0A0A]/60 backdrop-blur-2xl p-8 md:p-10 transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

          {/* Mouse Follow Glow */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  400px circle at ${mouseX}px ${mouseY}px,
                  rgba(6, 182, 212, 0.15),
                  transparent 80%
                )
              `,
            }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 border border-white/10 mix-blend-overlay"
            style={{
              maskImage: useMotionTemplate`
                radial-gradient(
                  250px circle at ${mouseX}px ${mouseY}px,
                  black,
                  transparent 80%
                )
              `,
            }}
          />

          <div className="relative z-10">
            <div className="md:hidden mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
              <span className="font-display text-lg text-white">{e.years}</span>
              <span className="text-[#4C1D95]">•</span>
              <span>{e.loc}</span>
            </div>
            
            <div className="flex items-start gap-4 mb-4">
              <div className="mt-1 bg-[#111] p-2 rounded-xl border border-[#ffffff10] shadow-inner group-hover:border-[#06B6D4]/50 transition-colors">
                <GraduationCap className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div className="font-display text-2xl font-semibold leading-tight text-white md:text-3xl group-hover:text-[#06B6D4] transition-colors duration-300 drop-shadow-sm">
                {e.degree}
              </div>
            </div>
            
            <div className="text-base text-[#A1A1AA] font-medium tracking-wide mb-4 pl-12">
              {e.school}
            </div>
            
            <div className="pl-12">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md">
                {e.highlight}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="relative w-full bg-[#050505] py-16 md:py-24 overflow-hidden font-sans">
      {/* Ambient Floating Gradients */}
      <div className="absolute top-1/4 left-0 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.05)_0%,rgba(0,0,0,0)_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(76,29,149,0.05)_0%,rgba(0,0,0,0)_70%)] blur-[120px] pointer-events-none" />
      
      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        
        {/* Cinematic Header */}
        <div className="text-center mb-24 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#06B6D4] mb-8"
          >
            <span className="inline-block h-px w-8 bg-gradient-to-r from-transparent to-[#06B6D4]" />
            04 — Education
            <span className="inline-block h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1] drop-shadow-2xl"
          >
            Years of Education.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#4C1D95] to-[#10B981]">
              A Lifetime of Vision.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 text-lg md:text-2xl text-[#A1A1AA] max-w-3xl mx-auto font-medium"
          >
            Every institution shaped discipline, leadership, and purpose.
          </motion.p>
        </div>

        {/* Timeline & Cards */}
        <div ref={ref} className="relative w-full">
          {/* Main Vertical Timeline Track */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#ffffff05] -translate-x-1/2" />
          
          {/* Animated Glowing Fill Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[28px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-transparent via-[#06B6D4] to-[#4C1D95] -translate-x-1/2 shadow-[0_0_20px_rgba(6,182,212,0.8)] z-10"
          />

          <div className="space-y-4 md:space-y-6 py-10">
            {education.map((e, i) => (
              <EducationCard key={i} e={e} i={i} left={i % 2 === 0} />
            ))}
          </div>
        </div>

        {/* Cinematic Finishing Touch */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-32 md:mt-48 text-center"
        >
          <h3 className="font-display text-4xl md:text-6xl font-bold text-[#E5E7EB] tracking-tight leading-tight">
            <span className="opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default">Still learning.</span><br />
            <span className="opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-default">Still growing.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A1A1AA] drop-shadow-lg">Still building the future.</span>
          </h3>
        </motion.div>
        
      </div>
    </section>
  );
}
