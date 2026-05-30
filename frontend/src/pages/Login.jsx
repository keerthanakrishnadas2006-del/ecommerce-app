import { useState } from "react";
import { supabase } from "../supabaseClient";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert("Login failed: " + error.message);
    } else {
      alert("Logged in successfully!");
    }
  };

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert("Signup failed: " + error.message);
    } else {
      alert("Signup successful! Please check your email.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Login / Signup</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-3 w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-3 w-64"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="space-x-4">
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
        <button onClick={handleSignup} className="bg-green-500 text-white px-4 py-2 rounded">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Login;
