const { Movies, Genres } = require("./data");

/**
 * Get `x` movies by genre
 * @param {Genres} genre - The genre of the movies
 * @param {number} x - The number of movies to retrieve
 * @returns {Array.<Movies>} - An array of movies matching the genre
 */
function getMoviesByGenre(genre, x) {
    const moviesByGenre = Movies.filter((movie) => movie.genre === genre);

    // Return the first `x` movies
    return moviesByGenre.slice(0, x);
}

/**
 * Get the `x` top rated movies, ordered by rating
 * @param {number} x - The number of top-rated movies to retrieve
 * @returns {Array.<Movies>} - An array of top-rated movies
 */
function getTopRatedMovies(x) {
    const topRatedMovies = Movies.sort((a, b) => b.rating - a.rating);

    // Return the first `x` movies
    return topRatedMovies.slice(0, x);
}

/**
 * Get the details of a movie by its ID
 * @param {number} id - The ID of the movie
 * @returns {Movies} - The movie object
 */
function getMovieDetailsById(id) {
    // Implementation here
    return Movies.find((movie) => movie.id === id);
}

/**
 * Select a random movie ID
 * @returns {number} - A random movie ID
 */
function selectRandomMovieId() {
    // Implementation here
    const randomIndex = Math.floor(Math.random() * Movies.length);
  return Movies[randomIndex].id;
}

// Random number of movies
function randomNumOfMovies(numRequested) {
    let randomMovieIdArr = [];
    let randomMovieArr = [];
    while (randomMovieIdArr.length < numRequested) {
        const randomNum = Math.floor(Math.random() * Movies.length);
        if (!randomMovieIdArr.includes(randomNum)) {
            randomMovieIdArr.push(randomNum);
        }
    }
    randomMovieArr = randomMovieIdArr.map((id) => Movies[id]);
    return randomMovieArr;
}

// Export the functions to be used in other modules
module.exports = {
    getMoviesByGenre,
    getTopRatedMovies,
    getMovieDetailsById,
    selectRandomMovieId,
    randomNumOfMovies,
};
