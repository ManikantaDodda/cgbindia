"use client";
import React, { useState } from 'react';
import axios from 'axios';

function Page() {
  const [email, setEmail] = useState("");

  const sendMail = async () => {
    if (!email.includes('@') || email.trim() === "") {
        return alert("Please enter a valid email address");
      }
    alert("Sending mail...");
    try {
      const response = await axios.post("/api/sendmail", {
        to: email,
        subject: "Hi",
        body: "Something",
      });
      console.log("Message sent:", response.data);
    } catch (err) {
      console.error("Error sending email:", err);
    }
  };

  return (
    <div className="flex flex-col items-center">
        <form>
      <input
        id="email" required
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 text-base block bg-white border-gray-300 rounded-md"
      />
      <button className="bg-blue px-6 py-4 mt-4" onClick={sendMail}>
        Send Mail
      </button>
      </form>
    </div>
  );
}

export default Page;
