"use server";
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

    function getShowInfo(singleShow: showsType){
        return(
            <div className="w-auto border-white border-2 m-4 bg-red-950">
                <h1 className="text-3xl text-center bg-red-950 p-2">{singleShow["name"]}</h1>
                <img src={"https://image.tmdb.org/t/p/original/" + singleShow["poster_path"]} alt="No poster" className=""/>
                <p className="pl-2 pt-2 font-bold text-red-400">Rating: {singleShow["vote_average"]} / 10</p>
                <p className="pl-2 text-red-400">Air Date: {singleShow["first_air_date"]} </p>
                <p className="p-2">{singleShow["overview"]}</p>
            </div>
        )
    }

    return(
        <div className="grid grid-cols-1 md:grid-cols-4 w-[100%]">
            {getShowInfo(shows[0])}
            {getShowInfo(shows[1])}
            {getShowInfo(shows[2])}
            {getShowInfo(shows[3])}
            {getShowInfo(shows[4])}
            {getShowInfo(shows[5])}
            {getShowInfo(shows[6])}
            {getShowInfo(shows[7])}
            {getShowInfo(shows[8])}
            {getShowInfo(shows[9])}
            {getShowInfo(shows[10])}
            {getShowInfo(shows[11])}
        </div>
    )
}