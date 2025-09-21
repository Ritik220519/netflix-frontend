export const BASE_URL = "http://localhost:3000"
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmE2ZGY1ZDYwNTNkNzhhNzFhMWVkODdkYTRjYWY0NCIsIm5iZiI6MTcyMjA2NjkwOC45MDQsInN1YiI6IjY2YTRhN2RjZTZjODU1YmZmZDM2NjhiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tnxGQl1McDhJY7O3bXiu_Kf_Hg0rmQOAIf-vTJ0RhlI'
  }
};

export const Now_Playing_movie = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';