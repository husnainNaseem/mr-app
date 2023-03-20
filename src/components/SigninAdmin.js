import React, { useEffect, useState } from "react";
import { firebase } from "../firebase";
import { Link } from "react-router-dom";
import { Auth } from "firebase/auth";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";


function SigninAdmin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [manualErrorMessage, setManualErrorMessage] = useState(null);


  const login = async (e) => {
    e.preventDefault();
    setManualErrorMessage(null);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        window.location.href = "/admin/dashboard";
      })
      .catch((err) => console.log("err", setManualErrorMessage(err.message)));
  };

  return (
    <div class=" min-h-screen bg-[#89CFF0] flex flex-col">
      <div class="container  max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-[white] px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-darkblue text-center">Sign In</h1>

          <label className='text-darkblue'>Email</label>
          <input
            type="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email" />

          <label className='text-darkblue'>Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password" />
          <button
            onClick={login}
            type="submit"
            class="bg-darkblue w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          >Login</button>
        </div>

      </div>
    </div>
  )
}

export default SigninAdmin