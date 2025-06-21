# 🎬 Movie Explorer

A responsive web application built using **React**, **Tailwind CSS**, and the **TMDB API**, allowing users to explore trending movies, search, filter by genres, view detailed movie information, and manage a personal watchlist.

---

## 🚀 Features

- 🔍 **Search** movies by title  
- 🎞️ **Genre-based filtering** of trending and watchlisted movies  
- ⭐ **Add to/Remove from Watchlist**, stored in `localStorage`  
- ⬆️⬇️ **Sort movies** by ratings  
- 📱 **Responsive design** across all devices  
- 🧭 **Routing** with detailed movie pages  
- ⏩ **Auto-scrolling Banner** showcasing trending movies  
- 📄 **Pagination** for browsing more content

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS  
- **Icons**: Font Awesome  
- **Routing**: React Router  
- **State Management**: React Context API  
- **Data Source**: [TMDB API](https://www.themoviedb.org/documentation/api)

---

## 🧩 Installation

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
npm install
npm start
```

---

## 🧭 Folder Structure

```
src/
├── components/
│   ├── Banner.jsx
│   ├── MovieCard.jsx
│   ├── Watchlist.jsx
│   └── MovieDetails.jsx
│   └── MovieContext.jsx
├── App.jsx
├── index.js
└── utility/
    └── genreids.js
```

---

## 📌 To-Do / Future Features

- ✅ Responsive layout
- ✅ Movie detail page
- ⬜ Infinite scroll / Load more
- ⬜ Dark mode
- ⬜ User auth with Firebase (optional)
- ⬜ Watchlist sync across devices

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for their awesome movie database.
- Icons by [Font Awesome](https://fontawesome.com/)


