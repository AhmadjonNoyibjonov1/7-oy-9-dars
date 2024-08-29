import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Carusel from "./components/Carusel"

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Carusel></Carusel>
      <Header />
      <main className="flex-grow p-4">
        <MovieList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
