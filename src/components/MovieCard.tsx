import React, { useContext } from "react";
import _ from "lodash";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import movieApiClient from "../utils/movieApiClient";
import { Movie } from "../utils/typesApi";
import { AppThemeContext, Theme } from "../context/Theme";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();
  const { theme } = useContext(AppThemeContext);
  const onCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  function plotShorten(text: string, length = 250) {
    const shortText = _.take(text.split(""), length).join("");
    return shortText + "...";
  }

  return (
    <MovieCardContainer
      data-testid={`movie-card-container-${movie.id}`}
      onClick={onCardClick}
      theme={theme}
    >
      <div style={{ display: "flex" }}>
        <img
          height="238"
          src={movieApiClient.buildMoviePosterUrl(movie.poster_path)}
        ></img>
        <MovieCardSummary>
          <MovieTitle data-testid={`movie-card-title-${movie.id}`}>
            {movie.title}
          </MovieTitle>

          <p>Release Date: {moment(movie.release_date).format("MMM Do YY")}</p>
          <MoviePlot>Plot: {plotShorten(movie.overview)}</MoviePlot>
        </MovieCardSummary>
      </div>
    </MovieCardContainer>
  );
}

const MovieCardSummary = styled.div`
  padding: 10px;
  text-decoration: none;
`;

const MovieTitle = styled.h2`
  color: #2d3436;
  text-decoration: none;
`;

const MoviePlot = styled.p`
  color: #636e72;
  text-decoration: none;
  height: 100px;
  overflow: hidden;
  font-size: 0.8em;
  // white-space: nowrap;
  text-overflow: ellipsis;
`;

interface MovieCardContainerProps {
  theme: Theme;
}

const MovieCardContainer = styled.div<MovieCardContainerProps>`
  display: flex;
  width: calc(50% - 20px);
  border: solid 1px #b2bec3;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 4px;
  box-sizing: border-box;
  height: 240px;
  background-color: ${(props) => props.theme.background};
  &:hover {
    // background-color: #b2bec3;
    cursor: pointer;
    transform: scale(1.03);
    border-color: black;
  }
`;
