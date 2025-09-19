"use server";
import rateMovie from "./actions";
import handleSearchRequest from "./handleSearch";

interface SearchMediaProps {
    queryText: string
}

interface mediaType {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    [index: string]: any
}

export default async function SearchMedia({queryText}: SearchMediaProps, searchType: string) {

    let url = '';
    let options = {};
    if(searchType === "movie"){
        url = 'https://api.themoviedb.org/3/search/movie?query=' + queryText + '&include_adult=false&language=en-US&page=1';
        options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTlmYjMwNTk1MmUwZDg4NzA0YmNjZjdjMDQ3MDkxZiIsIm5iZiI6MTc1NTIwNzc3MC42OTI5OTk4LCJzdWIiOiI2ODllNTg1YWI3N2E2ZmY0OTM1ZDI1Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dy0VrMZUbY3wDk8NCpEVl-PDZZGrt9ESxtHg2-qfHD0'
            }
        };
    }
    else{
        url = 'https://api.themoviedb.org/3/search/tv?query=' + queryText + '&include_adult=false&language=en-US&page=1';
        options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTlmYjMwNTk1MmUwZDg4NzA0YmNjZjdjMDQ3MDkxZiIsIm5iZiI6MTc1NTIwNzc3MC42OTI5OTk4LCJzdWIiOiI2ODllNTg1YWI3N2E2ZmY0OTM1ZDI1Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dy0VrMZUbY3wDk8NCpEVl-PDZZGrt9ESxtHg2-qfHD0'
            }
        };
    }

    let movies: mediaType;
    let moviesArray: mediaType;
    moviesArray = ["test"];
    movies = ["test"];

    movies = await handleSearchRequest(url, options, movies);
    

    function getMediaInfo(singleMovie: mediaType, searchType: string){ //return appropriate jsx for movie
        
        let title = <h1 className="text-3xl text-center bg-red-950 p-2">{singleMovie["title"]}</h1>;
        let release_date = <p className="pl-2 text-red-400">Release Date: {singleMovie["release_date"]} </p>
        let rateButton = <button className="p-2 m-2 bg-red-700 hover:bg-red-500">Rate this Movie</button>;
        if (searchType === "show"){
            title = <h1 className="text-3xl text-center bg-red-950 p-2">{singleMovie["name"]}</h1>;
            release_date = <p className="pl-2 text-red-400">Air Date: {singleMovie["first_air_date"]} </p>;
            rateButton = <button className="p-2 m-2 bg-red-700 hover:bg-red-500">Rate this Show</button>;
        }


        return(
            <div className="w-auto border-black border-2 m-4 bg-red-950">
                {title}
                <img src={"https://image.tmdb.org/t/p/original/" + singleMovie["poster_path"]} alt="No poster" className=""/>
                <p className="pl-2 pt-2 font-bold text-red-400">Rating: {singleMovie["vote_average"]} / 10</p>
                {release_date}
                <p className="p-2">{singleMovie["overview"]}</p>
                <form action={rateMovie}>
                    {rateButton}
                    <input type="hidden" name="movieID" value={singleMovie["id"]}/>
                    <input type="number" name="rating" min="0" max="10" className="m-2 p-2 bg-black inline-block" />
                    <p className="inline-block">/ 10</p>
                </form>
            </div>
        )
    }

    function getAllMediaInfo(movieArray: mediaType, searchType: string){
        let movieList = [];
        let movieToAdd = <p></p>;
        for(let i = 0; i < movieArray.length; i++){
            movieToAdd = getMediaInfo(movieArray[i], searchType) //get each jsx block
            movieList.push(movieToAdd); //add to array
        }

        return movieList;
    }

    return(
        <div className="grid grid-cols-1 md:grid-cols-4 w-[100%]">
            {getAllMediaInfo(movies, searchType)}
        </div>
    )
}