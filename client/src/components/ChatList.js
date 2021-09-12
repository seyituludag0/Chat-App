import React from "react";
import styles from "./styles.module.css";
import { useChat } from "../contexts/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed"

export default function ChatList() {
  const { messages } = useChat();
  console.log("messages", messages);

  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll="true">
        {
            messages.map((item, index) => (
            <ChatItem key={index} item={item} />
        ))
        }
      </ScrollableFeed>
    </div>
  );
}
