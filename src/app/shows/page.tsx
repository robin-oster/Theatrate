import Header from "../header";
import SearchForm from "../searchForm";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";
import Footer from "../footer";
import GetTrendingMovies from "../api/trendingMovies";
import GetTrendingShows from "../api/trendingShows";
import { Suspense } from "react";

export default async function LandingPage(){
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login');
    }

    return(
        <div className="bg-red-800 w-auto">
            <Header/>
            <div className="w-auto" id="searchMovies">
                <SearchForm />
            </div>
            <div className="w-auto" id="trendingShows">
                <GetTrendingShows/>
            </div>
            <Footer/>
        </div>
    );
}