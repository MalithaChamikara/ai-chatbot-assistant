const { useState } = React;

// Main App component
const App = () => {
  const [messages, setMessages] = useState([]);

  // Function to send a message
  const sendMessage = async (text) => {
    // Add user message to the conversation
    setMessages([...messages, { text, sender: "user" }]);

    try {
      // Call the backend API
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();

      if (response.ok) {
        // Add AI response to the conversation
        setMessages((prev) => [...prev, { text: data.response, sender: "ai" }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { text: "Error: " + data.error, sender: "ai" },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Error: Failed to connect to the server", sender: "ai" },
      ]);
    }
  };

  return (
    <div className="chat-container">
      <h1>AI Chatbot Assistant</h1>
      {window.ChatWindow && (
        <window.ChatWindow messages={messages} />
      )}
      {window.InputField && (
        <window.InputField onSend={sendMessage} />
      )}
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
