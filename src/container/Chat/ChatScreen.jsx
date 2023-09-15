import ChatInput from "./ChatInput";
import MessageList from "./MessageList.jsx";
import React, { useState } from "react";

const ChatScreen = ({ setJsonData, setLoading, userId }) => {
  const [message, setMessage] = useState([]);

  const addNewMessage = (msg, isReset) => {
    if (isReset) setMessage([]);
    else setMessage((prev) => [...prev, msg]);
  };
  return (
    <div className=" bg-white flex flex-col px-10 pt-10 pb-4 rounded-lg space-y-3 my-4 mx-2 w-full h-full justify-between">
      <MessageList list={message} />
      <ChatInput
        addNewMessage={addNewMessage}
        setJsonData={setJsonData}
        setLoading={setLoading}
        userId={userId}
      />
    </div>
  );
};
export default ChatScreen;
