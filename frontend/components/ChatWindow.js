// ChatWindow component to display all messages
const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
};

window.ChatWindow = ChatWindow;
