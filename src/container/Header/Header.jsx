import React from "react";

import AppWrap from "../../wrapper/AppWrap";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div>VidGen</div>
      <div>Visualize your Ideas</div>
    </div>
  );
};

export default AppWrap(Header, "home");
