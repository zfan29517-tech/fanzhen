import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-40 md:py-60 px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 block mb-12">THE END.</span>
          <a href="mailto:zfan06191016@163.com" className="group">
            <h2 className="text-[12vw] md:text-[10vw] font-black leading-none tracking-tighter uppercase font-display transition-all group-hover:italic group-hover:text-blue-500">
              CONTACT ME.
            </h2>
          </a>
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 items-start">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Location</span>
            <p className="text-xl font-bold">Jiangsu, China</p>
          </div>
          
      <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Contact</span>
            <div className="flex flex-col gap-2">
               <p className="text-xl font-bold font-display flex items-baseline flex-wrap"><span className="text-gray-500 text-xs uppercase tracking-widest mr-2 w-16">Tel:</span> 18086030716</p>
               <p className="text-xl font-bold font-display flex items-baseline flex-wrap"><span className="text-gray-500 text-xs uppercase tracking-widest mr-2 w-16">Mail:</span> zfan06191016@163.com</p>
               <p className="text-xl font-bold font-display flex items-baseline flex-wrap"><span className="text-gray-500 text-xs uppercase tracking-widest mr-2 w-16">WeChat:</span> Zzheen-F</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-right">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-600">School</span>
            <p className="text-xl font-black font-display uppercase">Jiangnan University</p>
          </div>
        </div>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-full h-[1px] bg-white/10 mt-32 mb-12 origin-left"
        />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
          <p>© 2026 Fanzhen Portfolio. All rights reserved.</p>
          <p>Designed by Fanzhen / Built with Love</p>
        </div>
      </div>
    </section>
  );
}
