import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const MemesPage = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(5);

  const fetchMemes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/memes/${count}`);
      if (response?.data?.memes) {
        setMemes(response.data.memes);
      } else {
        setError("Invalid meme data");
      }
    } catch (err) {
      setError("Failed to fetch memes");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  const handleCountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) setCount(value);
  };

  const handleFetchClick = () => {
    fetchMemes();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">😂 Memes</h2>

      <div className="mb-4 flex items-center space-x-2">
        <input
          type="number"
          min="1"
          value={count}
          onChange={handleCountChange}
          className="border rounded px-3 py-1"
        />
        <button
          onClick={handleFetchClick}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Fetch Memes
        </button>
      </div>

      {loading && <p className="text-center">Loading memes...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memes.map((meme, index) => (
          <div key={index} className="border rounded-lg shadow p-4">
            <a href={meme.postLink} target="_blank" rel="noopener noreferrer">
              <img src={meme.url} alt={meme.title} className="rounded mb-2 w-full h-auto" />
            </a>
            <h3 className="font-semibold text-lg mb-1">{meme.title}</h3>
            <p className="text-sm text-gray-600 mb-1">Posted by: {meme.author}</p>
            <p className="text-sm text-gray-500">Subreddit: r/{meme.subreddit} | 👍 {meme.ups}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemesPage;
