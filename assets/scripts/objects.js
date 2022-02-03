const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

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
        console.log(movies);
    }
};

addMovieBtn.addEventListener('click', addMovieHandler);