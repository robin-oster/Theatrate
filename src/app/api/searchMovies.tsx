"use server";
import handleSearchRequest from "./handleSearch";

interface SearchMoviesProps {
    queryText: string
}

interface moviesType {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    [index: string]: any
}

export default async function SearchMovies({queryText}: SearchMoviesProps) {

    console.log(queryText);
    let url = 'https://api.themoviedb.org/3/search/movie?query=' + queryText + '&include_adult=false&language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTlmYjMwNTk1MmUwZDg4NzA0YmNjZjdjMDQ3MDkxZiIsIm5iZiI6MTc1NTIwNzc3MC42OTI5OTk4LCJzdWIiOiI2ODllNTg1YWI3N2E2ZmY0OTM1ZDI1Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dy0VrMZUbY3wDk8NCpEVl-PDZZGrt9ESxtHg2-qfHD0'
        }
    };

    let movies: moviesType;
    let moviesArray: moviesType;
    moviesArray = ["test"];
    movies = ["test"];

    movies = await handleSearchRequest(url, options, movies);
    

    function getMovieInfo(singleMovie: moviesType){ //return appropriate jsx for movie
        return(
            <div className="w-auto border-black border-2 m-4 bg-red-950">
                <h1 className="text-3xl text-center bg-red-950 p-2">{singleMovie["title"]}</h1>
                <img src={"https://image.tmdb.org/t/p/original/" + singleMovie["poster_path"]} alt="No poster" className=""/>
                <p className="pl-2 pt-2 font-bold text-red-400">Rating: {singleMovie["vote_average"]} / 10</p>
                <p className="pl-2 text-red-400">Release Date: {singleMovie["release_date"]} </p>
                <p className="p-2">{singleMovie["overview"]}</p>
            </div>
        )
    }

    function getAllMovieInfo(movieArray: moviesType){
        let movieList = [];
        let movieToAdd = <p></p>;
        for(let i = 0; i < movieArray.length; i++){
            movieToAdd = getMovieInfo(movieArray[i]) //get each jsx block
            movieList.push(movieToAdd); //add to array
        }

        return movieList;
    }

    return(
        <div className="grid grid-cols-1 md:grid-cols-4 w-[100%]">
            {getAllMovieInfo(movies)}
        </div>
    )
}