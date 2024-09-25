import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const dynamic = "force-dynamic";
export  const POST =async(req) =>{
const {to, subject, body} = await req.json();
    console.log(to, "userr");
const transport = createTransport({
    host : "smtp.gmail.com",
    port: 587,
    secure : false,
    auth : {
        user : process.env.USER,
        pass : process.env.PASS
    }
})

const send =await transport.sendMail({
    from : process.env.USER,
    to : to,
    subject : subject,
    text : body,
    html :"<h1> No Reply</h1>"
})
console.log("is send", send);
return NextResponse.json({message : "message send"});

}

