"use client";
import SearchMovies from "../api/searchMovies"; //server action
import Footer from "../footer";
import Header from "../header";
import Form from "next/form";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";

export default function SearchPage(){
    const [searchedMovies, setSearchedMovies] = useState(<p></p>);

    const searchParams = useSearchParams();
    const query = searchParams.get('query') as string;
    const queryText = encodeURIComponent(query);
    useEffect(() => {
        const updatedMovies = SearchMovies({queryText});
        updatedMovies.then(movies => {setSearchedMovies(movies)})
    }, [])

    console.log(searchedMovies);

    return(
        <div className="bg-red-800 w-auto">
            <Header/>
                <div className="w-auto" id="searchMovies">
                {searchedMovies}
            </div>
            <Footer/>
        </div>
    )

}