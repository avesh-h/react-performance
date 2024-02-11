import React, { memo } from "react";

const MemoChildren = ({ children }) => {
  console.log("MemoChildren");
  return <div>{children}</div>;
};

export default memo(MemoChildren);
