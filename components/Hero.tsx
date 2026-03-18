import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple rounded-full blur-[150px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-darkPurple rounded-full blur-[150px] opacity-30 animate-float-delayed"></div>
      
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8">
            <span className="font-serif italic font-normal text-brand-neon block mb-2 opacity-0 animate-reveal-blur">Design Studio</span>
            <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-neon to-brand-purple block opacity-0 animate-reveal-blur delay-200 filter drop-shadow-[0_0_10px_rgba(124,58,237,0.3)]">
              ALEKSEEV
            </span>
            <span className="uppercase text-white block opacity-0 animate-reveal-blur delay-500 text-3xl md:text-5xl mt-2 tracking-tight">
              WEB & MOTION
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed opacity-0 animate-reveal-blur delay-700 border-l-2 border-brand-purple pl-6">
            Мы превращаем сложные идеи в элегантные цифровые продукты. Эстетика, которая работает на ваш бизнес.
          </p>
          
           <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center opacity-0 animate-reveal-blur delay-1000">
             <a href="#contact" className="animated-button no-underline" aria-label="Обсудить проект">
              <span className="text">Обсудить проект</span>
             </a>
             
             <div className="hidden sm:block text-xs text-gray-500 uppercase tracking-widest pl-4">
                design-alekseev.ru <br />
                <span className="text-brand-purple">since 2026</span>
             </div>
          </div>
        </div>

        {/* 3D Visual Element */}
        <div className="md:col-span-5 relative hidden md:block opacity-0 animate-scale-in delay-1200 perspective-1000">
           <div className="relative w-full aspect-square flex items-center justify-center preserve-3d animate-float">
              {/* Core */}
              <div className="absolute w-32 h-32 bg-brand-purple rounded-full blur-[60px] opacity-50"></div>
              
              {/* Rings */}
              <div className="absolute w-64 h-64 border border-brand-purple/40 rounded-full animate-spin-slow preserve-3d" style={{ transform: 'rotateX(60deg)' }}>
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-brand-neon rounded-full blur-[4px] shadow-[0_0_10px_#a78bfa]"></div>
              </div>
              <div className="absolute w-80 h-80 border border-brand-neon/20 rounded-full animate-spin-reverse-slow preserve-3d" style={{ transform: 'rotateY(60deg)' }}>
                 <div className="absolute bottom-0 right-1/2 w-2 h-2 bg-white rounded-full blur-[2px]"></div>
              </div>
              <div className="absolute w-52 h-52 border border-white/10 rounded-full animate-spin preserve-3d border-dashed opacity-50"></div>
              
              {/* Glass Plate */}
              <div className="absolute inset-4 glass-card rounded-2xl -z-10 transform rotate-6 scale-90 opacity-40"></div>
              <div className="absolute inset-0 glass-card rounded-2xl flex items-center justify-center transform hover:rotate-y-12 hover:rotate-x-12 transition-transform duration-700 ease-out border-brand-purple/20">
                 <div className="text-center">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 text-brand-neon">
                      <path d="M12 2L2 22H7L9.5 17H14.5L17 22H22L12 2ZM12 7L13.25 13H10.75L12 7Z" fill="currentColor"/>
                    </svg>
                    <p className="text-xs text-brand-neon font-mono uppercase tracking-widest">Alekseev Design</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;