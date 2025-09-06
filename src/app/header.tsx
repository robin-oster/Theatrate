'use client';
import Sidebar from "./sidebar";

export default function Header(){
    function handleClick(){
        const sidebarDisplay = document.getElementById("sidebar")!.style.display;
        if(sidebarDisplay != 'none'){
            document.getElementById('sidebar')!.style.display = 'none';
        }
        else{
            document.getElementById('sidebar')!.style.display = 'block';
        }
    }

    function handleMovies(){
        document.getElementById('trendingMovies')!.style.display = 'block';
        document.getElementById('trendingShows')!.style.display = 'none';
    }

    function handleShows(){
        document.getElementById('trendingShows')!.style.display = 'block';
        document.getElementById('trendingMovies')!.style.display = 'none';
    }

    return(
        <div className="flex bg-red-950 w-auto h-[8rem] shadow-2xl sticky">
            <Sidebar/>
            <div className=" flex w-1/6 h-[8rem] bg-black justify-center items-center">
                <h1 className="md:text-3xl font-bold">T h e a t e r a t e</h1>
            </div>
            <button className="flex w-1/6 h-[8rem] justify-center items-center hover:bg-black" onClick={handleClick}>
                <img src="/icons8-hamburger-button-50.png" alt="menu-bar"/>
            </button>
            <a href="/" className="w-1/6"><div className="flex w-[100%] h-[8rem] justify-center items-center hover:bg-black">
                <h1 className="md:text-3xl font-bold">HOME</h1>
            </div></a>
            <div className="flex w-1/6 h-[8rem] justify-center items-center hover:bg-black" onClick={handleMovies}>
                <h1 className="md:text-3xl font-bold">MOVIES</h1>
            </div>
            <div className="flex w-1/6 h-[8rem] justify-center items-center hover:bg-black" onClick={handleShows}>
                <h1 className="md:text-3xl font-bold">SHOWS</h1>
            </div>
        </div>
    );
}