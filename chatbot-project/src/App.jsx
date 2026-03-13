import { useEffect, useState } from "react";

import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

import "./App.css";

function App() {
  const [mode, setMode] = useState(true);
  const [chatMessages, setChatMessages] = useState(() => {
    const saved = localStorage.getItem("messages");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className={mode ? "app-box" : "app-box dark"}>
      <ChatMessages
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        setMode={setMode}
        mode={mode}
      >
        {" "}
      </ChatInput>
    </div>
  );
}

export default App;
