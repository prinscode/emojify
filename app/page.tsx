import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white shadow-2xl">
      <h1 className="text-4xl font-bold mb-4">Welcome to AI Chatbot</h1>
      <p className="text-lg mb-8">
        Your virtual assistant for all your queries.
      </p>
      <Link href="/login">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
