import { MenuItem, Size } from './types';

export const RESTAURANT_INFO = {
  name: "Gostinho Brasileiro",
  address: "R. Prof. Edgar de Moraes, 235 - Jardim Frediani, Santana de Parnaíba - SP, 06502-165",
  phone: "(11) 91077-7888",
  whatsapp: "5511910777888"
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: "Feijoada Completa",
    description: "Arroz, Torresmo, Vinagrete, Couve e Farofa.",
    prices: {
      [Size.Medium]: 22,
      [Size.Large]: 26
    },
    category: "Clássicos",
    imagePlaceholder: "brazilian-feijoada-clay-pot"
  },
  {
    id: '2',
    name: "Bife Acebolado",
    description: "Arroz, Feijão, Salada e Fritas.",
    prices: {
      [Size.Medium]: 20,
      [Size.Large]: 24
    },
    category: "Dia a Dia",
    imagePlaceholder: "steak-onions-fries"
  },
  {
    id: '3',
    name: "Filé de Frango Empanado",
    description: "Arroz, Feijão, Macarrão alho e óleo e Salada.",
    prices: {
      [Size.Medium]: 16,
      [Size.Large]: 20
    },
    category: "Dia a Dia",
    imagePlaceholder: "breaded-chicken-meal"
  },
  {
    id: '4',
    name: "Frango a Passarinho",
    description: "Arroz, Feijão, Macarrão alho e óleo e Salada.",
    prices: {
      [Size.Medium]: 16,
      [Size.Large]: 20
    },
    category: "Dia a Dia",
    imagePlaceholder: "fried-chicken-garlic"
  }
];