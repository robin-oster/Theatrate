"use client";
import Form from "next/form";
import { useState } from "react";

export default function SearchForm(){

    const [movieRadioChecked, setMovieRadioChecked] = useState(true);
    const [showRadioChecked, setShowRadioChecked] = useState(false);

    function handleMovieChange(e: boolean){
        setMovieRadioChecked(e);
        setShowRadioChecked(!e);
    }

    function handleShowChange(e: boolean){
        setShowRadioChecked(e);
        setMovieRadioChecked(!e);
    }

    return(
        <Form className="w-auto" action="/search">
            <input type="radio" name="mediaType" id="movieRadio" value="movie" checked={movieRadioChecked} onChange={e => handleMovieChange(e.target.checked)} className="block appearance-none p-2 mt-4 ml-4 mb-[-1.4rem] w-[6rem] h-[2rem] checked:bg-red-950 bg-red-500" />
            <label htmlFor="movieRadio" className="block ml-[2.4rem] mt-[-1.7rem] w-[1rem]">Movies</label>
            <input type="radio" name="mediaType" id="showRadio" value="show" checked={showRadioChecked} onChange={e => handleShowChange(e.target.checked)} className="block appearance-none p-2 ml-[7rem] mt-[-1.8rem]  w-[6rem] h-[2rem] checked:bg-red-950 bg-red-500" />
            <label htmlFor="showRadio" className="block ml-[8.3rem] mt-[-1.7rem] w-[1rem]">Shows</label>
            <input type="text" name="query" placeholder="  Search..." className="block w-[93%]  sm:w-[95%] md:w-[98%] pt-1 pb-1 ml-4 bg-amber-950"/>
        </Form>
    )
}