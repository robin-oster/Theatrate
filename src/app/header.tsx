export default function Header(){

    return(
        <div className="flex bg-red-950 w-auto h-[8rem] shadow-2xl sticky">
            <div className=" flex w-1/6 h-[8rem] bg-black justify-center items-center">
                <h1 className="md:text-3xl font-bold">T h e a t r a t e</h1>
            </div>
            <button className="flex w-1/6 h-[8rem] justify-center items-center hover:bg-black">
                <img src="/icons8-hamburger-button-50.png" alt="menu-bar"/>
            </button>
            <div className="flex w-1/6 h-[8rem] justify-center items-center hover:bg-black">
                <h1 className="md:text-3xl font-bold">HOME</h1>
            </div>
            <div className="flex w-1/6 h-[8rem] justify-center items-center hover:bg-black">
                <h1 className="md:text-3xl font-bold">MOVIES</h1>
            </div>
            <div className="flex w-1/6 h-[8rem] justify-center items-center hover:bg-black">
                <h1 className="md:text-3xl font-bold">ACCOUNT</h1>
            </div>
        </div>
    );
}