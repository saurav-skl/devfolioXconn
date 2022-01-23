import React from "react";

const welcome = {
  height: "300px",
  // width: "100vw",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#00CED1",
  paddingTop: "20px",
  marginTop: "50px",
  marginBottom: "50px",
  paddingLeft: "20px",
  paddingRight: "20px",
};

const Welcome = () => {
  return (
    <div style={welcome}>
      <h1>
        Welcome To Book Api Search Application - Find more info of your books here...
      </h1>
    </div>
  );
};

export default Welcome;
