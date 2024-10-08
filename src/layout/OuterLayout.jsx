import React from "react";
import Navbar from "../components/Navbar";

const OuterLayout = ({ childern }) => {
  return (
    <div>
      <Navbar />
      {childern}
    </div>
  );
};

export default OuterLayout;
