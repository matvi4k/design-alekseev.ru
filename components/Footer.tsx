import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-brand-purple/20 bg-black text-center md:text-left relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <div className="w-6 h-6 bg-brand-purple text-white flex items-center justify-center rounded overflow-hidden">
             <svg width="18" height="18" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="footer-logo-mask">
                    <rect width="100" height="100" fill="white" />
                    <text x="50" y="88" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="110" textAnchor="middle" fill="black">a</text>
                </mask>
                <g mask="url(#footer-logo-mask)">
                    <rect x="0" y="0" width="12" height="100" fill="white" />
                    <rect x="18" y="0" width="8" height="100" fill="white" />
                    <rect x="32" y="0" width="14" height="100" fill="white" />
                    <rect x="52" y="0" width="8" height="100" fill="white" />
                    <rect x="66" y="0" width="10" height="100" fill="white" />
                    <rect x="82" y="0" width="18" height="100" fill="white" />
                </g>
             </svg>
          </div>
          <span className="font-bold text-xs tracking-wide text-white">design-alekseev.ru</span>
        </div>
        
        <div className="flex gap-6">
          {['TIKTOK', 'TELEGRAM', 'YOUTUBE'].map(link => (
             <a key={link} href="#" className="text-[10px] font-bold text-gray-500 hover:text-brand-neon transition-colors tracking-wider">
               {link}
             </a>
          ))}
        </div>

        <div className="text-[10px] text-gray-700">
          © 20206 Alekseev Design. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;