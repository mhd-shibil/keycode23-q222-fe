import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

import { MyVideo } from "../../components/Video/MyVideo";
import { Player } from "@remotion/player";
import ChatScreen from "../Chat/ChatScreen";
import { AppWrap } from "../../wrapper";

import "./Video.scss";

const Video = () => {
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState([]);
  const [userId, setUserId] = useState();

  const compositionWidth = Math.floor(((window.innerWidth - 32) * 2) / 3);
  const compositionHeight = Math.floor(window.innerHeight - 96);

  useEffect(() => {
    if (!userId) setUserId(nanoid());
  }, [userId]);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [0, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info w-1/3 flex gap-4"
      >
        <ChatScreen
          setJsonData={setJsonData}
          setLoading={setLoading}
          userId={userId}
          loading={loading}
          compositionWidth={compositionWidth}
          compositionHeight={compositionHeight}
        />
      </motion.div>
      <div className="w-2/3 h-full p-4">
        {jsonData.length === 0 ? (
          <div className=" w-full h-full bg-white items-center justify-center flex rounded shadow-lg">
            {/* <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            /> */}
            <div className="text-[#6b7688] text-lg">
              Waiting for your prompt....
            </div>
          </div>
        ) : (
          <Player
            component={MyVideo}
            durationInFrames={150}
            // compositionWidth={1200}
            // compositionHeight={700}
            compositionWidth={compositionWidth}
            compositionHeight={compositionHeight}
            fps={30}
            autoPlay
            initiallyShowControls
            clickToPlay
            controls
            inputProps={{
              jsonData: jsonData,
            }}
            // style={{
            //   width: "100%",
            //   height: "100%",
            // }}
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
