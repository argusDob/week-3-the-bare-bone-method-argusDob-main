import {
  ApiError,
  ApiResponse,
  FullMovieResponse,
  Movie,
  MovieReview,
} from "./typesApi";
import placeHolder from "../assets/movie-placeholder.png";

type UrlObject = {
  urlOne: string;
  urlTwo: string;
};

// !! ADD YOUR API KEY BELOW !!
const apiKey = "53d8b09da7c0974c654b6963e5eac112"; // ADD THE KEY HERE!

const apiUrl = "https://api.themoviedb.org/3";
const RELEASE_DATE_LTE = "2023-06-18";
const RELEASE_DATE_GTE = "2023-05-27";

class ApiClient {
  private apiKey: string;
  public apiUrl: string;
  private imageUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  constructor(apiKey: string, apiUrl: string) {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
  }

  buildMoviePosterUrl(relativeUrl: string): string {
    if (!relativeUrl) return placeHolder;
    return `${this.imageUrl}${relativeUrl}`;
  }

  private switchURL(urlObject: UrlObject, moviesListType: string) {
    let url: string = "";

    url = moviesListType === "trendings" ? urlObject.urlOne : urlObject.urlTwo;

    return url;
  }

  async getMovieDetail(movieId: string): Promise<FullMovieResponse | ApiError> {
    try {
      const response = await fetch(
        `${apiUrl}/movie/${movieId}?api_key=${this.apiKey}`,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data: FullMovieResponse = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return {
        message: "An error has ocurred while fetching data",
      } as ApiError;
    }
  }

  async getMovieList(): Promise<ApiResponse<Movie> | ApiError> {
    try {
      const response = await fetch(
        `${apiUrl}/search/movie?query=star%20wars&api_key=${this.apiKey}`,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data: ApiResponse<Movie> = await response.json();

      return data;
    } catch (err) {
      console.error(err);
      return {
        message: "An error has ocurred while fetching data",
      } as ApiError;
    }
  }

  async getMovieReviewList(
    movieId: string
  ): Promise<ApiResponse<MovieReview> | ApiError> {
    try {
      const response = await fetch(
        `${apiUrl}/movie/${movieId}/reviews?api_key=${this.apiKey}`,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data: ApiResponse<MovieReview> = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return {
        message: "An error has ocurred while fetching data",
      } as ApiError;
    }
  }

  async getMovieListNowPlaying(
    moviesListType: string
  ): Promise<ApiResponse<Movie> | ApiError> {
    try {
      let url: string = "";

      let urlObject = {
        urlOne: `${apiUrl}/movie/now_playing?api_key=${this.apiKey}`,
        urlTwo: `${apiUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${RELEASE_DATE_GTE}&release_date.lte=${RELEASE_DATE_LTE}&api_key=${this.apiKey}`,
      };

      url = this.switchURL(urlObject, moviesListType);

      const response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
        },
      });
      const data: ApiResponse<Movie> = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
      return {
        message: "An error has ocurred while fetching data",
      } as ApiError;
    }
  }
}

// The Singleton Pattern (Api Client, Db Client)
export default new ApiClient(apiKey, apiUrl);
