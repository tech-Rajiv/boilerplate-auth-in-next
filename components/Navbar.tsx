import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between p-3 border-b">
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/login"}>login</Link>
      <Link href={"/signup"}>Signup</Link>
      <Link href={"/logout"}>logout</Link>
    </div>
  );
}

export default Navbar;
