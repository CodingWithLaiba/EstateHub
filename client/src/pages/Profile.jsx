import { useState } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
   const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className=" text-3xl font-semibold text-center my-7">Profile</h1>
      <form className=" flex flex-col gap-2">
        <img
          className="self-center mt-2 rounded-full h-24 w-24 object-cover cursor-pointer"
          src={currentUser.avatar}
          alt="profile"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="UserName"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          className="border p-3 rounded-lg"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          // disabled={loading}
          className="bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-95 cursor-pointer"
        >
          Update
        </button>
      </form>
      <div className="flex justify-between mt-2">
        <span className="text-red-700 cursor-pointer">Delete Account </span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
