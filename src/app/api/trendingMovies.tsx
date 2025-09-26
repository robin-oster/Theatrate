"use server";
import {GetMovieInfo } from "./GetMediaInfo";

export default async function GetTrendingMovies(){
    
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTlmYjMwNTk1MmUwZDg4NzA0YmNjZjdjMDQ3MDkxZiIsIm5iZiI6MTc1NTIwNzc3MC42OTI5OTk4LCJzdWIiOiI2ODllNTg1YWI3N2E2ZmY0OTM1ZDI1Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dy0VrMZUbY3wDk8NCpEVl-PDZZGrt9ESxtHg2-qfHD0'
    }
    };

    interface moviesType {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        [index: string]: any
    }

    let movies: moviesType;
    movies = ["test"];

    await fetch(url, options)
    .then(res => res.json())
    .then(json => {movies = json["results"]})
    .catch(err => console.error(err))

    return(
        <div className="grid grid-cols-1 md:grid-cols-4 w-[100%]">
            <GetMovieInfo singleMovie={movies[0]}/>
            <GetMovieInfo singleMovie={movies[1]}/>
            <GetMovieInfo singleMovie={movies[2]}/>
            <GetMovieInfo singleMovie={movies[3]}/>
            <GetMovieInfo singleMovie={movies[4]}/>
            <GetMovieInfo singleMovie={movies[5]}/>
            <GetMovieInfo singleMovie={movies[6]}/>
            <GetMovieInfo singleMovie={movies[7]}/>
            <GetMovieInfo singleMovie={movies[8]}/>
            <GetMovieInfo singleMovie={movies[9]}/>
            <GetMovieInfo singleMovie={movies[10]}/>
            <GetMovieInfo singleMovie={movies[11]}/>
        </div>
    )
}