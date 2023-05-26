import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import PageContainer from "../components/styled/PageContainer";
import Pagination from "../components/Pagination";
import TrendingNow from "../components/TrendingNow";
import UpcomingMovies from "../components/UpcomingMovies";

import movieApiClient from "../utils/movieApiClient";
import { ApiError, isApiError, Movie, ApiResponse } from "../utils/typesApi";

interface onInputChange {
  value: string;
}

export default function MainPage() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchInput, setSearchInputValue] = useState<string>("star wars");
  const [error, setFetchError] = useState<ApiError | null>();

  useEffect(() => {
    getMovies(searchInput, currentPage);
  }, [searchInput, currentPage]);

  const handleInputChange = (searchInputValue: onInputChange | undefined) => {
    if (
      typeof searchInputValue !== "undefined" &&
      searchInputValue.value !== ""
    ) {
      const first_page = 1;
      setSearchInputValue(searchInputValue.value);
      getMovies(searchInputValue.value, first_page);
    }
  };

  const handlePaginationData = (currentPage: number) => {
    if (currentPage < 0 || currentPage > totalPages) return;
    setCurrentPage(currentPage);
    getMovies(searchInput, currentPage);
  };

  async function getMovies(searchValue: string, currentPage: number) {
    const response = await movieApiClient.getMovieList(
      searchValue,
      currentPage
    );
    if (isApiError(response)) {
      setFetchError(response);
    } else {
      setMovieList(response.results);
      setTotalPages(response.total_pages);
      setCurrentPage(response.page);
    }
  }

  return (
    <PageContainer>
      <SearchBar onInputChange={handleInputChange} />
      <MovieList error={error} moviesList={movieList} />

      <Pagination
        total_pages={totalPages}
        current_page={currentPage}
        setCurrentPage={handlePaginationData}
      />

      <TrendingNow />
      <UpcomingMovies />
    </PageContainer>
  );
}
