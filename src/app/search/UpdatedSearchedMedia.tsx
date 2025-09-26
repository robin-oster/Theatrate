"use client";
import SearchMovies from "../api/searchMovies"; //server action
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdatedSearchedMedia(){
        const [searchedMedia, setSearchedMedia] = useState(<p></p>);
    
        const searchParams = useSearchParams();
        const query = searchParams.get('query') as string;
        const mediaType = searchParams.get('mediaType') as string;
        const queryText = encodeURIComponent(query);
        useEffect(() => {
            const updatedMedia = SearchMovies({queryText}, mediaType);
            updatedMedia.then(movies => {setSearchedMedia(movies)})
        }, [])

        return searchedMedia;
}