import React, { useState, useRef } from "react";
import { Socket } from "socket.io-client";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { User } from "../../../dtos/User";

const ChatFooter: React.FC<{ socket: Socket; user: User | null }> = ({
  socket,
  user,
}) => {
  const inputRef = useRef(null);
  const selectedCourse = useSelector(
    (state: RootState) => state.selecedCourse.course?.courseId
  );
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    // e.preventDefault();
    if (message.trim() && user?.firstname) {
      const courseId =
        typeof selectedCourse === "string"
          ? selectedCourse
          : selectedCourse?.id;
      socket.emit("message", {
        courseId: courseId,
        message: {
          firstname: user.firstname,
          lastname: user.lastname,
          message: message,
          sender: user._id,
        },
      });
    }
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-gray-300 p-4 flex justify-between items-center">
      <input
        className="flex items-center h-10 rounded px-3 text-sm w-full "
        type="text"
        value={message}
        placeholder="Type your message…"
        ref={inputRef}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <i
        className="fa-solid fa-paper-plane text-2xl mx-4"
        onClick={handleSendMessage}
      ></i>
    </div>
  );
};

export default ChatFooter;
