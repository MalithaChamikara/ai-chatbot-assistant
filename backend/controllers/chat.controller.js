const chatService = require("../services/chat.service");

exports.handleChat = async (req, res) => {
  //destruct message from request body
  const { message } = req.body;

  // Check if message is provided
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }
  try {
    const aiResponse = await chatService.getAIResponse(message);
    // Send the AI response back to the client
    return res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error("Error handling chat:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
