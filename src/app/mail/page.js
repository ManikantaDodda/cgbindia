"use client";
import React, { useState } from 'react';
import axios from 'axios';

function page() {

    const sendMail = async() =>{
        alert("click");
        await axios.post("api/sendmail", {to : "nagasaidodda@gmail.com", subject : "Hi", body:"somthing"})
        .then(()=>{
            console.log("message");
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className='flex flex-col items-center'>
            {/* <input name="email" type='text' onChange={(e)=>setMail(e.target.value)} /> */}
            <button className="bg-blue px-6 py-4 " onClick = {sendMail}>SendMail</button>
        </div>
    );
}

export default page;