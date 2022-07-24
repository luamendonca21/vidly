import React from "react";

const Like = ({ onClick, liked }) => {
  let classes = "clickable fa fa-heart";
  if (!liked) classes += "-o";
  return <i onClick={onClick} className={classes} aria-hidden="true"></i>;
};

export default Like;
