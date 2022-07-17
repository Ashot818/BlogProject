import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div style={{ fontSize: "20px", color: "#2A4B7C" }}>loading ...</div>
    </>
  );
}

export default Loading;
