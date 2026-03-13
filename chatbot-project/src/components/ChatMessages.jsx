import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";

function useAutoScroll(dependency) {
  const containerRef = useRef(null);
  useEffect(() => {
    const containerElm = containerRef.current;
    if (containerElm) {
      containerElm.scrollTop = containerElm.scrollHeight;
    }
  }, dependency);
  return containerRef;
}

function ChatMessages({ chatMessages }) {
  const chatMessageRef = useAutoScroll([chatMessages]);

  return (
    <div ref={chatMessageRef} className="message-container">
      {chatMessages.length === 0 && (
        <p className="wel-text"> Welcome you can ask below!!!!!!!!!!!</p>
      )}

      {chatMessages.map((chatmessage) => {
        return (
          <ChatMessage
            message={chatmessage.message}
            sender={chatmessage.sender}
            key={chatmessage.id}
            time={chatmessage.time}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
