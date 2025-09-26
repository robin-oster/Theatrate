"use client";
import SearchMovies from "../api/searchMovies"; //server action
import Footer from "../footer";
import Header from "../header";
import UpdatedSearchedMedia from "./UpdatedSearchedMedia";
import { Suspense } from "react";



export default function SearchPage(){


    return(
        <div className="bg-red-800 w-auto">
            <Header/>
                <div className="w-auto" id="searchMovies">
                    <Suspense>
                        <UpdatedSearchedMedia />
                    </Suspense>
                </div>
            <Footer/>
        </div>
    )

}