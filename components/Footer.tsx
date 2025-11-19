import React from 'react';
import { RESTAURANT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-display text-3xl text-brand-yellow mb-2" style={{ textShadow: '2px 2px 0px #D32F2F' }}>
              Gostinho Brasileiro
            </h3>
            <p className="font-script text-xl text-brand-green mb-4">Marmitex</p>
            <p className="text-gray-400 mb-4 font-sans">
              A melhor comida caseira de Santana de Parnaíba. <br/>
              Feito com amor, servido com carinho.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 font-sans">Contato & Localização</h4>
            <p className="flex items-start gap-2 text-gray-300 mb-2 font-sans">
              <svg className="w-5 h-5 mt-1 flex-shrink-0 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              {RESTAURANT_INFO.address}
            </p>
            <p className="flex items-center gap-2 text-gray-300 font-sans">
              <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              {RESTAURANT_INFO.phone}
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm font-sans">
          &copy; {new Date().getFullYear()} Gostinho Brasileiro Marmitex. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;