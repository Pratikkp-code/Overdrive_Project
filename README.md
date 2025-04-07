# 🌐 Smart Info Hub

[![Live Website](https://img.shields.io/badge/Live-Smart_Info_Hub-brightgreen?style=flat-square)](https://overdrive-frontend.onrender.com)
[![Deploy on Render](https://img.shields.io/badge/Deploy-Render-blue?style=flat-square)](https://render.com)

Smart Info Hub is your **one-stop destination for infotainment**. It brings together the latest in news, weather updates, memes, movies, and music into a single, sleek platform. Both the frontend and backend are deployed on **Render**.

---

## Table of Contents

- [Features](#-features)
- [APIs Used](#-apis-used)
- [NPM Packages Used](#-npm-packages-used)
- [Purpose](#-purpose)
- [Live Demo](#-live-demo)

---

## 🚀 Features

- **🗞️ News:**  
  Get the latest headlines from trusted sources.

- **🌦️ Weather:**  
  Check real-time weather information by city.

- **😂 Memes:**  
  Enjoy a random set of memes for a quick laugh.

- **🎬 Movies:**  
  Search for movie details along with full plot summaries.

- **🎵 Music:**  
  Discover and explore tracks using the Spotify API.

---

## 📡 APIs Used

- **News API:**  
  `https://newsapi.org/v2/top-headlines/sources?apiKey=${news_api_key}`

- **Weather API:**  
  `http://api.weatherstack.com/current?access_key=${weather_api_key}&query=${city}`

- **Memes API:**  
  `https://meme-api.com/gimme/${count}`

- **Movies API:**  
  `https://www.omdbapi.com/?apikey=${movies_api_key}&t=${name}&plot=full`

- **Music API (Spotify):**  
  `https://api.spotify.com/v1/search?q=${song_name}&type=track&limit=10&offset=${offset}`

---

## 🛠️ NPM Packages Used

1. **Axios**  
   Fetches APIs for both frontend and backend, handling HTTP requests with ease.

2. **Cors**  
   Acts as middleware to enable Cross-Origin Resource Sharing, ensuring smooth communication between frontend and backend.

3. **Nodemon**  
   Automatically restarts the server upon detecting code changes during development.

4. **Dotenv**  
   Securely loads environment variables, keeping sensitive API keys safe.

5. **Tailwind CSS**  
   A utility-first CSS framework that helps build responsive, modern user interfaces.

6. **Chalk**  
   Adds color and styling to terminal outputs, enhancing code readability.

7. **React-icons**  
   Provides a collection of icons to elevate the visual appeal of the UI.

8. **React-spinners**  
   Displays elegant loading indicators, notably on the news page.

9. **Toastify**  
   Delivers beautiful toast notifications throughout the application.

10. **React-Lenis**  
    Implements smooth scrolling for an improved user experience.

---

## 🎯 Purpose

The goal of **Smart Info Hub** is to deliver a **convenient and engaging** experience by uniting daily information and entertainment into one comprehensive platform.

---

## 🔗 Live Demo

Experience the platform live at: [Smart Info Hub](https://overdrive-frontend.onrender.com)

---

*Feel free to contribute, suggest improvements, or raise issues via our repository. Happy browsing!*
