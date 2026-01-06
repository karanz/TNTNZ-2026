
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Support both environment variables and Convertri window-level injection
const getApiKey = () => {
  return (window as any).TRAVEL_API_KEY || process.env.API_KEY || '';
};

export const getTravelAdvice = async (userPrompt: string) => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    return {
      text: "Developer Note: Please add your API Key to the Convertri Page Scripts or environment variables.",
      sources: []
    };
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are an Auckland-based travel consultant for Travel & Tours NZ. 
        Focus: International travel from Auckland (AKL) to Fiji, India, and SE Asia.
        Tone: Professional, friendly, and community-focused. 
        Promote our Facebook community (travelntoursnz) and mention that we are Auckland locals.`,
        tools: [{ googleSearch: {} }]
      },
    });

    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || 'Travel Guide',
      uri: chunk.web?.uri || '#'
    })) || [];

    return {
      text: response.text || "I'm sorry, I couldn't find that information. Let me try a different search.",
      sources
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "I'm momentarily offline. Please check our Facebook page for latest deals or try again in a minute!",
      sources: []
    };
  }
};
