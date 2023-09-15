import ChatInput from "./ChatInput";
import MessageList from "./MessageList.jsx";
import React, { useState } from "react";

let messagesList = [
  "hello",
  "how are you.....?",
  "Good day ha!!?",
  "Its heavy rain!!!",
  "advertisement",
];

const ChatScreen = ({ setJsonData, setLoading }) => {
  const [message, setMessage] = useState(messagesList);

  const addNewMessage = (msg) => {
    setMessage((prev) => [...prev, msg]);
  };
  return (
    <div className=" bg-white flex flex-col px-10 pt-10 pb-4 rounded-lg space-y-3">
      <MessageList list={message} />
      <ChatInput
        addNewMessage={addNewMessage}
        setJsonData={setJsonData}
        setLoading={setLoading}
      />
    </div>
  );
};
export default ChatScreen;
