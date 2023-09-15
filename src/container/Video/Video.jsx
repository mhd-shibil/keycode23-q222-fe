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
  const userId = useRef();

  useEffect(() => {
    if (!userId.current) userId.current = nanoid();
  }, []);

  console.log(jsonData);

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
          userId={userId.current}
        />
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
        {/* <div className="w-full h-30 justify-center flex flex-col items-center gap-4">
          <input
            className="w-full h-12 border-2 rounded px-4 row-span-3"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <div>
            <button
              className="mr-12 bg-blue-300 px-4 py-2 rounded"
              onClick={handleClick}
            >
              Create
            </button>
            <button
              className="mr-12 bg-blue-300 px-4 py-2 rounded"
              onClick={() => getData(true)}
            >
              Reset
            </button>
          </div>
        </div> */}
      </motion.div>
      <div
        // style={{
        //   width: "auto",
        //   // height: "500px",
        // }}
        className="w-2/3 h-full p-4"
      >
        {jsonData?.data?.length === 0 ? (
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
