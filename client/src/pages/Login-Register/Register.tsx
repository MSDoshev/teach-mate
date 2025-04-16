import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState<string>(""); //because we are using typescript, we need to define the type of the state
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  interface RegisterFormData {
    //because we are using tsx we should define the types of the data we will send to the server
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    age: string;
    grade: string;
    school: string;
    password: string;
    role: string;
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault(); //prevents page refrenshing
    const formData: RegisterFormData = {
      email,
      username,
      firstName,
      lastName,
      age,
      grade,
      school,
      password,
      role,
    };

    console.log(formData);

    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful", data);
    } catch (error) {
      console.error("Error during registration", error);
    }
  };
  return (
    <div className="justify-center items-center flex flex-col h-screen">
      <form
        action=""
        method="POST"
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col gap-4 text-[15px] border-2 p-2 rounded-md"
      >
        <div className="flex flex-row gap-4">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="email">
                Email:
              </label>
              <input
                className="border-2 border-gray-300 rounded-md p-2"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="username">
                Username
              </label>
              <input
                className="border -2 border-gray-300 rounded-md p-2"
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
              <label className="font-semibold" htmlFor="firstName">
                First Name
              </label>
              <input
                className="border -2 border-gray-300 rounded-md p-2"
                type="text"
                name="firstName"
                id="firstName"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="border -2 border-gray-300 rounded-md p-2"
                type="text"
                name="lastName"
                id="lastName"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="role">
                Role:
              </label>
              <select
                className="border -2 border-gray-300 rounded-md p-2"
                name="role"
                id="role"
                required
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Parent">Parent</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="age">
                Age
              </label>
              <input
                className="border -2 border-gray-300 rounded-md p-2"
                type="text"
                name="age"
                id="age"
                required
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="grade">
                Grade
              </label>
              <input
                className="border -2 border-gray-300 rounded-md p-2"
                type="text"
                name="grade"
                id="grade"
                required
                onChange={(e) => setGrade(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="school">
                School
              </label>
              <input
                className="border -2 border-gray-300 rounded-md p-2"
                type="text"
                name="school"
                id="school"
                required
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className="border -2 border-gray-300 rounded-md p-2"
                type="password"
                name="password"
                id="password"
                autoComplete="nope"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/*we need a repeat password block */}
        <button className="border-2 text-[18px] font-semibold w-[50%] "type="submit">Register</button>
      </form>
      <p className="text-[18px]">Already have an account?</p>
      <Link className="text-[20px] font-semibold border-2 p-2 rounded-md"  to="/login">Login</Link>
    </div>
  );
}
