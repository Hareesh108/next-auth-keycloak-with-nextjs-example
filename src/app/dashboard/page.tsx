"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    try {
      // Explicitly call Keycloak logout endpoint
      const logoutUrl = `${process.env.AUTH_KEYCLOAK_ISSUER}/protocol/openid-connect/logout`;
      const params = new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_KEYCLOAK_ID ?? "",
        client_secret: process.env.NEXT_PUBLIC_KEYCLOAK_SECRET ?? "",
        refresh_token: session?.user?.refresh_token ?? "",
      });
      await fetch(logoutUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      await signOut();
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Signing out...");
    }
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
