"use server";

interface moviesType {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    [index: string]: any
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export default async function handleSearchRequest(url: string, options: any, movies: moviesType){

    await fetch(url, options)
    .then(res => res.json())
    .then(json => {movies = json["results"]})
    .catch(err => console.error(err));
    return movies;
}