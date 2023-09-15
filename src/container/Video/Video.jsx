import React, { useEffect, useState, useRef } from "react";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

import "./Video.scss";

import AppWrap from "../../wrapper/AppWrap";
import { MyVideo } from "../../components/Video/MyVideo";
import { Player } from "@remotion/player";
import Message from "../Chat/Message.jsx";
import ChatInput from "../Chat/ChatInput";
import ChatScreen from "../Chat/ChatScreen";
const Video = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (!userId) setUserId(nanoid());
  }, [userId]);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info w-1/3 flex gap-4"
      >
        <ChatScreen
          setJsonData={setJsonData}
          setLoading={setLoading}
          userId={userId}
          loading={loading}
        />
      </motion.div>
      <div className="w-2/3 h-full p-4">
        {jsonData.length === 0 ? (
          <div className=" w-full h-full bg-gray-400 items-center justify-center flex rounded ">
            {/* <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            /> */}
          </div>
        ) : (
          <Player
            component={MyVideo}
            durationInFrames={150}
            compositionWidth={1200}
            compositionHeight={700}
            fps={30}
            autoPlay
            initiallyShowControls
            clickToPlay
            controls
            inputProps={{
              jsonData: jsonData,
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
            loop
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

export default AppWrap(Video, "get started");
