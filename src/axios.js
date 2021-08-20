import axios from 'axios'

export const tmdbUrl = {
  base: "https://api.themoviedb.org/3",
  image :{
    original: "https://image.tmdb.org/t/p/original"
  }
}

//TMDBからのbaseURLリクエストを作成
export const instance = axios.create({
    baseURL: tmdbUrl.base,
});

export const fetchTrailerUrl = async (movieId) => {
  return await instance.get(`/tv/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
}