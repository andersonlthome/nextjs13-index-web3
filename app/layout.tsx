"use client";
import Navbar from "./navbar";
import "../styles/globals.css"; //at /app/blog/page.tsx

export default function RootLayout({ children }: any) {
  return (
    <html>
      <head></head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
