import React, { createContext, useContext, useRef } from "react";
import ReactPlayer from "react-player";

type VideoContextType = {
  playerRef: React.MutableRefObject<ReactPlayer | null>;
  handleSeek: (seconds: number) => void;
};

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const playerRef = useRef<ReactPlayer | null>(null);

  const handleSeek = (seconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds, "seconds");
    }
  };

  return (
    <VideoContext.Provider value={{ playerRef, handleSeek }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};
