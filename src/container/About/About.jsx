import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { dummyAbouts } from "../../constants";
import images from "../../constants/images";

const About = () => {
  const [abouts, setAbouts] = useState(dummyAbouts);

  return (
    <>
      <h2 className="head-text">
        {" "}
        I know that <span>Good Video</span>
        <br />
        Means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={images.about02} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
