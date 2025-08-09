"use client";
import React from "react";
import { login, signup } from './actions';

export default function Login(){

    return (
        <div className="bg-[url('/theatrateLoginBg.jpg')] w-auto h-[100vh] bg-cover">
            <div className="w-auto h-[100vh] flex justify-center items-center">
                <div className="w-3/4 h-1/3 flex justify-center items-center bg-red-800 border-black 
                    border-3 shadow-2xl">  
                    <form className="w-3/4" method="post">
                    <h1 className="w-1/1 text-center mb-2 text-white text-2xl font-bold">T h e a t r a t e</h1>
                        <input type="email" id="email" name="email" placeholder="Enter email..." className="bg-black p-2 mb-4 font-bold w-1/1" required/>
                        <input type="password" id="password" name="password" placeholder="Enter password..." className="bg-black p-2 mb-4 font-bold w-1/1" required/>
                        <button formAction={login} className="bg-black p-2 w-1/1">Login here!</button>
                        <button formAction={signup} className="bg-black p-2 mt-2 w-1/1">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}