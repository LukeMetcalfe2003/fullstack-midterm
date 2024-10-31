const { getRandomMoviesByGenre, getTopRatedMovies, formatMovieData, getRandomGenre, generateMovieReport } = require("../../utils/movieUtils");

describe('Movie Utility Functions', () => {
    describe('getMoviesByGenre', () => {

    });

    describe('getTopRatedMovies', () => {

    });

    describe('getMovieDetailsById', () => {
        test('returns the movie object with the specified ID', () => {
            const id = 1;
            const movie = getMovieDetailsById(id);
            expect(movie).toEqual({
                id: 1,
                title: "The Shawshank Redemption",
                genre: "Drama",
                rating: 9.3,
                director: "Frank Darabont",
                year: 1994,
                runtime: 142,
                plot: "Two imprisoned"
            });
        });
    });
    
    describe('selectRandomMovieId', () => {
    
    });
});

getRandomMoviesByGenre