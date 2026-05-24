import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { MagneticHoverCard } from "./MagneticHoverCard";

const education = [
  { degree: "B.Tech — Electronics & Communication Engineering", school: "Charotar University of Science and Technology (CHARUSAT)", loc: "Anand, Gujarat", years: "2023 – 2027", highlight: "CGPA: 8.42 | Chairperson, NSS & IEEE CASS" },
  { degree: "Higher Secondary — Science Stream", school: "The Imperial Science School", loc: "Dhoraji, Gujarat", years: "2021 – 2023", highlight: "Focus on Physics, Mathematics, & Electronics" },
  { degree: "Secondary Education", school: "The Imperial Science School", loc: "Dhoraji, Gujarat", years: "2019 – 2021", highlight: "Strong foundation in analytical problem solving" },
  { degree: "Primary Education", school: "J.B. Diamonds & KARP Impex Vidya Sankul", loc: "Surat, Gujarat", years: "2014 – 2019", highlight: "Early development in science and leadership" },
  { degree: "Primary Education", school: "Shree Kailash Vidhyalay", loc: "Rajkot, Gujarat", years: "2011 – 2014", highlight: "Initial academic and extracurricular growth" },
];

export function EducationSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // The scrollYProgress tied to the height of the section (300vh)
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Translate the container to exactly end at the right side of the screen
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "calc(-100% + 100vw)"]);

  return (
    <section ref={targetRef} id="education" className="relative h-[400vh] bg-[#050505] font-sans">
      
      {/* Sticky Container - Stays fixed on screen while scrolling down */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Ambient Floating Gradients */}
        <div className="absolute top-1/4 left-0 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.05)_0%,rgba(0,0,0,0)_70%)] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(76,29,149,0.05)_0%,rgba(0,0,0,0)_70%)] blur-[120px] pointer-events-none" />

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24 items-center w-max">
          
          {/* Header Block (First item in scroll) */}
          <div className="flex flex-col justify-center min-w-[80vw] md:min-w-[600px] pr-8 md:pr-24">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#06B6D4]">
              <span className="inline-block h-px w-12 bg-gradient-to-r from-transparent to-[#06B6D4]" />
              04 — Education
            </div>
            <h2 className="font-display mt-4 text-4xl leading-[1.1] text-white md:text-6xl text-balance drop-shadow-md">
              Years of Education.<br />
              <span className="font-cursive font-normal text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#4C1D95] to-[#10B981] drop-shadow-md">
                A Lifetime of Vision.
              </span>
            </h2>
            <p className="mt-6 text-lg md:text-2xl text-[#A1A1AA] max-w-3xl font-medium">
              Every institution shaped discipline, leadership, and purpose.
            </p>
          </div>

          {/* Education Milestone Cards */}
          {education.map((e, i) => (
            <div key={i} className="w-[85vw] md:w-[500px] h-[450px] md:h-[500px] flex-shrink-0">
              <MagneticHoverCard className="h-full flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md mb-2">{e.years}</div>
                  <div className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-[#06B6D4] mb-8">{e.loc}</div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="mt-1 bg-[#111] p-3 rounded-xl border border-[#ffffff10] shadow-inner text-[#06B6D4]">
                      <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="font-display text-xl font-semibold leading-tight text-white md:text-3xl drop-shadow-sm">
                      {e.degree}
                    </div>
                  </div>
                  
                  <div className="text-sm md:text-lg text-[#A1A1AA] font-medium tracking-wide pl-[60px] md:pl-[76px]">
                    {e.school}
                  </div>
                </div>

                <div className="pl-[60px] md:pl-[76px] mt-4 text-xs md:text-sm text-[#E5E7EB] font-medium opacity-80 uppercase tracking-widest border-l-2 border-[#06B6D4]/30">
                  <span className="pl-4 inline-block">{e.highlight}</span>
                </div>
              </MagneticHoverCard>
            </div>
          ))}

          {/* Cinematic Finishing Touch */}
          <div className="flex flex-col justify-center min-w-[80vw] md:min-w-[600px] pl-16 pr-[10vw]">
            <h3 className="font-display text-4xl md:text-6xl font-bold text-[#E5E7EB] tracking-tight leading-tight">
              <span className="opacity-40 transition-opacity hover:opacity-100 duration-500 cursor-default">Still learning.</span><br />
              <span className="opacity-60 transition-opacity hover:opacity-100 duration-500 cursor-default">Still growing.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A1A1AA] drop-shadow-lg">Still building the future.</span>
            </h3>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
