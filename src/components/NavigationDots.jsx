import React from "react";
import { menuItems } from "../constants";

const NavigationDots = ({ active }) => {
  console.log(active);
  return (
    <div className="app__navigation">
      {menuItems.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        ></a>
      ))}
    </div>
  );
};

export default NavigationDots;
