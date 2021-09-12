import React, { useEffect } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import { init, subscribeChat, 
  // subscribeInitialMessages
 } from "../socketApi";
import { useChat } from "../contexts/ChatContext";

export default function Container() {
  const { setMessages } = useChat();

  useEffect(() => {
    init();

    // subscribeInitialMessages((messages) => setMessages(messages));
    
    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  });

  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}
