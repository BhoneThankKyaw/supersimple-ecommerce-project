import { useEffect, useState } from "react";
import { Chatbot } from "supersimpledev";
import Loadinggif from "../assets/loading-spinner.gif";
import dayjs from "dayjs";
export function ChatInput({ setChatMessages, chatMessages, setMode, mode }) {
  const [isLoading, setLoading] = useState(false);
  const [inputext, setInputext] = useState("");

  useEffect(() => {
    Chatbot.addResponses({
      goodbye: "dont leave me brother I am the only one you have left",
      bitch: "stop calling me like that bro",
      good: "I can do better",
      love: "If I were in her place I would love you but unfortunately. She is not me.",
      fk: "of course she would leave u. you asshole!!!",
      should: "just live your life peacefully bro",
      sad: "What happened?",
      left: " I told you to act properly duh",
    });
  }, []);

  function saveInputtext(event) {
    setInputext(event.target.value);
  }
  async function sendmessage() {
    if (isLoading || inputext === "") {
      return;
    }
    //make it true at the start
    setLoading(true);
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputext,
        sender: "user",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
      },
    ];
    setChatMessages(newChatMessages);
    setInputext("");

    setChatMessages([
      ...newChatMessages,
      {
        message: <img className="loading" src={Loadinggif} />,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputext);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
      },
    ]);
    setLoading(false);
  }

  function send(event) {
    if (event.key === "Enter") {
      sendmessage();
    }
    if (event.key === "Escape") {
      setInputext("");
    }
  }
  function changeMode() {
    setMode(!mode);
  }
  function clearLoca() {
    setChatMessages([]);
  }
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder=" Ask !!!"
        size="40"
        onChange={saveInputtext}
        value={inputext}
        onKeyDown={send}
        className="search-bar"
      />

      <button className="search-btn" onClick={sendmessage}>
        Send
      </button>
      <button className="search-btn clear-btn" onClick={clearLoca}>
        Clear
      </button>
      <button className="mode-btn search-btn" onClick={changeMode}>
        {mode ? "dark" : "light"}
      </button>
    </div>
  );
}
