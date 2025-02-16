"use client";
import React, { useState, useEffect, useRef } from "react";

const ChatPage: React.FC = () => {
  const getRandomType = () => (Math.random() > 0.5 ? "response" : "input");

  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", type: getRandomType() },
    { id: 2, text: "What are your working hours?", type: getRandomType() },
    { id: 3, text: "We are open from 9 AM to 5 PM.", type: getRandomType() },
    { id: 4, text: "Do you offer support on weekends?", type: getRandomType() },
    {
      id: 5,
      text: "Yes, we offer support on weekends.",
      type: getRandomType(),
    },
    {
      id: 6,
      text: "Can I change my subscription plan?",
      type: getRandomType(),
    },
    {
      id: 7,
      text: "Yes, you can change your subscription plan anytime.",
      type: getRandomType(),
    },
    { id: 8, text: "How do I reset my password?", type: getRandomType() },
    {
      id: 9,
      text: "You can reset your password from the account settings.",
      type: getRandomType(),
    },
    { id: 10, text: "Is there a mobile app available?", type: getRandomType() },
    {
      id: 11,
      text: "Yes, we have a mobile app for both iOS and Android.",
      type: getRandomType(),
    },
    {
      id: 12,
      text: "How do I contact customer support?",
      type: getRandomType(),
    },
    {
      id: 13,
      text: "You can contact customer support via email or phone.",
      type: getRandomType(),
    },
    {
      id: 14,
      text: "What payment methods do you accept?",
      type: getRandomType(),
    },
    {
      id: 15,
      text: "We accept all major credit cards and PayPal.",
      type: getRandomType(),
    },
    { id: 16, text: "Is there a free trial available?", type: getRandomType() },
    {
      id: 17,
      text: "Yes, we offer a 14-day free trial.",
      type: getRandomType(),
    },
    {
      id: 18,
      text: "Can I cancel my subscription anytime?",
      type: getRandomType(),
    },
    {
      id: 19,
      text: "Yes, you can cancel your subscription anytime.",
      type: getRandomType(),
    },
    {
      id: 20,
      text: "Do you offer discounts for annual plans?",
      type: getRandomType(),
    },
    {
      id: 21,
      text: "Yes, we offer a discount for annual plans.",
      type: getRandomType(),
    },
    {
      id: 22,
      text: "How do I update my billing information?",
      type: getRandomType(),
    },
    {
      id: 23,
      text: "You can update your billing information in the account settings.",
      type: getRandomType(),
    },
    { id: 24, text: "What is your refund policy?", type: getRandomType() },
    {
      id: 25,
      text: "We offer a 30-day money-back guarantee.",
      type: getRandomType(),
    },
    { id: 26, text: "Can I upgrade my plan later?", type: getRandomType() },
    {
      id: 27,
      text: "Yes, you can upgrade your plan anytime.",
      type: getRandomType(),
    },
    {
      id: 28,
      text: "Do you offer training for new users?",
      type: getRandomType(),
    },
    {
      id: 29,
      text: "Yes, we offer training sessions for new users.",
      type: getRandomType(),
    },
    { id: 30, text: "Is there an API available?", type: getRandomType() },
    {
      id: 31,
      text: "Yes, we provide an API for developers.",
      type: getRandomType(),
    },
    { id: 32, text: "You too!", type: getRandomType() },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [showInput, setShowInput] = useState(true);
  const lastScrollY = useRef(0);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage }]);
      setNewMessage("");
    }
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setShowInput(true);
      } else {
        setShowInput(false);
      }
      lastScrollY.current = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-800 text-white rounded py-6 px-3 md:px-20 lg:px-60 xl:px-96 shadow-md w-full h-full min-h-screen min-w-screen flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`w-fit p-2.5 rounded-[17px] mb-2 ${
              message.type === "input" ? "bg-gray-500 ml-auto" : "bg-[#505aa3]"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div
        className={`flex items-center py-6 px-3 md:px-20 lg:px-60 xl:px-96 bg-gray-800 fixed bottom-0 left-0 w-full transition-transform duration-300 ${
          showInput ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border border-gray-300 bg-gray-500 p-2 rounded flex-1 mr-2"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
