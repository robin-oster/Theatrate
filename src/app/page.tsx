import Header from "./header";
import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";
import Footer from "./footer";
import GetTrendingMovies from "./api/trendingMovies";
import GetTrendingShows from "./api/trendingShows";
import SearchMovies from "./api/searchMovies";
import Form from "next/form";

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
                <Form className="w-auto" action="/search">
                    <input type="text" name="query" placeholder="Search..." className="block border-white border-1 w-[93%]  sm:w-[95%] md:w-[98%] pt-1 pb-1 m-4 bg-amber-950"/>
                </Form>
            </div>
            <div className="w-auto" id="trendingMovies">
                <GetTrendingMovies/>
            </div>
            <div className="w-auto hidden" id="trendingShows">
                <GetTrendingShows/>
            </div>
            <Footer/>
        </div>
    );
}