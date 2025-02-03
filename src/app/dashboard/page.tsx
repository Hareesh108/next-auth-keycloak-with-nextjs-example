"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-lvh flex justify-center items-center border-red-900">
      <button onClick={handleLogout} className="w-44 p-2 border-2">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
