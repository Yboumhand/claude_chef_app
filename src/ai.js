import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

// The system prompt remains the same for the model to follow

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.
You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention,
but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

// 💡 Change this line to one of the following options:
console.log(
  "Gemini API key initialized:",
  !!import.meta.env.VITE_GEMINI_API_KEY
);

export async function getRecipeFromGemini(ingredientsArr) {
  console.log(ingredientsArr);
  const ingredientsString = ingredientsArr.join(", ");

  // The user prompt is adapted to be a single request
  const userMessage = `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      // 1. Contents should ONLY contain the conversation history (just the user's message here)
      contents: [{ role: "user", parts: [{ text: userMessage }] }],

      config: {
        // 2. The System Instruction (persona/rules) must be set here in the config
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: 2048, // Increased for Markdown safety
        temperature: 0.5, // More focused output
      },
    });
    console.log("Finish Reason:", result.candidates[0].finishReason);
    return response.text;
  } catch (err) {
    console.error("Gemini API Error:", err.message);
    return `Error: Failed to generate recipe. Check the console for details. (API Message: ${err.message})`;
  }
}
