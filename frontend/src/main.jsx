import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import WeatherPage from './components/Weather/weather.jsx'
import MusicPage from './components/Music/Music.jsx'
import MemesPage from './components/Meme/Memes.jsx'
import MoviesPage from './components/Movies/Movies.jsx'
import NewsPage from './components/News/News.jsx'
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path="news" element={<NewsPage />} />
      <Route path="weather" element={<WeatherPage />} />
      <Route path="music" element={<MusicPage />} />
      <Route path="memes" element={<MemesPage />} />
      <Route path="movies" element={<MoviesPage />} />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
