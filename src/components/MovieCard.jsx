
function MovieCard({ movie }) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover rounded-lg mb-2" />
        <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
        <p>{movie.description}</p>
      </div>
    );
  }
  
  export default MovieCard;