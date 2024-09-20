import { NextResponse } from "next/server";
import { authenticate } from "@/middleware/AuthUser";
import User from "@/models/user";
export async function GET(req) {
    try {
    let aath = await authenticate(req, "admin");
    if(aath)
    {
    const userData = await User.find({},"name email role");
    if(userData.length)
    {
    return NextResponse.json({status : "success", data : userData});
    }
    else {
     return NextResponse.json({status : "success", message:"Data Not Found", data : userData});
    }
    }
    else {
      return NextResponse.status(403).json({status : "error", message : "Unauthorised"});  
    }
    }
    catch(err){
        console.log("err", err);
    }
}