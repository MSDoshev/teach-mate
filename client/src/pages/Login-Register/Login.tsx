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
    <div className="justify-center items-center flex flex-col h-screen">
      <form
        className="flex flex-col gap-4 text-[15px] border-2 p-2 rounded-md"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="username">
            Username
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            autoComplete="off"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="password"
            name="password"
            id="password"
            autoComplete="nope"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="border-2 text-[18px] font-semibold" type="submit">Login</button>
      </form>
    </div>
  );
}
