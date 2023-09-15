import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = ({ addNewMessage }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log("Sending message:", message);
    addNewMessage(message);
    setMessage("");
  };

  return (
    <div>
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
    </div>
  );
};

export default ChatInput;
