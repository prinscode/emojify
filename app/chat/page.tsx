"use client";
import ChatPage from "@/components/ChatPage";
import openai from "@/app/lib/openaiClient";

console.log(openai);
const ChatPageWrapper: React.FC = () => {
  return (
    <div>
      <ChatPage />
    </div>
  );
};

export default ChatPageWrapper;
