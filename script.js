const API_KEY = "http://www.omdbapi.com/?apikey=3e577df2&";

function handleSearch() {
    const query = document.getElementById("search").value;
    searchMovies(query);
}

function searchMovies(query) {
    fetch (https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query})
        .then(res => res.json())
        .then(data => showMovies(data.results))
        .catch(err => console.error(err));
}

function showMovies(movies) {
    const container = document.getElementById("results");
    container.innerHTML = movies.map(m => <p>${m.title}</p>).join("");
}
