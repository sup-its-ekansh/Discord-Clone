import React from "react";
import { auth, provider } from "./firbase.js"
function Login() {
  const signIn= ()=>{
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }


  return (
    <div className=" grid place-items-center h-screen w-[100%]">
      <img
        className="h-36 object-contain "
        src="https://cdn2.downdetector.com/static/uploads/logo/Discord_logo.png"
        alt="Discord-Logo"
      />
      <button onClick={signIn} className="text-[#eff2f5] bg-[#738adb] w-80 font-bold hover:bg-black hover:text-[#738adb] ">
        Sign-In
      </button>
    </div>
  );
}

export default Login;
