import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = ({ addNewMessage, setJsonData, setLoading }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    addNewMessage(message);
    getData(message);
    setMessage("");
  };
  async function getData(inputText) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://bff0-103-181-238-106.ngrok-free.app/generate-response?prompt=${inputText}&reset=true`,
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
