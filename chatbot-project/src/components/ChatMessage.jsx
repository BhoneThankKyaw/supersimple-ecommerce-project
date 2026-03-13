import Robotpfimg from "../assets/robot chatbot.png";
import Userpfimg from "../assets/user chatbot.png";
import dayjs from "dayjs";

export function ChatMessage({ message, sender, time }) {
  return (
    <div
      className={
        sender === "robot" ? "robot-message mess" : "user-message mess"
      }
    >
      {sender === "robot" && (
        <>
          <img className="profile-img" src={Robotpfimg} alt="robot" />
          <p className="message">{message}</p>
          {time && (
            <div className="chat-message-time">
              {dayjs(time).format("h:mma")}
            </div>
          )}
        </>
      )}

      {sender === "user" && (
        <>
          {time && (
            <div className="chat-message-time">
              {dayjs(time).format("h:mma")}
            </div>
          )}
          <p className="message">{message}</p>
          <img className="profile-img" src={Userpfimg} alt="user" />
        </>
      )}
      {/* The "time && (" check is optional. I added it just to be safe. */}
    </div>
  );
}
