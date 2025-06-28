// Message component to display individual messages
const Message = ({ text, sender }) => {
  return (
    <div className={`message ${sender}`}>
      <p>{text}</p>
    </div>
  );
};

window.Message = Message;