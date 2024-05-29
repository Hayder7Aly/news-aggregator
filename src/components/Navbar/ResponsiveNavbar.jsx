import React from "react";
import Links from "./Links";

const ResponsiveNavbar = ({ navs }) => {
  return (
    <div className="md:hidden  text-gray-400 bg-white mt-6  p-4 space-y-2">
      <Links navs={navs} />
    </div>
  );
};

export default ResponsiveNavbar;
