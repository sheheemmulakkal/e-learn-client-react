import React from "react";
import { useVideo } from "./VideoContext";

const Overview = () => {
  const { handleSeek } = useVideo();

  return (
    <div>
      <button onClick={() => handleSeek(6)}>Skip to 30 seconds</button>
      <button onClick={() => handleSeek(3)}>Skip to 60 seconds</button>
    </div>
  );
};

export default Overview;
