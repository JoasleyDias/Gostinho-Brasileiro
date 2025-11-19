import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS, RESTAURANT_INFO } from "../constants";

const MENU_CONTEXT = `
Você é o "Chef Gostinho", um assistente virtual amigável e prestativo do restaurante "Gostinho Brasileiro".
Sua função é ajudar os clientes a escolherem sua refeição (marmitex), tirar dúvidas sobre o cardápio e dar sugestões.

Informações do Restaurante:
Nome: ${RESTAURANT_INFO.name}
Endereço: ${RESTAURANT_INFO.address}
Telefone: ${RESTAURANT_INFO.phone}

Cardápio de Hoje:
${MENU_ITEMS.map(item => 
  `- ${item.name}: ${item.description}. Preços: Média R$${item.prices['Média']}, Grande R$${item.prices['Grande']}.`
).join('\n')}

Diretrizes de Resposta:
1. Seja curto, caloroso e informal (use emojis brasileiros 🇧🇷🥘).
2. Se perguntarem sobre entrega, diga que aceitamos pedidos via WhatsApp.
3. Sugira pratos baseados no que o cliente diz (ex: se querem algo leve, ou se estão com muita fome).
4. Nunca invente pratos que não estão na lista acima.
5. Responda sempre em Português do Brasil.
`;

export const sendMessageToGemini = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Transform history to Gemini format if needed, but for simple generation we can just append context
    // For this implementation, we will use generateContent with system instructions
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        {
          role: 'user',
          parts: [{ text: newMessage }]
        }
      ],
      config: {
        systemInstruction: MENU_CONTEXT,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, tive um pequeno problema na cozinha! Pode repetir?";
  } catch (error) {
    console.error("Erro ao falar com Gemini:", error);
    return "Ops! Minha conexão caiu rapidinho. Tente novamente em alguns segundos.";
  }
};
