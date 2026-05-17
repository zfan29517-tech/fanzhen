import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCollapse = (index: number) => {
    setExpandedIndex(null);
    // Increased timeout to allow some exit animation to happen
    setTimeout(() => {
      const el = document.getElementById(`project-card-${index}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };

  const projects = [
    {
      title: "KEEP营销视觉设计",
      subtitle: "Marketing Design / 2025",
      description: "运动节集卡营销活动视觉设计",
      image: "https://img.heliar.top/file/1778994645178_8112657.png",
      expandImage: "https://img.heliar.top/file/1779006077578_Group_1.jpg",
    },
    {
      title: "且慢Agent2.0",
      subtitle: "UX Design / 2025",
      description: "AI智能投顾助手交互升级",
      image: "https://img.heliar.top/file/1778994662106_8112658.jpg",
      expandImage: "https://img.heliar.top/file/1779009689137_Group_10.jpg",
    },
    {
      title: "其他设计",
      subtitle: "Interaction Design / 2024",
      description: "建模、渲染、aigc生成",
      image: "https://img.heliar.top/file/1778994668331_image_764.png",
      expandImage: "https://img.heliar.top/file/1779007136192_Frame_22.jpg",
    }
  ];

  return (
    <section id="project" className="py-20 md:py-40 bg-white relative">
      {/* Floating Collapse Button */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] md:bottom-12 md:right-12 md:left-auto md:translate-x-0"
          >
            <button 
              onClick={() => handleCollapse(expandedIndex)}
              className="flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-full text-xs font-black uppercase tracking-[0.2em] text-black hover:bg-black hover:text-white transition-all duration-500 group"
            >
              <span>收起详情内容</span>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6"/>
                </svg>
              </motion.div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 block mb-6">Selected Works</span>
          <h2 className="text-[12vw] md:text-[8vw] font-black leading-none tracking-tighter uppercase font-display">
            PROJECTS.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, i) => (
            <div key={i} id={`project-card-${i}`} className="flex flex-col">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                onClick={() => expandedIndex === i ? handleCollapse(i) : setExpandedIndex(i)}
                className="group relative overflow-hidden rounded-[2rem] cursor-pointer bg-gray-50 h-[260px] md:h-[400px] flex-shrink-0"
              >
                <div className={`absolute inset-0 transition-colors duration-500 z-10 ${expandedIndex === i ? 'bg-black/10' : 'bg-black/40 group-hover:bg-black/20'}`} />
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20 text-white">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[20px] font-sans font-bold uppercase tracking-[0.2em] opacity-80 mb-2">Project 0{i + 1}</span>
                      <div className="flex items-baseline gap-4 md:gap-6 flex-wrap">
                        <h3 className="text-[40px] leading-[40px] font-black tracking-tight font-sans">{project.title}</h3>
                        <p className="text-[20px] font-sans font-medium opacity-100 tracking-wide">{project.description}</p>
                      </div>
                    </div>
                    
                    <motion.div 
                      animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                      className="hidden md:flex w-16 h-16 rounded-full border border-white/30 items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-black transition-colors"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <AnimatePresence>
                {expandedIndex === i && project.expandImage && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 md:pt-8 w-full flex flex-col gap-12">
                      <img 
                        src={project.expandImage} 
                        alt={`${project.title} details`} 
                        className="w-full rounded-[2rem] shadow-xl"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 flex justify-center"
        >
          <button className="group flex items-center gap-6">
             <span className="text-2xl font-black uppercase tracking-tighter hover:italic transition-all">All Works</span>
             <div className="w-12 h-[2px] bg-black group-hover:w-24 transition-all" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
