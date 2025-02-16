"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(" hier");
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error?.message);
    } else {
      console.log("User logged in:", data);
      // Redirect or perform other actions after successful login
    }
  };

  const setLoginDetails = (
    event: React.FormEvent,
    type: string,
    value: string
  ) => {
    event.preventDefault();

    if (type === "email") setEmail(value);
    if (type === "password") setPassword(value);
  };

  return (
    <div className="bg-gray-800 text-white rounded w-1/3 min-w-[350px]">
      <form className="p-6 shadow-md" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setLoginDetails(e, "email", e.target.value)}
            required
            className="border border-gray-300 bg-gray-500 p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setLoginDetails(e, "password", e.target.value)}
            required
            className="border border-gray-300 bg-gray-500 p-2 rounded w-full"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Log In
        </button>
        <div className="mt-4">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
