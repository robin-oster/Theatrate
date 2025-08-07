"use client";
import React from "react";
import BgImage from '/theatrateLoginBg.jpg';

interface loginProps{
    handleLogin: () => void;
    isLoggedIn: boolean;
}

export default function Login(
    {handleLogin, isLoggedIn}: loginProps
){
    return (
        <div className="bg-[url('/theatrateLoginBg.jpg')] w-auto h-[100vh] bg-cover">
            <div className="w-auto h-[100vh] flex justify-center items-center">
                <div className="w-3/4 h-1/3 flex justify-center items-center bg-red-800 border-black 
                    border-2">
                    <form className="w-3/4">
                        <input type="email" placeholder="Enter email..." className="bg-black p-2 mb-4 font-bold w-1/1"/>
                        <input type="password" placeholder="Enter password..." className="bg-black p-2 mb-4 font-bold w-1/1"/>
                        <button onClick={handleLogin} className="bg-black p-2 w-1/1">Login here!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}