const express = require('express');
const path = require('path');
const {
  getTopRatedMovies,
  getMoviesByGenre,
  getMovieDetailsById,
  selectRandomMovieId,
  randomNumOfMovies,
} = require('./utils/movieUtils');
const { Movies, Genres } = require('./utils/data');

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Route for top-rated movies
router.get('/topRated', (req, res) => {
  const topRatedMovies = getTopRatedMovies(15);
  res.render('topRatedMovies', { movies: topRatedMovies });
});

// Route to movie details
router.get('/movie/:id', (req, res) => {
  const movieId = req.params.id;
  const movie = Movies.find(m => m.id === parseInt(movieId));

  if (movie) {
    // Find movies of the same genre, excluding the current one
    const recommendedMovies = Movies.filter(
      m => m.genre === movie.genre && m.id !== movie.id
    );

    // Shuffle and pick 3 random recommendations
    const shuffled = recommendedMovies.sort(() => 0.5 - Math.random());
    const recommendations = shuffled.slice(0, 3);

    // Render the movieDetail view with the movie and recommendations
    res.render('movieDetail', { movie, recommendations });
  } else {
    res.status(404).send('Movie not found');
  }
});

// Route for upcoming movies
router.get('/upcomingMovies', (req, res) => {
  const upcomingMovies = Movies.filter(movie => movie.releaseYear > 2024); // Update year as needed
  res.render('upcomingMovies', { movies: upcomingMovies });
});

// Route for random movie
router.get('/randomMovie', (req, res) => {
  const randomMovieId = selectRandomMovieId();
  const movie = Movies.find(m => m.id === randomMovieId);

  if (movie) {
    // Get 3 random recommendations for the same genre
    const recommendedMovies = Movies.filter(
      m => m.genre === movie.genre && m.id !== movie.id
    );
    const recommendations = recommendedMovies
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    res.render('movieDetail', { movie, recommendations });
  } else {
    res.status(404).send('Random movie not found');
  }
});

// Brings 9 random movies to the index (home) page on every refresh 
app.get('/', (req, res) => {
  const random9Movies = randomNumOfMovies(9);
  res.render('index', { random9Movies });
});

app.get('/movies/genre/:genre', (req, res) => {
  const genre = req.params.genre;
  const moviesByGenre = getMoviesByGenre(genre);
  res.render('moviesByGenre', { movies: moviesByGenre });
});

// Use the router for all routes
app.use('/', router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
