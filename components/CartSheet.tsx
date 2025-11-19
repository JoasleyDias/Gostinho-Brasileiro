import React from 'react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../constants';

interface Props {
  cart: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveItem: (index: number) => void;
}

const CartSheet: React.FC<Props> = ({ cart, isOpen, onClose, onRemoveItem }) => {
  const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = `Olá! Gostaria de fazer um pedido no *${RESTAURANT_INFO.name}*:\n\n`;
    cart.forEach((item) => {
      message += `• ${item.quantity}x ${item.menuItem.name} (${item.size}) - R$${item.totalPrice.toFixed(2)}\n`;
    });
    message += `\n*Total: R$${total.toFixed(2)}*`;
    message += `\n\nEndereço de entrega: (Digitar aqui)`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-brand-yellow shadow-sm">
              <h2 className="text-2xl font-display text-brand-dark pt-1">Seu Pedido 🥘</h2>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors text-brand-dark">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 py-6 px-6 overflow-y-auto bg-[#FFFDF5]">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
                  <div className="bg-gray-100 p-6 rounded-full">
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </div>
                  <p className="text-xl font-display text-brand-dark">Sua marmita está vazia!</p>
                  <p className="text-sm text-gray-500">Adicione alguns itens deliciosos do cardápio.</p>
                  <button onClick={onClose} className="mt-4 px-8 py-3 bg-brand-orange text-white rounded-full font-bold font-display tracking-wide shadow-md hover:bg-amber-600 transition-colors">
                    VER CARDÁPIO
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cart.map((item, index) => (
                    <li key={index} className="py-4 flex gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-display text-brand-dark leading-tight">{item.menuItem.name}</h3>
                          <p className="text-lg font-display text-brand-green ml-4">R${item.totalPrice.toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-bold uppercase">{item.size}</span> 
                          <span>x {item.quantity}</span>
                        </p>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(index)}
                        className="text-gray-300 hover:text-red-500 transition-colors self-center p-2"
                        aria-label="Remover item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 px-6 py-6 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between mb-6 items-baseline">
                  <span className="text-gray-500 font-bold">Total Estimado</span>
                  <span className="text-3xl font-display text-brand-dark">R$ {total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl py-4 px-4 font-bold shadow-lg transform active:scale-[0.99] transition-all group"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-9.667-.272-.099-.47-.149-.669-.149-.198 0-.42.074-.642.322-.222.249-.865 8.419-1.31 1.039-.445 2.021-.172 2.882.301 3.614.473.731 1.609 2.545 3.896 3.531 2.287.986 2.287.657 2.709.616.421-.041 1.359-.555 1.557-1.091.198-.535.198-1.015.149-1.09z"/></svg>
                  <span className="font-display text-xl tracking-wide">Enviar Pedido</span>
                </button>
                <p className="mt-3 text-xs text-center text-gray-400">Seu pedido será montado automaticamente no WhatsApp.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSheet;