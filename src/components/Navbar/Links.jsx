import React from "react";
import Link from "./Link";

const Links = ({ navs }) => {
  return (
    <>
      {navs.map((nav, idx) => (
        <Link key={idx} {...nav} />
      ))}
    </>
  );
};

export default Links;
