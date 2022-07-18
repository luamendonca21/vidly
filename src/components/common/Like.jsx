import React, { Component } from "react";
// Input: liked: boolean
// Output: onClick

const Like = (props) => {
  let classes = "clickable fa fa-heart";
  if (!props.liked) classes += "-o";
  return <i onClick={props.onClick} className={classes} aria-hidden="true"></i>;
};

export default Like;
