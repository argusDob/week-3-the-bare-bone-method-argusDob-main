import React, { useEffect, useState } from "react";
import { SectionHeading, TrendingContainer } from "./styled/GridFourCol"

import movieApiClient from "../utils/movieApiClient";
import { ApiError, isApiError, Movie } from "../utils/typesApi";
import SimpleMovieCard from "./SimpleMovieCard";

export default function TrendingNow() {
  const [movieListTrending, setMovieListTrending] = useState<Movie[] | null>();
  const [error, setFetchError] = useState<ApiError | null>();

  useEffect(() => {
    movieApiClient.getMovieListNowPlaying("upcoming").then((data) => {
      if (isApiError(data)) {
        setFetchError(data);
      } else {
        setMovieListTrending(data.results);
      }
    });
  }, []);

  return (
    <div>
      <SectionHeading>Upcoming Movies</SectionHeading>
      <TrendingContainer>
        {!error &&
          movieListTrending?.map((mov) => (
            <SimpleMovieCard movieData={mov} key={mov.id} />
          ))}
      </TrendingContainer>
      <p>{error?.message}</p>
    </div>
  );
}

