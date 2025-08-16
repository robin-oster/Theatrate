"use client";
import Link from "next/link";
import React from "react";

export default function EmailConfirmation(){

    return (
        <div className="bg-[url('/theatrateLoginBg.jpg')] w-auto h-[100vh] bg-cover">
            <div className="w-auto h-[100vh] flex justify-center items-center">
                <div className="w-3/4 h-1/3 flex flex-col justify-center items-center bg-red-800 border-black 
                    border-3 shadow-2xl">  
                    <h1 className="text-3xl w-auto text-center mt-4">Confirmation email sent. Please check your email and follow the
                        link therein.</h1>
                    <Link href='/login' className="w-auto text-2xl bg-red-950 p-2 mt-8">Return to login</Link>
                </div>
            </div>
        </div>
    );
}