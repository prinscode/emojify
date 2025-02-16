"use client";
import SignupForm from "@/components/SignupForm";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
