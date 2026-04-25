import { GoogleGenAI } from "@google/genai";

let genAI: GoogleGenAI | null = null;

function getGenAI() {
  if (!genAI) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set. Please provide it in the environment variables.");
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
}

export async function getConciergeResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const ai = getGenAI();
  const systemInstruction = `You are the virtual concierge at Lumière Grand Hotel, a 5-star luxury hotel in Paris. 
    Your tone is extremely sophisticated, helpful, and elegant. 
    You help guests with:
    - Information about our rooms (Superior, Deluxe, Presidential).
    - Dining at our Michelin-starred restaurant.
    - Local Parisian recommendations (Eiffel Tower is nearby).
    - Spa services.
    - Booking assistance.
    
    Keep responses concise but luxurious. Use occasional French phrases like "Bienvenue", "Absolument", or "C'est un plaisir".`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [...history, { role: 'user', parts: [{ text: message }] }],
    config: {
      systemInstruction,
    }
  });

  return response.text || "Pardon, I could not process your request.";
}
