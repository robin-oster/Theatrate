"use client";
import SearchMovies from "../api/searchMovies"; //server action
import Footer from "../footer";
import Header from "../header";
import Form from "next/form";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage(){
    const [searchedMedia, setSearchedMedia] = useState(<p></p>);

    const searchParams = useSearchParams();
    const query = searchParams.get('query') as string;
    const mediaType = searchParams.get('mediaType') as string;
    const queryText = encodeURIComponent(query);
    useEffect(() => {
        const updatedMedia = SearchMovies({queryText}, mediaType);
        updatedMedia.then(movies => {setSearchedMedia(movies)})
    }, [])

    return(
        <div className="bg-red-800 w-auto">
            <Header/>
                <div className="w-auto" id="searchMovies">
                    {searchedMedia}
                </div>
            <Footer/>
        </div>
    )

}