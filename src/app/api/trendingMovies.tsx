export default async function GetTrendingMovies(){
    
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTlmYjMwNTk1MmUwZDg4NzA0YmNjZjdjMDQ3MDkxZiIsIm5iZiI6MTc1NTIwNzc3MC42OTI5OTk4LCJzdWIiOiI2ODllNTg1YWI3N2E2ZmY0OTM1ZDI1Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dy0VrMZUbY3wDk8NCpEVl-PDZZGrt9ESxtHg2-qfHD0'
    }
    };

    interface moviesType {
        [index: string]: any
    }

    let movies: moviesType;
    movies = ["test"];
    let i = 0;

    await fetch(url, options)
    .then(res => res.json())
    .then(json => {movies = json["results"]})
    .catch(err => console.error(err))

    function getMovieInfo(singleMovie: moviesType){
        return(
            <div className="w-auto border-white border-2 m-4 bg-red-950">
                <h1 className="text-3xl text-center bg-red-950 p-2">{singleMovie["title"]}</h1>
                <img src={"https://image.tmdb.org/t/p/original/" + singleMovie["poster_path"]} alt="No poster" className=""/>
                <p className="p-2">{singleMovie["overview"]}</p>
                
            </div>
        )
    }

    console.log(movies[1]);
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 w-[100%]">
            {getMovieInfo(movies[0])}
            {getMovieInfo(movies[1])}
            {getMovieInfo(movies[2])}
            {getMovieInfo(movies[3])}
            {getMovieInfo(movies[4])}
            {getMovieInfo(movies[5])}
            {getMovieInfo(movies[6])}
            {getMovieInfo(movies[7])}
        </div>
    )
}