"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-lvh flex justify-center items-center border-red-900 bg-slate-300">
      <button
        onClick={handleLogout}
        className="w-44 py-4 border-2 bg-slate-700 text-white font-bold rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
