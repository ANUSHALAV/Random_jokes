const url = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes?limit=30';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dfdf202c8emsh74e867fef15dae7p1b8474jsn9bf2f2822963',
        'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
    }
};

let getJokes = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let number=Math.floor(Math.random()*25);
        document.getElementById('jocks').innerHTML=result[number].joke;
    } catch (error) {
        console.error(error);
    }
}
