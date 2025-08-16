export default function Footer(){
    return(
        <div className="w-auto h-[20rem] bg-black">
            <p className="text-gray-400 text-xl p-2">Made possible by:</p>
            <img src="movie_db.svg" alt="The Movie DB" className="w-[20rem] p-2"/>
            <p className="text-gray-400"><a target="_blank" href="https://icons8.com/icon/17181/xbox-menu" className="p-2">Hamburger Button</a>icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
            <p className="text-gray-400"><a target="_blank" href="https://icons8.comundefined" className="p-2">Arrow</a>icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
        </div>
    );
}