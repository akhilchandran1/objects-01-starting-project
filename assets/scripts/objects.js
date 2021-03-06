const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById("movie-list");
    
    if (movies.length === 0){
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add("visible");
    }

    movieList.innerHTML = "";

    const filteredMovies = !filter? movies:movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach ((movie) => {
        const movieEl = document.createElement("li");
        movieEl.textContent = movie.info.title;
        let text = movie.info.title + '-';
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text+ `${key} : ${movie.info[key]}`
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
}

const addMovieHandler = () => {
    const title = document.getElementById("title").value.trim();
    const extraName = document.getElementById("extra-name").value.trim();
    const extraValue = document.getElementById("extra-value").value.trim();

    if (title === '' || extraName === '' || extraValue === ''){
        alert('Please enter a value !!');
        
    } else {
        const newMovie = {
            info: {
                title,
                [extraName]: extraValue
            },
            id: Math.random()
        };
        movies.push(newMovie);
        renderMovies();
        console.log(movies);
    }
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);

}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);