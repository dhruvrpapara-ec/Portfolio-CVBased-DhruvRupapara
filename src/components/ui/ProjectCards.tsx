import { motion } from "framer-motion";

const projectsData = [
  {
    title: "NSS Connect Portal",
    desc: "CENTRALIZED PLATFORM FOR VOLUNTEER AND EVENT MANAGEMENT. REDUCED COORDINATION DELAYS THROUGH WORKFLOW AUTOMATION AND STRUCTURED REPORTING SYSTEMS.",
    image: "/hero-images/Projects/NSS Connect Portal.png"
  },
  {
    title: "RFID Smart Attendance",
    desc: "DESIGNED AND IMPLEMENTED AN RFID-ENABLED ATTENDANCE SYSTEM ON STM32F103 MICROCONTROLLER WITH REAL-TIME LOGGING AND LCD FEEDBACK.",
    image: "/hero-images/Projects/RFID Smart Attendance.png"
  },
  {
    title: "IoT Security System",
    desc: "SENSOR-BASED SECURITY SYSTEM FOR REAL-TIME INTRUSION DETECTION. IMPROVED RESPONSE EFFICIENCY THROUGH OPTIMIZED COMMUNICATION PROTOCOLS.",
    image: "/hero-images/Projects/IoT Security System.png"
  },
  {
    title: "CMOS D Flip-Flop",
    desc: "DESIGNED CMOS D FLIP-FLOPS IN CADENCE VIRTUOSO AND PERFORMED POWER & DELAY ANALYSIS ACROSS MULTIPLE TECHNOLOGY NODES FOR OPTIMIZATION.",
    image: "/hero-images/Projects/CMOS D Flip-Flop.png"
  },
  {
    title: "9 GHz Patch Antenna",
    desc: "DESIGNED AND SIMULATED A 9 GHZ INSET-FED MICROSTRIP PATCH ANTENNA FOR X-BAND APPLICATIONS WITH EFFECTIVE IMPEDANCE MATCHING AND STABLE RADIATION.",
    image: "/hero-images/Projects/9 GHz Patch Antenna.png"
  },
];

export function ProjectCards() {
  const total = projectsData.length;
  const rotationRange = 50;
  const offsetRange = 80;

  return (
    <section id="projects" className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden flex flex-col items-center">
      <div className="w-full text-center z-50 pointer-events-none mb-12">
        <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#06B6D4] mb-4">
          <span className="inline-block h-px w-12 bg-gradient-to-r from-transparent to-[#06B6D4]" />
          03 — Projects
          <span className="inline-block h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-white drop-shadow-lg">
          Engineering work that ships and scales.
        </h2>
      </div>

      {/* Hearthstone Card Fan Container */}
      <div className="relative mt-20 flex h-[400px] md:h-[600px] w-full justify-center items-end pb-12 px-12 perspective-[1000px]">
        {projectsData.map((p, i) => {
          // Hearthstone SCSS math translated to React
          const rotation = ((i - (total - 1) / 2) / (total - 2)) * rotationRange;
          const offset = Math.abs(((i - (total - 1) / 2) / (total - 2)) * offsetRange);

          return (
            <motion.div
              key={i}
              initial={{ 
                y: offset, 
                rotateZ: rotation, 
                scale: 1,
                zIndex: 10 + i 
              }}
              whileHover={{ 
                y: -150, 
                rotateZ: 0, 
                scale: 1.2, // Slightly reduced scale so the text fits comfortably on screen
                zIndex: 50 
              }}
              transition={{ 
                duration: 0.4, 
                ease: [0.19, 1, 0.22, 1] // Matches cubic-bezier from SCSS
              }}
              className="relative flex flex-col h-[320px] w-[220px] md:h-[480px] md:w-[320px] -mx-8 md:-mx-12 cursor-pointer rounded-2xl border-[6px] border-[#6D34E8] bg-[#A482F6] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group"
            >
              {/* Card Face - Top Half (Image) */}
              <div className="h-[55%] w-full bg-white relative">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card Face - Bottom Half (Details styled like the screenshot) */}
              <div className="h-[45%] w-full bg-[#A482F6] p-4 flex flex-col justify-center items-center text-center">
                <h3 className="font-display text-white font-bold text-sm md:text-lg uppercase leading-tight mb-2 tracking-wide drop-shadow-md">
                  {p.title}
                </h3>
                <p className="text-white text-[9px] md:text-xs font-semibold leading-relaxed tracking-wider drop-shadow-sm">
                  {p.desc}
                </p>
              </div>
              
              {/* Overlay Flash on Hover (like SCSS :after fade) */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: [0.5, 0], transition: { duration: 0.3 } }}
                className="absolute inset-0 bg-white pointer-events-none mix-blend-overlay"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
