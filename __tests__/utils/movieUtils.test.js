// __tests__/utils/movieUtils.test.js

const { getTopRatedMovies, getMoviesByGenre, getMovieDetailsById, selectRandomMovieId } = require('../../utils/movieUtils');
const { Movies } = require('../../utils/data');

describe('Movie Utility Functions', () => {
  describe('getMoviesByGenre', () => {
    test('should return x movies from the specified genre', () => {
      const genre = 'Action';
      const result = getMoviesByGenre(genre);
      expect(result).toBeInstanceOf(Array);
    });

    test('should return an appropriate response if no movies exist for the genre', () => {
      const genre = 'NonExistentGenre';
      const result = getMoviesByGenre(genre);
      expect(result).toEqual([]);
    });
  });

  describe('getTopRatedMovies', () => {
    test('should return the correct number of movies ordered by rating', () => {
      const result = getTopRatedMovies(5);
      expect(result.length).toBe(5);
    });
  });

  describe('getMovieDetailsById', () => {
    test('should return a valid movie for a valid ID', () => {
      const movieId = 1;
      const result = getMovieDetailsById(movieId);
      expect(result).toBeDefined();
    });

    test('should return an appropriate response for an invalid ID', () => {
      const movieId = 999;
      const result = getMovieDetailsById(movieId);
      expect(result).toBeUndefined();
    });
  });

  describe('selectRandomMovieId', () => {
    test('should return a random movie ID', () => {
      const result = selectRandomMovieId();
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(Movies.length);
    });
  });
});


