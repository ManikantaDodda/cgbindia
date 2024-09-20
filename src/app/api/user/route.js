import { NextResponse } from "next/server";
import { authenticate } from "@/middleware/AuthUser";
import User from "@/models/user";

export async function GET(req) {
  try {
    let auth = await authenticate(req, "admin");
    
    if (auth) {
      const userData = await User.find({ role: "user" }, "name email role");
      
      if (userData.length) {
        return NextResponse.json({ status: "success", data: userData });
      } else {
        return NextResponse.json({ status: "success", message: "Data Not Found", data: userData });
      }
    } else {
      return NextResponse.json({ status: "error", message: "Unauthorised" }, { status: 403 });
    }
  } catch (err) {
    console.log("err", err);
    return NextResponse.json({ status: "error", message: "Server Error" }, { status: 500 });
  }
}
