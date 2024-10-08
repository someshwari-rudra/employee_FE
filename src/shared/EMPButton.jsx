import { Button } from "@mui/material";
import React from "react";

const EMPButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default EMPButton;
