"use client";
import rateMedia from "./actions";
import { FormEvent } from "react";

interface moviesType {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    [index: string]: any
}

function handleRatingUpdated(e: FormEvent<HTMLFormElement>, id: string){
    const { target } = e;
    if (target instanceof HTMLElement){
        const doc = document.getElementById(id);
        if(doc){
            doc.className = "block p-2 m-2 bold font-bold text-xl";
        }
    }
}

function getMediaInfo(singleMovie: moviesType, searchType: string){ //return appropriate jsx for movie
        
    let title = <h1 className="text-3xl text-center bg-red-950 p-2">{singleMovie["title"]}</h1>;
    let release_date = <p className="pl-2 text-red-400">Release Date: {singleMovie["release_date"]} </p>
    let rateButton = <button className="p-2 m-2 bg-red-700 hover:bg-red-500">Rate this Movie</button>;
    if (searchType === "show"){ // replace differing fields
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
            <form action={rateMedia} onSubmit={e => handleRatingUpdated(e, singleMovie["id"])}>
                {rateButton}
                <input type="hidden" name="movieID" value={singleMovie["id"]}/>
                <input type="number" name="rating" min="0" max="10" className="m-2 p-2 bg-black inline-block" />
                <p className="inline-block">/ 10</p>
                <p className="hidden" id={singleMovie["id"]}>Rating Updated!</p>
            </form>
        </div>
    )
}

export function GetAllMediaInfo(movieArray: moviesType, searchType: string){
    const movieList = [];
    let movieToAdd = <p></p>;
    movieArray = movieArray["moviesArray"];
    for(let i = 0; i < movieArray.length; i++){
        movieToAdd = getMediaInfo(movieArray[i], searchType) //get each jsx block
        movieList.push(movieToAdd); //add to array
    }

    return movieList;
}

export function GetMovieInfo(singleMovie: moviesType){
    singleMovie = singleMovie["singleMovie"];
    return(
        <div className="w-auto border-black border-2 m-4 bg-red-950">
            <h1 className="text-3xl text-center bg-red-950 p-2">{singleMovie["title"]}</h1>
            <img src={"https://image.tmdb.org/t/p/original/" + singleMovie["poster_path"]} alt="No poster" className=""/>
            <p className="pl-2 pt-2 font-bold text-red-400">Rating: {singleMovie["vote_average"]} / 10</p>
            <p className="pl-2 text-red-400">Release Date: {singleMovie["release_date"]} </p>
            <p className="p-2">{singleMovie["overview"]}</p>
            <form action={rateMedia} onSubmit={e => handleRatingUpdated(e, singleMovie["id"])}>
                <button className="p-2 m-2 bg-red-700 hover:bg-red-500">Rate this Movie</button>
                <input type="hidden" name="movieID" value={singleMovie["id"]}/>
                <input type="number" name="rating" min="0" max="10" className="m-2 p-2 bg-black inline-block" />
                <p className="inline-block">/ 10</p>
                <p className="hidden" id={singleMovie["id"]}>Rating Updated!</p>
            </form>
        </div>
    )
}

export function GetShowInfo(singleShow: moviesType){
    singleShow = singleShow["singleShow"];
    return(
        <div className="w-auto m-4 bg-red-950">
            <h1 className="text-3xl text-center bg-red-950 p-2">{singleShow["name"]}</h1>
            <img src={"https://image.tmdb.org/t/p/original/" + singleShow["poster_path"]} alt="No poster" className=""/>
            <p className="pl-2 pt-2 font-bold text-red-400">Rating: {singleShow["vote_average"]} / 10</p>
            <p className="pl-2 text-red-400">Air Date: {singleShow["first_air_date"]} </p>
            <p className="p-2">{singleShow["overview"]}</p>
            <form action={rateMedia} onSubmit={e => handleRatingUpdated(e, singleShow["id"])}>
                <button className="p-2 m-2 bg-red-700 hover:bg-red-500">Rate this Show</button>
                <input type="hidden" name="movieID" value={singleShow["id"]}/>
                <input type="number" name="rating" min="0" max="10" className="m-2 p-2 bg-black inline-block" />
                <p className="inline-block">/ 10</p>
                <p className="hidden" id={singleShow["id"]}>Rating Updated!</p>
            </form>
        </div>
    )
}