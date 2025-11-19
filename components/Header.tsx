import React from 'react';
import { RESTAURANT_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-b from-white to-brand-light shadow-md sticky top-0 z-40 border-b-4 border-brand-yellow">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Custom Logo Construction */}
        <div className="flex items-center gap-3 pl-2">
          <div className="relative mt-2">
            {/* Chef Hat Graphic - Green Outline Style */}
            <svg className="w-12 h-12 absolute -top-8 -left-4 z-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M20 65 C 10 55, 10 30, 30 20 C 40 10, 60 10, 70 20 C 90 30, 90 50, 80 60" stroke="#009C3B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M20 65 L 80 65" stroke="#009C3B" strokeWidth="6" strokeLinecap="round"/>
            </svg>
            
            <div className="relative z-10 flex flex-col leading-none select-none">
                {/* Gostinho - Red with Yellow Outline/Shadow effect */}
                <h1 className="font-display text-4xl md:text-5xl text-brand-red tracking-wide" 
                    style={{ 
                      textShadow: '2px 2px 0px #FFC700, -1px -1px 0 #fff',
                      transform: 'rotate(-2deg)'
                    }}>
                  Gostinho
                </h1>
                
                {/* Brasileiro - Red */}
                <div className="flex items-center w-full -mt-1 pl-4">
                  <span className="font-display text-xl md:text-2xl text-brand-red tracking-wide"
                     style={{ textShadow: '1px 1px 0px #FFC700' }}>
                    Brasileiro
                  </span>
                </div>
                
                {/* Marmitex - Green Script */}
                 <span className="font-script text-2xl md:text-3xl text-brand-green absolute -bottom-5 right-0 transform -rotate-6 drop-shadow-sm filter" style={{ textShadow: '1px 1px 0px #fff' }}>
                    Marmitex
                  </span>
            </div>
          </div>
        </div>
        
        <a 
          href={`tel:${RESTAURANT_INFO.phone.replace(/\D/g,'')}`} 
          className="hidden md:flex items-center gap-2 bg-brand-green text-white px-4 py-2 rounded-full font-bold shadow-md hover:bg-green-700 transition-all transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="font-sans">{RESTAURANT_INFO.phone}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;