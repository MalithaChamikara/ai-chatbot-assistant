const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();
const apiKey = process.env.API_KEY;
console.log("API Key:",apiKey); // Log the API key for debugging purposes


// Initialize Gemini API Client
const client = new GoogleGenerativeAI(apiKey);

// Function to get AI response
// This function simulates an AI response using the Gemini API
exports.getAIResponse = async (message) => {
  console.log("Received message:", message); // Log the received message for debugging
  
  // Select the model
  const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Call the API to generate a response
  const result = await model.generateContent({
    contents: [{ parts: [{ text: message }] }],
  });

  // Return the generated text from the result
  return result.response.text();
};
