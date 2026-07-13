import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl text-center font-bold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="UserName"
          id="username"
        />
        <input
          type="email"
          className="border p-3 rounded-lg"
          placeholder="Email"
          id="emial"
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          placeholder="Password"
          id="password"
        />
        <button className="bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-95">Sign Up</button>
      </form>
      <div className="flex gap-1.5 mt-2">
        <p>Have an account?</p>
        <Link to="/sign-in"><span className="text-blue-400">Sign In</span></Link>
      </div>
    </div>
  );
}
