"use client";

import React from 'react';
import { PenTool, Smartphone, Zap, Monitor, Box, Layers } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceItem[] = [
  { id: '1', icon: <PenTool className="w-8 h-8" />, title: 'БРЕНДИНГ', description: 'Разработка визуальной стратегии, логотипа и айдентики, которые делают бренд узнаваемым.', tags: ['Логотип', 'Brandbook', 'Стиль'] },
  { id: '2', icon: <Monitor className="w-8 h-8" />, title: 'ВЕБ-ДИЗАЙН', description: 'Адаптивные интерфейсы и прототипы — удобство и конверсия в одном решении.', tags: ['UX/UI', 'Figma', 'Прототипы'] },
  { id: '3', icon: <Box className="w-8 h-8" />, title: '3D & MOTION', description: '3D-модели, сцены и motion-дизайн для продуктов, презентаций и соцсетей.', tags: ['Blender', 'After Effects', 'Spline'] },
  { id: '4', icon: <Layers className="w-8 h-8" />, title: 'УПАКОВКА', description: 'Дизайн упаковки, который продаёт — от структуры до финишной печати.', tags: ['Dieline', 'Принт', 'Материалы'] },
  { id: '5', icon: <Smartphone className="w-8 h-8" />, title: 'МОБИЛЬНЫЕ UI', description: 'Интуитивные интерфейсы для мобильных приложений с фокусом на пользовательский опыт.', tags: ['iOS', 'Android', 'Прототип'] },
  { id: '6', icon: <Zap className="w-8 h-8" />, title: 'ГРАФИКА', description: 'Иллюстрации, посты и маркетинговая графика для кампаний и соцсетей.', tags: ['Иллюстрация', 'SMM', 'Контент'] }
];

const Services: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-24 relative perspective-1000 bg-[#050505]">
      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .card-container { width: 100%; height: 400px; position: relative; cursor: pointer; }
        .card-3d { 
          width: 100%; height: 100%; position: relative; 
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); 
          transform-style: preserve-3d; 
        }
        .card-container:hover .card-3d { transform: rotateY(180deg); }
        .content-box { position: absolute; width: 100%; height: 100%; transform-style: preserve-3d; }
        
        .face { 
          position: absolute; width: 100%; height: 100%; 
          backface-visibility: hidden; -webkit-backface-visibility: hidden; 
          border-radius: 24px; border: 1px solid rgba(255,255,255,0.1);
        }
        
        .face-back { 
          background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px);
          display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 2;
        }
        
        .face-front { 
          background: linear-gradient(135deg, #1a0b2e 0%, #050505 100%); 
          transform: rotateY(180deg); display: flex; flex-direction: column; 
          align-items: center; justify-content: center; padding: 30px;
        }

        .order-button { 
          background: white; color: black; padding: 12px 32px; border-radius: 50px; 
          font-weight: 800; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;
          border: none; cursor: pointer; transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3); white-space: nowrap;
        }
        
        .order-button:hover { 
          background: #7c3aed; color: white; transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(124, 58, 237, 0.6);
        }
        
        .circle { position: absolute; width: 120px; height: 120px; background: #7c3aed; filter: blur(50px); opacity: 0.2; z-index: -1; }
        #bottom { bottom: -20px; left: -20px; }
        #right { top: -20px; right: -20px; }
      `}} />

      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="squircleClipServices" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className={`mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-purple-500 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Наши Услуги</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Комплексные <br />
            <span className="font-serif italic text-gray-400 font-normal">Визуальные Решения</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`card-container transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="card-3d">
                <div className="content-box">
                  
                  {/* Передняя сторона */}
                  <div className="face face-back">
                    <div 
                      className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-900 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(124,58,237,0.4)] z-20 border border-white/10 mb-6"
                      style={{ clipPath: 'url(#squircleClipServices)' }}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <strong className="text-xl font-bold tracking-wider text-white uppercase text-center">{service.title}</strong>
                    <div className="circle" id="bottom"></div>
                    <div className="circle" id="right"></div>
                  </div>

                  {/* Обратная сторона */}
                  <div className="face face-front">
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                       {service.tags.map(tag => (
                         <span key={tag} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full border border-purple-500/20 font-bold text-[10px] uppercase tracking-wider">
                           {tag}
                         </span>
                       ))}
                    </div>
                    <div className="text-center px-4">
                      <p className="font-bold text-white text-xl mb-3 uppercase tracking-tight">{service.title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.description}</p>
                      <div className="flex justify-center">
                        <button 
                          onMouseDown={scrollToContact} 
                          className="order-button"
                        >
                          Заказать
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
