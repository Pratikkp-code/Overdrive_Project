import React, { useState } from "react";
import axios from "axios";


const MovieComponent = () => {
  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovie = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/movies/${title}`);
      if (response?.data?.Title) {
        setMovie(response.data);
      } else {
        setError("Movie not found");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch movie details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🎬 Movie Info</h1>

      <div className="flex mb-6 gap-2">
        <input
          type="text"
          placeholder="Enter movie title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={fetchMovie} className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {loading && <p>Loading movie details...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {movie && (
        <div className="border rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <img src={movie.Poster} alt={movie.Title} className="w-48 rounded" />
            <div>
              <h2 className="text-2xl font-bold mb-2">{movie.Title} ({movie.Year})</h2>
              <p><strong>Genre:</strong> {movie.Genre}</p>
              <p><strong>Director:</strong> {movie.Director}</p>
              <p><strong>Writer:</strong> {movie.Writer}</p>
              <p><strong>Actors:</strong> {movie.Actors}</p>
              <p><strong>Plot:</strong> {movie.Plot}</p>
              <p><strong>Language:</strong> {movie.Language}</p>
              <p><strong>Country:</strong> {movie.Country}</p>
              <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
              <div className="mt-2">
                <strong>Ratings:</strong>
                <ul className="list-disc list-inside">
                  {movie.Ratings.map((rating, idx) => (
                    <li key={idx}>{rating.Source}: {rating.Value}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieComponent;
