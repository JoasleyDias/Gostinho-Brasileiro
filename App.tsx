import React, { useState } from 'react';
import Header from './components/Header';
import MenuItemCard from './components/MenuItemCard';
import CartSheet from './components/CartSheet';
import AIChef from './components/AIChef';
import Footer from './components/Footer';
import { MENU_ITEMS } from './constants';
import { CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart(prev => [...prev, item]);
    // Optionally open cart automatically: setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-[#FFFDF5]">
      <Header />

      <main className="flex-grow container max-w-4xl mx-auto px-4 py-8">
        
        {/* Hero/Title Section matching the provided image style */}
        <div className="text-center mb-10 mt-4">
          <h2 className="font-display text-5xl text-brand-dark mb-3 tracking-tight">
            Nosso Cardápio
          </h2>
          <p className="text-gray-600 text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            Sabores autênticos feitos com amor. Escolha o tamanho ideal para a sua fome.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MENU_ITEMS.map((item) => (
            <MenuItemCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      </main>

      <Footer />

      {/* Sticky Cart Button (Mobile/Desktop) */}
      {cart.length > 0 && !isCartOpen && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 animate-bounce-in">
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-brand-dark text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 hover:bg-gray-800 transition-colors border-2 border-brand-yellow"
          >
            <div className="relative">
              <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <span className="absolute -top-2 -right-2 bg-brand-red text-white text-xs font-display font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-dark">
                {totalItems}
              </span>
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs text-gray-300 uppercase tracking-wide font-bold">Ver Pedido</span>
              <span className="font-display text-lg text-brand-yellow">R$ {totalPrice.toFixed(2)}</span>
            </div>
          </button>
        </div>
      )}

      <CartSheet 
        cart={cart} 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onRemoveItem={removeFromCart} 
      />

      <AIChef />
    </div>
  );
};

export default App;