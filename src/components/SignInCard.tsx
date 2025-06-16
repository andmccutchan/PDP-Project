import { supabase } from "@/supabase-client";
import { useState } from "react";

const SignInCard = () => {
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
    <div className="w-1/4">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-2 rounded-sm px-2"
        />
        <input
          type="password"
          placeholder="Passowrd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-2 rounded-sm px-2"
        />
        <button type="submit">Sign In</button>
        {msg && <p>{msg}</p>}
      </form>
    </div>
  );
};

export default SignInCard;
