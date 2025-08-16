'use client';

import Link from "next/link";

export default function Sidebar(){
    function handleClick(){
        const sidebarDisplay = document.getElementById("sidebar")!.style.display;
        if(sidebarDisplay != 'none'){
            document.getElementById('sidebar')!.style.display = 'none';
        }
        else{
            document.getElementById('sidebar')!.style.display = 'block';
        }
    }

    return(
        <div className="w-[20rem] h-[100vh] bg-black absolute hidden z-5" id="sidebar">
            <div className="flex w-1/1 h-[2rem] justify-end p-2 mb-[2rem]">
                <p className="white text-xl hover:font-extrabold mr-2" onClick={handleClick}>Close</p>
                <img src="/icons8-x-90.png" className="mb-[-1rem]" onClick={handleClick}/>
            </div>
            <div className="w-1/1 block">
                <Link href='#' className="text-center w-auto block p-2 hover:bg-red-950">My Reviews</Link>
                <Link href='#' className="text-center w-auto block p-2 hover:bg-red-950">Watch Later</Link>
                <Link href='#' className="text-center w-auto block p-2 hover:bg-red-950">Following</Link>
            </div>
        </div>
    )
}