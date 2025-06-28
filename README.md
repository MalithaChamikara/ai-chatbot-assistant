# ai-chatbot-assistant

AI Chatbot Assistant 🤖💬

Project Overview 🌟
The AI Chatbot Assistant is a web-based application that lets users chat with an AI-powered bot through a sleek, responsive interface. Built with React (via CDN) for the frontend and Node.js/Express with the Google Gemini API for the backend, it delivers real-time conversations in a chat-style UI. The frontend uses vanilla CSS for a modern, mobile-friendly design, featuring chat bubbles and a scrollable message window. The project is modular, efficient, and version-controlled, designed to meet a 2-day development timeline while showcasing clean code and functionality.

Key Features:

Frontend 🎨: Single-page React app with components (Message, ChatWindow, InputField, App), served via Express or http-server on port 3000.
Backend ⚙️: Express server handling POST requests to /api/chat, powered by the Gemini API (gemini-1.5-flash).
Responsive Design 📱: CSS ensures usability on desktop and mobile.
Version Control 📚: Hosted on GitHub with clear commit history.

Setup Instructions 🚀
Follow these steps to get the project up and running locally.
Prerequisites ✅

Node.js (v18+): Download from nodejs.org.
Git: For cloning the repository.
Google Gemini API Key 🔑: Obtain from Google AI Studio.

Installation 🛠️

Clone the Repository 📂:
git clone https://github.com/MalithaChamikara/ai-chatbot-assistant.git
cd ai-chatbot-assistant


Set Up the Backend 🖥️:

Navigate to the backend directory:cd backend


Install dependencies:npm install


Create a .env file in backend/ with your API key:PORT=5000
API_KEY=your-api-key-here

Replace your-api-key-here with your Gemini API key.


Start the Backend ▶️:

Run the Express server:use Command:nodemon server.js


The server runs on http://localhost:5000,


Serve Frontend Separately 🌐:

To run the frontend independently:
Install http-server globally:npm install -g http-server


Navigate to the frontend directory:cd frontend


Start http-server on port 3002: use command:http-server -p 3002


Access the Application 🌍:

Open http://localhost:3002 in your browser.
Type messages in the input field and click "Send" to chat with the AI! 💬



Verification 🔍

Check backend logs for Server running on port 5000.
Test the API with:curl -X POST "http://localhost:5000/api/chat" -H "Content-Type: application/json" -d '{"message":"Hello, AI!"}'


The chat UI should display:
User messages (blue bubbles, right-aligned) 🟦
AI responses (gray bubbles, left-aligned) ⬜



API Endpoint Documentation 📜
The backend exposes one API endpoint for chat interactions.
POST /api/chat 🗨️

Description: Sends a user message to the Gemini API and returns the AI response.
Request:
Method: POST
URL: http://localhost:5000/api/chat
Headers: Content-Type: application/json
Body:{
  "message": "User message here"
}


Example:{
  "message": "Tell me a joke"
}




Response:
Success (200 OK) ✅:{
  "response": "Why did the scarecrow become a motivational speaker? Because he was outstanding in his field!"
}


Error (400 Bad Request) 🚫:{
  "error": "Message is required"
}


Error (500 Internal Server Error) ⚠️:{
  "error": "Error: [GoogleGenerativeAI Error] API key not valid"
}




Usage: The frontend sends user input to this endpoint, displaying responses in the chat window.

Assumptions and Limitations ⚙️
Assumptions 🤔

A valid Google Gemini API key is available from Google AI Studio.
The application runs locally with Node.js installed.
Internet access is available for React CDN scripts and Gemini API requests.
The gemini-1.5-flash model is used, as it’s supported by the Gemini API.

Limitations 🚧

Favicon Error 📷: A 404 Not Found for favicon.ico may appear in the browser console if no favicon is included. A favicon.ico file is provided to mitigate this.
Google Analytics Error 🔒: A net::ERR_BLOCKED_BY_CLIENT error for www.google-analytics.com may occur due to ad blockers. This is external and does not affect functionality.
No Auto-Scrolling 📜: The chat window does not auto-scroll to the latest message, requiring manual scrolling for long conversations.
Basic Error Handling ⚠️: Handles common errors (e.g., missing input, server issues) but not advanced cases like API rate limits.
CDN Dependency 🌐: The frontend relies on external React CDN scripts, which may introduce latency in production.

