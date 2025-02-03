"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Signin = () => {
  const router = useRouter();
  const handleSignin = () => {
    router.push("dashboard");
  };

  return (
    <div className="w-full h-lvh flex justify-center items-center border-red-900">
      <button onClick={handleSignin} className="w-44 p-2 border-2">
        Signin
      </button>
    </div>
  );
};

export default Signin;
