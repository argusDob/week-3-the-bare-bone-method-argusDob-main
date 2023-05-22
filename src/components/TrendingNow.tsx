import { useEffect, useState } from "react";

import movieApiClient from "../utils/movieApiClient";
import { ApiError, isApiError, Movie } from "../utils/typesApi";

import MoviesCardGrid from "./MoviesCardGrid";

export default function TrendingNow() {
  const [movieListTrending, setMovieListTrending] = useState<Movie[]>([]);

  const [error, setFetchError] = useState<ApiError | null>();

  useEffect(() => {
    movieApiClient.getMovieListNowPlaying("trendings").then((data) => {
      if (isApiError(data)) {
        setFetchError(data);
      } else {
        setMovieListTrending(data.results);
      }
    });
  }, []);

  return (
    <div>
      <MoviesCardGrid
        headingText="Tredings"
        movieList={movieListTrending}
        error={error}
      ></MoviesCardGrid>
      <p>{error?.message}</p>
    </div>
  );
}
