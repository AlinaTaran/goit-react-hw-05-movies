import axios from 'axios';

const apiKey = '37d52a433852bd404fa2b2ce84bfc184';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: apiKey };

const getTrendingMovies = async (page = 1) => {
  const { data } = await axios.get(`/trending/all/day?page=${page}`);
  return data;
};

const fetchMovies = async (query, page = 1) => {
  const { data } = await axios.get(
    `/search/movie?language=en-US&page=${page}&include_adult=false&query=${query}`,
  );
  return data;
};

const getMovieDetail = async movieID => {
  const { data } = await axios.get(`/movie/${movieID}`);
  return data;
};

const getMovieCredits = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data;
};

const getMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data;
};

export {
  getTrendingMovies,
  fetchMovies,
  getMovieDetail,
  getMovieCredits,
  getMovieReviews,
};
