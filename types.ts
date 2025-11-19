export enum Size {
  Medium = 'Média',
  Large = 'Grande'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  prices: {
    [Size.Medium]: number;
    [Size.Large]: number;
  };
  category: string;
  imagePlaceholder: string; // Used to generate a relevant image URL
}

export interface CartItem {
  menuItem: MenuItem;
  size: Size;
  quantity: number;
  totalPrice: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
