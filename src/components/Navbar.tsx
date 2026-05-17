import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <a href="#" className="font-display font-black text-2xl tracking-tighter text-black">
        FZ.
      </a>
      
      <div className="flex gap-8 md:gap-12 text-black">
        {['About', 'Project', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item === 'About' ? 'about-me' : item.toLowerCase().replace(' ', '-')}`}
            className="text-[10px] uppercase font-black tracking-[0.3em] hover:text-blue-600 transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-600 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
