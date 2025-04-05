import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";

const NewsPage = () => {
  const [newsSources, setNewsSources] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news');
        if (response?.data?.sources) {
          setNewsSources(response.data.sources);
        } else {
          setError("Invalid news data");
        }
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news sources.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      toast.info("Loading news sources..."),
      <div className="flex justify-center items-center h-[60vh]">
        <BarLoader color="#2563eb" width={150} height={5} />
      </div>
    );
  }
  if (error) {
    toast.error(error);
    return <p className="p-4 text-red-500">{error}</p>;
  }

  return (
    
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📰 News Sources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {newsSources.map((source) => (
          <div
            key={source.id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-blue-700">
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.name}
              </a>
            </h3>
            <p className="text-sm text-gray-600 mb-2">{source.description}</p>
            <p className="text-xs text-gray-500">Category: {source.category}</p>
            <p className="text-xs text-gray-500">
              Language: {source.language.toUpperCase()} | Country: {source.country.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
