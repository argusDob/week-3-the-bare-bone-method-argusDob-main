import styled from "styled-components";
import { Movie, ApiError } from "../utils/typesApi";
import MovieCard from "./MovieCard";

export default function MovieList({ theme, moviesList, error }: any) {
  return (
    <MovieListContainer>
      <MovieCardListWrapper>
        {moviesList.map((movie: Movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </MovieCardListWrapper>
      {error?.message}
    </MovieListContainer>
  );
}

const MovieCardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
