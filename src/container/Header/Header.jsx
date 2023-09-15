import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Header.scss";

import AppWrap from "../../wrapper/AppWrap";
import { MyVideo } from "../../components/Video/MyVideo";
import { Player } from "@remotion/player";
import Message from "../Chat/Message.jsx";
import ChatInput from "../Chat/ChatInput";
import ChatScreen from "../Chat/ChatScreen";
const Header = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeinput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <ChatScreen />
        {/* <Message chatMsg={"hi......."} isUser={true} />
        <Message chatMsg={"hi how are you"} isUser={false} /> */}
        {/* <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <h5 className="head-text">Type Anything </h5>
            </div>
          </div>
        </div> */}
      </motion.div>
      <div
        style={{
          width: "800px",
          height: "500px",
        }}
      >
        <Player
          component={MyVideo}
          durationInFrames={400}
          compositionWidth={800}
          compositionHeight={500}
          fps={30}
          autoPlay
          initiallyShowControls
          alwaysShowControls
          clickToPlay
          controls
        />
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      ></motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
