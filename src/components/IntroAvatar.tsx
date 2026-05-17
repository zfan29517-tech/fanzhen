import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function IntroAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Photo transformations
  // From center (start) to bottom-left (end)
  const x = useTransform(scrollYProgress, [0, 0.8], ["0vw", "-42vw"]);
  const y = useTransform(scrollYProgress, [0, 0.8], ["0vh", "38vh"]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);
  const photoRotate = useTransform(scrollYProgress, [0, 0.8], [0, -5]);
  
  // "Hello" text fade and move
  const textY = useTransform(scrollYProgress, [0, 0.32], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);

  // Bubble appearance - triggered towards the end of the scroll
  const bubbleScale = useTransform(scrollYProgress, [0.64, 0.88], [0.5, 1]);
  const bubbleOpacity = useTransform(scrollYProgress, [0.64, 0.8], [0, 1]);
  const bubbleX = useTransform(scrollYProgress, [0.64, 0.88], [40, 0]);

  return (
    <div ref={containerRef} className="relative h-[120vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* The Avatar Container */}
        <motion.div 
          style={{ x, y, scale, rotate: photoRotate }}
          className="relative z-50 flex items-center justify-center"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            <motion.div 
              className="absolute inset-0 bg-gray-400/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
              <img 
                src="https://img.heliar.top/file/1778994826030_Group_85.png" 
                className="w-full h-full object-cover"
                alt="Fanzhen Portrait" 
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bubble - moves with avatar */}
            <motion.div 
              style={{ opacity: bubbleOpacity, x: bubbleX, scale: bubbleScale }}
              className="absolute left-[85%] -top-4 whitespace-nowrap hidden md:block"
            >
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white px-8 py-5 rounded-3xl rounded-bl-none shadow-2xl border border-gray-100 overflow-hidden relative"
              >
                <p className="text-2xl font-black tracking-tight text-black">来了解一下我的基本情况吧</p>
                <div className="absolute -left-3 bottom-0 w-8 h-8 bg-white border-l border-b border-gray-100 rotate-45" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Initial Hello Text */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute mt-[500px] md:mt-[550px] flex flex-col items-center gap-2"
        >
          <h2 className="text-8xl font-black tracking-tighter uppercase font-display">
            HELLO.
          </h2>
          <div className="h-1.5 w-24 bg-black rounded-full" />
        </motion.div>

      </div>
    </div>
  );
}
