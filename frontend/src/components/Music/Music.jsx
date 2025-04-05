import { useState } from "react";
import axios from "axios";

const SpotifyTrackComponent = () => {
  const [song_name, setSong_name] = useState("");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTracks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/music/${song_name}`);
      setTracks(response.data.tracks.items);
    } catch (err) {
      setError("Failed to fetch tracks");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">🎵 Spotify Track Search</h2>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Search for a track..."
          value={song_name}
          onChange={(e) => setSong_name(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={fetchTracks}
        >
          Search
        </button>
      </div>

      {loading && <p>Loading tracks...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tracks.map((track, idx) => (
          <div key={idx} className="border p-4 rounded shadow">
            <img
              src={track.album.images[0].url}
              alt={track.album.name}
              className="rounded mb-2 w-full h-auto"
            />
            <h3 className="font-semibold text-lg mb-1">{track.name}</h3>
            <p className="text-sm text-gray-600 mb-1">
              Album: <a href={track.album.external_urls.spotify} target="_blank" rel="noreferrer" className="text-blue-500 underline">{track.album.name}</a>
            </p>
            <p className="text-sm text-gray-500">
              Artists: {track.album.artists.map((artist) => artist.name).join(", ")}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Release Date: {track.album.release_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyTrackComponent;
