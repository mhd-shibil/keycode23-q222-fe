import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";

import "./Header.scss";

import AppWrap from "../../wrapper/AppWrap";
import { MyVideo } from "../../components/Video/MyVideo";
import { Player } from "@remotion/player";

const Header = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState([]);

  const handleChangeinput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {};

  // useEffect(() => {
  //   getData();
  // }, []);

  async function getData(isReset = false) {
    setLoading(true);
    // TODO: need to change
    try {
      const response = await fetch(
        `https://bff0-103-181-238-106.ngrok-free.app/generate-response?prompt="${input}"${
          isReset ? "&reset=true" : ""
        }`,
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

  const handleClick = () => {
    getData();
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info w-1/3"
      >
        {/* <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <h5 className="head-text">Type Anything </h5>
            </div>
          </div>
        </div> */}
        <div className="w-full h-30 justify-center flex flex-col items-center gap-4">
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
        </div>
      </motion.div>
      <div
        // style={{
        //   width: "auto",
        //   // height: "500px",
        // }}
        className="w-2/3"
      >
        {loading ? (
          <div className=" w-[800px] h-[500px] bg-gray-400 items-center justify-center flex ">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        ) : (
          <Player
            component={MyVideo}
            durationInFrames={500}
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
