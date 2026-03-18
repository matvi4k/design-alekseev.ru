import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const [touched, setTouched] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isValid = formData.name.length >= 2 && formData.contact.length >= 3 && formData.message.length >= 5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);

    if (!isValid) return;

    const surveyText = `📋 НОВАЯ АНКЕТА\n👤 Имя: ${formData.name}\n📱 Контакт: ${formData.contact}\n📝 Задача: ${formData.message}`;
    
    // Копируем текст
    navigator.clipboard.writeText(surveyText).catch(() => {
      console.log("Clipboard error");
    });

    // Исправленная ссылка на бота
    window.location.href = "https://t.me/DesignAlekseevBot";
  };

  const marqueeText = "СОТРУДНИЧЕСТВО • НОВАЯ АНКЕТА • ВАШ ПРОЕКТ • DESIGN ALEKSEEV • ";

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-black min-h-screen flex items-center select-none"
      ref={ref}
    >
      
      {/* Фон с параллаксом */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px) rotate(-12deg) scale(1.2)` }}
      >
        <div className="flex flex-col justify-center gap-12 h-full text-white">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`whitespace-nowrap flex text-7xl md:text-9xl font-black uppercase tracking-tighter ${i % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`}>
              <span>{marqueeText.repeat(5)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Заголовок без обрезок */}
          <div className={`w-full lg:w-[58%] transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 
              className="text-6xl md:text-8xl xl:text-[120px] font-bold uppercase leading-[0.85] italic tracking-tighter text-white overflow-visible"
              style={{ paddingRight: '0.2em' }}
            >
              Ваш проект <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">
                Следующий?
              </span>
            </h2>
          </div>

          {/* Стекло-анкета */}
          <div className={`w-full lg:w-[450px] shrink-0 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-white/[0.01] backdrop-blur-[45px] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_0_80px_rgba(0,0,0,0.5)] relative overflow-hidden group">
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
               
               <h3 className="text-white font-bold text-xl mb-10 tracking-[0.2em] uppercase relative z-10 opacity-80">
                 Анкета проекта
               </h3>

               <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                 <div className="space-y-5">
                   <input 
                    type="text" placeholder="ВАШЕ ИМЯ" value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full bg-transparent border-b-2 py-3 text-white outline-none transition-all placeholder:text-white/20 text-sm tracking-widest ${touched && formData.name.length < 2 ? 'border-red-500/50' : 'border-white/10 focus:border-brand-purple'}`} 
                   />
                   <input 
                    type="text" placeholder="КОНТАКТ (TG/WA)" value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className={`w-full bg-transparent border-b-2 py-3 text-white outline-none transition-all placeholder:text-white/20 text-sm tracking-widest ${touched && formData.contact.length < 3 ? 'border-red-500/50' : 'border-white/10 focus:border-brand-purple'}`} 
                   />
                   <textarea 
                    rows={3} placeholder="ОПИШИТЕ ЗАДАЧУ" value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white outline-none transition-all resize-none placeholder:text-white/20 text-sm ${touched && formData.message.length < 5 ? 'border-red-500/50' : 'focus:border-brand-purple'}`} 
                   />
                 </div>

                 <div className="space-y-4 pt-2">
                    <button 
                      type="submit"
                      className="w-full py-6 rounded-2xl bg-white text-black hover:bg-brand-purple hover:text-white transition-all duration-500 flex items-center justify-center gap-3 font-black tracking-[0.2em] text-[12px] shadow-2xl active:scale-95"
                    >
                      ОТПРАВИТЬ В TG
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-center gap-2 px-2 opacity-30 group-hover:opacity-50 transition-opacity">
                      <MousePointer2 className="w-3 h-3 text-white" />
                      <p className="text-[9px] text-white uppercase tracking-[0.1em] text-center">
                        анкета скопируется автоматически
                      </p>
                    </div>
                 </div>
               </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee { animation: marquee 60s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 60s linear infinite; }
        .select-none { user-select: none; -webkit-user-select: none; }
        input, textarea, button { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </section>
  );
};

export default Contact;
