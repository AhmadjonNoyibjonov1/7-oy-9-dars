import React from 'react';
import MovieCard from '../components/MovieCard';

const movies = [
  { id: 1, title: "Movie Title 1", description: "Description for movie 1", poster: "https://via.placeholder.com/150" },
  { id: 2, title: "Movie Title 2", description: "Description for movie 2", poster: "https://via.placeholder.com/150" },
];

function MovieList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;