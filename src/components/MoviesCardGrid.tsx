import { ApiError, Movie } from "../utils/typesApi";
import SimpleMovieCard from "./SimpleMovieCard";
import { TrendingContainer, SectionHeading } from "./styled/GridFourCol";

interface MovieListCardDisplayProps {
  movieList: Movie[] | null | undefined;
  error: ApiError | null | undefined;
  headingText: string;
}

export default function MovieListCardDisplay({
  movieList,
  error,
  headingText,
}: MovieListCardDisplayProps) {
  return (
    <div>
      <SectionHeading>{headingText}</SectionHeading>
      <TrendingContainer>
        {!error &&
          movieList?.map((mov) => (
            <SimpleMovieCard movieData={mov} key={mov.id} />
          ))}
      </TrendingContainer>
      <p>{error?.message}</p>
    </div>
  );
}
