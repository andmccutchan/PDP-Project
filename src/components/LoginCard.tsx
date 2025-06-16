import { supabase } from "@/supabase-client";
import { useState } from "react";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMsg(`${error.message}`);
    } else {
      setMsg(`Welcome, ${data.user.email}`);
    }
  };

  return (
    <div className="w-1/4 border-2 p-5 rounded-sm">
      <h2 className="mb-2 text-center">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-2 rounded-sm px-2 mb-2"
        />
        <input
          type="password"
          placeholder="Passowrd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-2 rounded-sm px-2"
        />
        <button
          type="submit"
          className="bg-green-400 w-1/2 mx-auto rounded-md my-2"
        >
          Sign In
        </button>
        {msg && <p>{msg}</p>}
      </form>
    </div>
  );
};

export default LoginCard;
