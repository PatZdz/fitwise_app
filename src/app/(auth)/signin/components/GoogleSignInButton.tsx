"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../../../firebaseConfig";

export default function GoogleSignInButton() {
  
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // console.log("User Info:", result.user);
      // redirect to /
      window.location.href = "/";
      
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded"
    onClick={handleSignIn}
    >
    {/* Replace this src with your Google icon, or remove the <img> if not needed */}
    <img
      src="/google-icon.svg"
      alt="Google icon"
      className="w-5 h-5 mr-2"
    />
    Kontynuuj przy użyciu konta Google
  </button>
  );
}