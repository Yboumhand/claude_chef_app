import { GoogleGenAI } from "@google/genai";

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,a
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

// Make sure you set an environment variable in Scrimba

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
        maxOutputTokens: 1024,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (err) {
    console.error("Gemini API Error:", err.message);
    return `Error: Failed to generate recipe. Check the console for details. (API Message: ${err.message})`;
  }
}
