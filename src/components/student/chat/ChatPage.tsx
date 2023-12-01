import { useState, useEffect, useRef } from "react";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { Message } from "../../../dtos/Chat";
// import { Socket } from "socket.io-client";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../../redux/store";
import { Socket } from "socket.io-client";

interface SocketProps {
  socket: Socket;
}

const ChatPage: React.FC<SocketProps> = ({ socket }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const course = useSelector((state: RootState) => state.selecedCourse.course);
  const [messages, setMessages] = useState<Message[] | []>([]);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const getAllMessages = async () => {
    socket.emit("get-all-messages", { courseId: course?.id });
    socket.on("get-course-response", (messages) => {
      setMessages(messages);
    });
  };

  useEffect(() => {
    getAllMessages();
  }, []);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" })!;
    }
  }, [messages]);
  useEffect(() => {
    socket.on("messageResponse", (data) => {
      console.log(data, "daaata");
      const newMessage = data.message;

      setMessages([...messages, newMessage]);
    });
  }, [socket, messages]);
  return (
    <div className="w-full h-full flex flex-col  rounded-sm">
      <div className="flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <ChatBody
          lastMessageRef={lastMessageRef}
          messages={messages}
          user={user}
        />
        <ChatFooter socket={socket} user={user} />
      </div>
    </div>
  );
};

export default ChatPage;
