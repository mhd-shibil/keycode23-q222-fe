import ChatInput from "./ChatInput";
import MessageList from "./MessageList.jsx";
import React, { useState } from "react";
import "./ChatScreen.scss";

const ChatScreen = ({
  setJsonData,
  setLoading,
  userId,
  loading,
  compositionWidth,
  compositionHeight,
}) => {
  const [message, setMessage] = useState([]);
  const [isValidInput, setIsValidInput] = useState(true);

  const addNewMessage = (msg, isReset) => {
    if (isReset) setMessage([]);
    else setMessage((prev) => [...prev, msg]);
  };
  return (
    <div className="relative bg-white flex flex-col pt-10 pb-4 rounded-lg space-y-3 my-4 mx-2 w-full h-full justify-between">
      <div className="chatHistory overflow-auto px-10 pb-[160px]">
        <MessageList
          list={message}
          loading={loading}
          isValidInput={isValidInput}
        />
      </div>
      <div className="absolute bottom-0 z-10 bg-white my-4 w-full px-10 py-4">
        <ChatInput
          setIsValidInput={setIsValidInput}
          addNewMessage={addNewMessage}
          setJsonData={setJsonData}
          setLoading={setLoading}
          userId={userId}
          compositionWidth={compositionWidth}
          compositionHeight={compositionHeight}
        />
      </div>
    </div>
  );
};
export default ChatScreen;
