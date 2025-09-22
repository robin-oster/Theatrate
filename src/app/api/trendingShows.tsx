"use server";

import { GetShowInfo } from "./GetMediaInfo";

export default async function GetTrendingShows(){
    
    const url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTlmYjMwNTk1MmUwZDg4NzA0YmNjZjdjMDQ3MDkxZiIsIm5iZiI6MTc1NTIwNzc3MC42OTI5OTk4LCJzdWIiOiI2ODllNTg1YWI3N2E2ZmY0OTM1ZDI1Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dy0VrMZUbY3wDk8NCpEVl-PDZZGrt9ESxtHg2-qfHD0'
    }
    };

    interface showsType {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        [index: string]: any
    }

    let shows: showsType;
    shows = ["test"];

    await fetch(url, options)
    .then(res => res.json())
    .then(json => {shows = json["results"]})
    .catch(err => console.error(err))

    return(
        <div className="grid grid-cols-1 md:grid-cols-4 w-[100%]">
            <GetShowInfo singleShow={shows[0]}/>
            <GetShowInfo singleShow={shows[1]}/>
            <GetShowInfo singleShow={shows[2]}/>
            <GetShowInfo singleShow={shows[3]}/>
            <GetShowInfo singleShow={shows[4]}/>
            <GetShowInfo singleShow={shows[5]}/>
            <GetShowInfo singleShow={shows[6]}/>
            <GetShowInfo singleShow={shows[7]}/>
            <GetShowInfo singleShow={shows[8]}/>
            <GetShowInfo singleShow={shows[9]}/>
            <GetShowInfo singleShow={shows[10]}/>
            <GetShowInfo singleShow={shows[11]}/>
        </div>
    )
}