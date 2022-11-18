"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute top-0 bg-red-200  w-full h-10 flex flex-row justify-between">
      <Link href="/">Logo</Link>

      <Link href="/user/login">Login</Link>

      <Link href="/user/signup">Sign Up</Link>
    </div>
  );
}
