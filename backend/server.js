import  express from 'express'
import axios from 'axios'
import dotenv from "dotenv"
import cors from 'cors';
import chalk from 'chalk';
dotenv.config();


const news_api_key = process.env.NEWS_API_KEY;
const weather_api_key = process.env.WEATHER_API_KEY;
const movies_api_key = process.env.MOVIE_API_KEY;
const SPOTIFY_CLIENT_ID = process.env.CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.CLIENT_SECRET;

const app = express();
app.use(cors());

// News api

app.get('/api/news',async (req,res)=>{
    try{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines/sources?apiKey=${news_api_key}`);
        res.json(response.data);
    }
    catch(error){
        res.status(500).json({message : "Error fetchimg news", error: error.message});
    }
});

// Weather api
app.get('/api/weather/:city',async (req,res)=>{
    const {city} = req.params;
    try{
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=${weather_api_key}&query=${city}`);
        res.json(response.data);
    }
    catch(error){
        res.status(500).json({message : "Error fetchimg weather", error: error.message});
    }
});

// Meme Generator api

app.get('/api/memes/:count',async (req,res)=>{
    const {count} = req.params;
    try{
        const response = await axios.get(`https://meme-api.com/gimme/${count}`);
        res.json(response.data);
    }
    catch(error){
        res.status(500).json({message : "Error fetching memes", error: error.message});
    }
});

// Movies api

app.get('/api/movies/:name',async (req,res)=>{
    const {name} = req.params;
    try{
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${movies_api_key}&t=${name}&plot=full`);
        res.json(response.data);
    }
    catch(error){
        res.status(500).json({message : "Error fetchimg movies", error: error.message});
    }
});

// Music Playlist

const getSpotifyToken = async () => {
    try {
        const response = await axios.post(
            "https://accounts.spotify.com/api/token",
            new URLSearchParams({ grant_type: "client_credentials" }),
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error("Error getting Spotify token:", error.message);
        return null;
    }
};


app.get("/api/music/:song_name", async (req, res) => {
    const { song_name } = req.params; // Get search query from user
    const offset = req.query.offset || 0;
    try {
        const accessToken = await getSpotifyToken();
        if (!accessToken) return res.status(500).json({ message: "Failed to get Spotify token" });

        const response = await axios.get(`https://api.spotify.com/v1/search?q=${song_name}&type=track&limit=10&offset=${offset}`,
        {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error searching for music", error: error.message });
    }
});



const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(chalk.blue.bold(`Server at http://localhost:${port}`));
}
)