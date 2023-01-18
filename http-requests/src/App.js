import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("<firebase-link>");
      if (!response.ok) {
        throw new Error(`${response.status} - Error thrown by server`)
      }

      const data = await response.json();
      const transformedMovies = Object.keys(data).map((id) => {
        return {
          id,
          title: data[id].title,
          openingText: data[id].openingText,
          releaseDate: data[id].releaseDate,
        };
      });
      setFilms(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    const response = await fetch("https://react-http-97049-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json", {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    console.log(data);
  };

  let content = <p>No movies to display</p>;

  if (films.length > 0) {
    content = <MoviesList movies={films} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading....</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
