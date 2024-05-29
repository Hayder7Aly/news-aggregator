import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({ page, nav }) => {
  return (
    <Link to={page} className="block hover:text-gray-400 hover:underline">
      {nav}
    </Link>
  );
};

export default LinkComponent;
