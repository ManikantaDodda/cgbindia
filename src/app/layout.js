"use client";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the whole app with SessionProvider */}
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
