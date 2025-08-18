export default function SearchMovies() {
    const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTlmYjMwNTk1MmUwZDg4NzA0YmNjZjdjMDQ3MDkxZiIsIm5iZiI6MTc1NTIwNzc3MC42OTI5OTk4LCJzdWIiOiI2ODllNTg1YWI3N2E2ZmY0OTM1ZDI1Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dy0VrMZUbY3wDk8NCpEVl-PDZZGrt9ESxtHg2-qfHD0'
        }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));

    return(
        <div>
            <form className="w-auto">
                <input type="text" placeholder="Search..." className="block border-white border-1 w-[93%]  sm:w-[95%] md:w-[98%] pt-1 pb-1 m-4 bg-amber-950"/>
            </form>
        </div>
    )
}