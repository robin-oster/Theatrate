'use server';

export default async function rateMovie(formData: FormData){
    const url = 'https://api.themoviedb.org/3/movie/' + formData.get('movieID') + '/rating';
    const options = {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTlmYjMwNTk1MmUwZDg4NzA0YmNjZjdjMDQ3MDkxZiIsIm5iZiI6MTc1NTIwNzc3MC42OTI5OTk4LCJzdWIiOiI2ODllNTg1YWI3N2E2ZmY0OTM1ZDI1Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dy0VrMZUbY3wDk8NCpEVl-PDZZGrt9ESxtHg2-qfHD0'
    },
    body: '{"value":' + formData.get('rating') + '}'
    };

    await fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}