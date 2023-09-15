import React, { useEffect, useState } from "react";
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
  const [jsonData, setJsonData] = useState([]);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <ChatScreen setJsonData={setJsonData} setLoading={setLoading} />
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
          width: "auto",
          height: "500px",
        }}
      >
        {loading ? (
          <span>loading...</span>
        ) : (
          <Player
            component={MyVideo}
            durationInFrames={500}
            compositionWidth={800}
            compositionHeight={500}
            fps={30}
            autoPlay
            initiallyShowControls
            clickToPlay
            controls
            inputProps={{
              jsonData: jsonData,
            }}
          />
        )}
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
