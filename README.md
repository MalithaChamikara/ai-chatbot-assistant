# ai-chatbot-assistant

🤖 **AI Chatbot Assistant**

A smart  chatbot powered by Google Gemini API 🌐💬
Built with React (via CDN) for the frontend and Node.js/Express for the backend.

🌟 **Project Overview**
The AI Chatbot Assistant is a modern web-based application that enables users to chat in real-time with an AI-powered bot through a responsive, mobile-friendly interface.

🧰 **Tech Stack:**
Frontend: React (via CDN), Vanilla CSS
Backend: Node.js, Express, Google Gemini API (gemini-1.5-flash)

✨ **Features**
🎨 Single-page  app with components like Message, ChatWindow, InputField, and App
⚙️ Express.js API for handling POST requests at /api/chat
📱 Responsive UI with scrollable message window and chat bubbles
📚 Version Control with a clean commit history on GitHub

🚀 **Getting Started**

✅ Prerequisites
Node.js version 18+
Git
🔑 A Google Gemini API Key from Google AI Studio

🛠️ **Installation Steps**

📂 1. Clone the Repository
<pre> ```bash git clone https://github.com/MalithaChamikara/ai-chatbot-assistant.git cd ai-chatbot-assistant ``` </pre>

🖥️ 2. Set Up the Backend
  <pre> ```bash cd backend npm install ``` </pre>

  🔐 Create a .env file in the backend/ directory:
  PORT = 5000
  API_KEY = your_google_gemini_api_key  
  Replace your-api-key-here with your actual Gemini API key

▶️ 3. Start the Backend Server
  <pre> ```bash nodemon server ``` </pre>
  Server runs at: http://localhost:5000

🌐 4. Serve the Frontend Separately
  <pre> ```bash npm install -g http-server
  cd ../frontend
  http-server -p 3002 ``` </pre>
  Frontend runs at: http://localhost:3002
  Then, open 👉 http://localhost:3002 in your browser.
  💬 Type your message and click Send to start chatting!

🔍 **Verification**

✅ Backend Log:

Server Running on port 5000

✅ API Test:

<pre> ```bash curl -X POST http://localhost:5000/api/chat -H "Content-Type: application/json" -d '{"message": "Hello"}' ``` </pre>

✅ Chat UI Behavior:

🟦 User messages: Blue, right-aligned

⬜ AI messages: Gray, left-aligned

📜 **API Endpoint Documentation**

🗨️ **POST /api/chat**
Description
Sends a message to Gemini and returns the AI-generated response.

Request
POST http://localhost:5000/api/chat
content-type: application/json
Body
```json
{
  "message": "Your message here"
}

Example
```json
{
  "message": "Tell Me  a Joke!"
}

Response
```json
{
  "response": "Why did the scarecrow become a motivational speaker? Because he was outstanding in his field!"
}
```
🚫 Error (400 Bad Request)
```json
{
  "error": "Message is required"
}
```
⚠️ Error (500 Internal Server Error)
```json
{
  "error": "Error: [GoogleGenerativeAI Error] API key not valid"
}


⚙️ **Assumptions & Limitations**

🤔 Assumptions
You have a valid Google Gemini API key.
Node.js is installed locally.
Internet access is available for CDN scripts and Gemini API requests.
You're using the gemini-1.5-flash model.

🚧 Limitations
📷 Favicon Warning: May see a 404 for favicon.ico in the console. Add a favicon to resolve.
🔒 Google Analytics Blocked: Errors like ERR_BLOCKED_BY_CLIENT may appear due to ad blockers. Doesn’t affect functionality.
📜 No Auto-Scroll: Long chats require manual scrolling.
⚠️ Basic Error Handling Only: No advanced handling for rate limits or detailed server errors.
🌐 CDN Dependency: Using external React CDN may cause slight latency