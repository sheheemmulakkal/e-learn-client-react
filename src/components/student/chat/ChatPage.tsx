import React from "react";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
const ChatPage = () => {
  return (
    <div className="w-full h-full flex flex-col  rounded-sm">
      {/* <div classNameName="h-10 bg-sky-900 flex items-center px-3 rounded-r-sm">
       <div classNameName="rounded-full h-2 w-2 bg-green-500"></div>
       <h1 classNameName="px-3 text-white font-semibold"> 0 online</h1>
     </div>
     <div classNameName="flex-1 overflow-y-auto bg-slate-100">
       <ChatBody />
     </div>
     <div>
       <ChatFooter />
     </div>
    </div> */}
      <div className="flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
