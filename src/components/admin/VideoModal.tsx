import React from "react";

interface ModalProps {
  onClose: () => void;
  videoSrc: string;
}

const VideoModal: React.FC<ModalProps> = ({ onClose, videoSrc }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content w-full md:w-3/5 md:mt-9 bg-white">
        <button className="modal-close font-bold" onClick={onClose}>
          Close
        </button>
        <video controls width="100%" height="auto">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
