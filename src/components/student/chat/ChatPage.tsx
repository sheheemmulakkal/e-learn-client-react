import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
const ChatPage = () => {
  return (
    <div className="w-full h-full flex flex-col  rounded-sm">
      <div className="flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
