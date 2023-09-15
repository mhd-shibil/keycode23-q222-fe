import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = ({ addNewMessage, setJsonData, setLoading, userId }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    addNewMessage(message);
    getData();
    setMessage("");
  };
  async function getData(isReset = false) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://bff0-103-181-238-106.ngrok-free.app/generate-response?prompt="${message}"${
          isReset ? "&reset=true" : ""
        }&userId=${userId}`,
        {
          method: "GET",
          redirect: "follow",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          }),
        }
      );
      const data = await response?.json();
      setJsonData(data?.data);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col space-y-2">
      <TextField
        className=""
        fullWidth
        variant="outlined"
        label="Type your message"
        value={message}
        onChange={handleMessageChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
          }
        }}
        InputProps={{
          endAdornment: (
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              aria-label="send message"
            >
              <SendIcon />
            </IconButton>
          ),
        }}
      />
      <button
        className="mr-12 bg-blue-300 px-4 py-2 rounded"
        onClick={() => {
          getData(true);
          addNewMessage("", true);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ChatInput;
