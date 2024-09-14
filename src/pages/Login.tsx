import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Clock from "../components/Clock";
import { mockUser } from "../data/mockData";

interface LoginProps {
  onLogin: (name: string) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check input
    const user = mockUser.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      if (user.role === "Admin") {
        toast.success("Login successful!");
        onLogin(user.name);
        navigate("/dashboard");
      } else {
        toast.error("Access denied");
      }
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[450px] max-w-xl bg-neutral bg-opacity-50 rounded-md">
        <form
          onSubmit={handleSubmit}
          className="rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center justify-center "
        >
          <div className="">
            <h1 className="font-montserrat text-center text-3xl pb-1 font-bold mb-6 pt-11 border-b-2 border-primary w-full ">
              Admin Dashboard
            </h1>
          </div>

          {/* Username */}
          <div className="mb-4 pt-11 w-full">
            <label className="input input-bordered flex items-center gap-2 bg-opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="bg-transparent border-none focus:outline-none"
              />
            </label>
          </div>

          {/* Password */}
          <div className=" mb-6 w-full">
            <label className="input input-bordered flex items-center gap-2 bg-opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </label>
          </div>

          {/* Submit */}
          <div className="pt-11 flex items-center justify-between w-full">
            <button type="submit" className="text-l btn btn-primary w-full">
              Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      <Clock />
    </div>
  );
};

export default Login;
