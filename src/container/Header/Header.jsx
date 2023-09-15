import React from "react";

import AppWrap from "../../wrapper/AppWrap";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-[150px]">
        Vid<span className="text-[#313bac]">Gen.AI</span>
      </div>
      <div className="text-[18px] mt-[-50px] mb-[40px]">
        Visualize your Ideas
      </div>
      <a
        href={`#get started`}
        className="cursor-pointer mt-2 rounded-lg bg-[#313bac] text-white px-4 py-2"
      >
        Get Started
      </a>
    </div>
  );
};

export default AppWrap(Header, "home");
