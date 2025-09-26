"use client";
import handleSearchRequest from "./handleSearch";
import {GetAllMediaInfo} from "./GetMediaInfo";

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
    // send a different query depending on whether searching for movie or show
    if(searchType === "movie"){ // movie
        url = 'https://api.themoviedb.org/3/search/movie?query=' + queryText + '&include_adult=false&language=en-US&page=1';
        options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTlmYjMwNTk1MmUwZDg4NzA0YmNjZjdjMDQ3MDkxZiIsIm5iZiI6MTc1NTIwNzc3MC42OTI5OTk4LCJzdWIiOiI2ODllNTg1YWI3N2E2ZmY0OTM1ZDI1Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dy0VrMZUbY3wDk8NCpEVl-PDZZGrt9ESxtHg2-qfHD0'
            }
        };
    }
    else{ // show
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
    movies = ["test"];

    movies = await handleSearchRequest(url, options, movies);

    return(
        <div className="grid grid-cols-1 md:grid-cols-4 w-[100%]">
            <GetAllMediaInfo moviesArray={movies} searchType={searchType}/>
        </div>
    )
}