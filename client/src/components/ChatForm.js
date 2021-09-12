import React, { useState } from "react";
import styles from "./styles.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../contexts/ChatContext";
import SendRounded from "@material-ui/icons/SendRounded";

export default function ChatForm() {
  const [message, setMessage] = useState("");
  const { setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setMessages((preventState) => [...preventState, { message, fromMe: true }]);
    console.log(message);
    sendMessage(message);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          autoFocus
          placeholder="Bir mesaj yaz..."
        />
        <button style={{backgroundColor: "transparent"}}>
          <SendRounded style={{ color: "#5c5ca5", float: "right" }} />
        </button>
      </form>
    </div>
  );
}
