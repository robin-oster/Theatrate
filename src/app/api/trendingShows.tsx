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
        [index: string]: any
    }

    let shows: showsType;
    shows = ["test"];
    let i = 0;

    await fetch(url, options)
    .then(res => res.json())
    .then(json => {shows = json["results"]})
    .catch(err => console.error(err))

    function getMovieInfo(singleShow: showsType){
        return(
            <div className="w-auto border-white border-2 m-4 bg-red-950">
                <h1 className="text-3xl text-center bg-red-950 p-2">{singleShow["title"]}</h1>
                <img src={"https://image.tmdb.org/t/p/original/" + singleShow["poster_path"]} alt="No poster" className=""/>
                <p className="p-2">{singleShow["overview"]}</p>
                
            </div>
        )
    }

    console.log(shows[1]);
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 w-[100%]">
            {getMovieInfo(shows[0])}
            {getMovieInfo(shows[1])}
            {getMovieInfo(shows[2])}
            {getMovieInfo(shows[3])}
            {getMovieInfo(shows[4])}
            {getMovieInfo(shows[5])}
            {getMovieInfo(shows[6])}
            {getMovieInfo(shows[7])}
            {getMovieInfo(shows[8])}
            {getMovieInfo(shows[9])}
            {getMovieInfo(shows[10])}
            {getMovieInfo(shows[11])}
        </div>
    )
}