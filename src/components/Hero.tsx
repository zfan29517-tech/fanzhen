import { motion } from 'motion/react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: "100%" },
    visible: { 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-8 overflow-hidden bg-white">
      {/* Massive Background Text revealing on scroll/load */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none select-none z-0">
        <motion.h2 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[25vw] font-black text-black text-center uppercase tracking-tighter whitespace-nowrap"
        >
          DESIGNER
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center max-w-7xl w-full"
      >
        <div className="mask-reveal mb-4">
          <motion.span variants={itemVariants} className="split-line text-sm md:text-base font-bold uppercase tracking-[0.3em] text-gray-400">
            Fanzhen Portfolio ©2026
          </motion.span>
        </div>

        <div className="mask-reveal mb-12">
          <motion.h1 
            variants={itemVariants}
            className="text-[12vw] md:text-[10vw] font-black text-center leading-[0.9] tracking-tighter font-display"
          >
            FANZHEN.
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-20 bg-gray-200 animate-bounce" />
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
