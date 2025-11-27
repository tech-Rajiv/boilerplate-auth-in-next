"use client";
import { logoutAction } from "@/app/server-actions/auth/auth";
import { useRouter } from "next/navigation";

import React from "react";

function Logout() {
  const router = useRouter();
  return (
    <button
      className="mt-5 cursor-pointer"
      onClick={async () => {
        await logoutAction();
        router.push("/login");
      }}
    >
      Click to logout
    </button>
  );
}

export default Logout;
