'use client';
import Sidebar from "./sidebar";
import { logout } from "./login/actions";
import Link from "next/link";
import { redirect } from "next/navigation";


export default function Header(){

    function handleMovies(){
        if(document.getElementById('trendingMovies')){
            document.getElementById('trendingMovies')!.style.display = 'block';
            document.getElementById('trendingShows')!.style.display = 'none';
        } else {
            redirect('/');
        }
    }

    function handleShows(){
        if(document.getElementById('trendingMovies')){
            document.getElementById('trendingShows')!.style.display = 'block';
            document.getElementById('trendingMovies')!.style.display = 'none';
        } else {
            redirect('/');
        }
    }

    return(
        <div className="flex bg-red-950 w-auto h-[8rem] shadow-2xl sticky">
            <Sidebar/>
            <div className=" flex w-1/6 h-[8rem] bg-black justify-center items-center">
                <h1 className="md:text-3xl font-bold">T h e a t e r a t e</h1>
            </div>
            <Link href={'/'} className="w-1/6"><div className="flex w-[100%] h-[8rem] justify-center items-center hover:bg-black">
                <h1 className="md:text-3xl font-bold">HOME</h1>
            </div></Link>
            <Link href={'/'} className="w-1/6"><div className="flex w-[100%] h-[8rem] justify-center items-center hover:bg-black">
                <h1 className="md:text-3xl font-bold">MOVIES</h1>
            </div></Link>
            <Link href={'/shows'} className="w-1/6"><div className="flex w-[100%] h-[8rem] justify-center items-center hover:bg-black">
                <h1 className="md:text-3xl font-bold">SHOWS</h1>
            </div></Link>
            <div className="flex w-1/6 h-[8rem] justify-center items-center hover:bg-black" onClick={logout}>
                <h1 className="md:text-3xl font-bold">LOG OUT</h1>
            </div>
        </div>
    );
}