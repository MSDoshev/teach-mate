import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault(); //prevents page refrenshing
    const loginData = {
      username,
      password,
    };

    console.log(loginData);

    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }

      const data = await response.json();
      console.log("Login successful", data);
    } catch (error) {
      console.error("Error during login", error);
    }
  };
  return (
    
    <div>
        <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          autoComplete="off"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="nope"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
