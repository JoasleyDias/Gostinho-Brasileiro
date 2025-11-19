import React, { useState } from 'react';
import { MenuItem, Size, CartItem } from '../types';

interface Props {
  item: MenuItem;
  onAddToCart: (item: CartItem) => void;
}

const MenuItemCard: React.FC<Props> = ({ item, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<Size>(Size.Medium);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    onAddToCart({
      menuItem: item,
      size: selectedSize,
      quantity: quantity,
      totalPrice: item.prices[selectedSize] * quantity
    });
    
    // Reset after animation
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 500);
  };

  // Helper to get a deterministic generic food image based on ID
  const imageUrl = `https://picsum.photos/seed/${item.imagePlaceholder}/400/300`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-2 right-2 bg-brand-yellow text-brand-dark font-display font-bold text-xs px-3 py-1 rounded-md shadow-sm tracking-wide">
          {item.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-display text-2xl text-brand-dark mb-2 group-hover:text-brand-red transition-colors">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-5 flex-grow leading-relaxed border-l-2 border-brand-yellow pl-3">{item.description}</p>
        
        <div className="mt-auto space-y-4">
          {/* Size Selector */}
          <div className="flex bg-gray-50 p-1.5 rounded-lg border border-gray-100">
            {Object.values(Size).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 text-sm font-bold py-2 rounded-md transition-all ${
                  selectedSize === size 
                    ? 'bg-white text-brand-dark shadow-sm ring-1 ring-gray-200' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <span className="block font-sans text-xs uppercase tracking-wider mb-0.5">{size}</span>
                <span className="font-display text-lg text-brand-green">R${item.prices[size]}</span>
              </button>
            ))}
          </div>

          {/* Quantity and Add Button */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center border-2 border-gray-100 rounded-lg bg-white">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-400 hover:text-brand-red transition-colors font-bold text-lg"
              >
                -
              </button>
              <span className="text-brand-dark font-display text-lg w-6 text-center pt-1">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-400 hover:text-brand-green transition-colors font-bold text-lg"
              >
                +
              </button>
            </div>
            
            <button
              onClick={handleAdd}
              className={`flex-1 py-3 px-4 rounded-lg font-bold text-white text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md ${
                isAdding ? 'bg-brand-green' : 'bg-brand-orange hover:bg-amber-500'
              }`}
            >
              {isAdding ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="font-display">Adicionado!</span>
                </>
              ) : (
                <>
                  <span className="font-display tracking-wide uppercase">Adicionar</span>
                  <span className="bg-black/10 px-2 py-0.5 rounded text-xs">R${(item.prices[selectedSize] * quantity).toFixed(2)}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;