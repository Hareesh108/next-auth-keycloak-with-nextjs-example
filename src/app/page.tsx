"use client";

import { signIn } from "next-auth/react";
import React, { useState, useCallback } from "react";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      await signIn("keycloak", { redirectTo: "/dashboard" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="w-full h-lvh flex flex-col gap-4 justify-center items-center">
      {error && (
        <div className="text-red-500 mb-4">
          {error}
          <button
            onClick={() => setError(null)}
            className="ml-2 underline border-2 p-2 rounded-sm font-bold"
          >
            Try Again
          </button>
        </div>
      )}
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="w-44 p-2 border-2 disabled:opacity-50"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </button>
    </div>
  );
};

export default Signin;
