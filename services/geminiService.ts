
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_CONTEXT } from "../constants";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const chatWithRitabrataAI = async (message: string, history: {role: 'user' | 'assistant', text: string}[]) => {
  const ai = getAIClient();
  const model = 'gemini-3-flash-preview';

  const systemInstruction = `
    You are an AI clone of Ritabrata Patra, a senior software engineer. 
    Use the following information to answer questions about "yourself":
    ${PERSONAL_CONTEXT}
    
    Be professional, concise, slightly witty, and highly knowledgeable. 
    Your tone should reflect a modern, high-tier engineer. 
    If asked about things not in your context, politely decline or bridge it back to your engineering expertise.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [
        { role: 'user', parts: [{ text: `Background: ${systemInstruction}` }] },
        ...history.map(h => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 500,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing a minor cognitive glitch (API Error). Let's try again in a moment!";
  }
};
