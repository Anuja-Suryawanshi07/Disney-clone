import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="035a5ed5ab980542e0225cef77ceea9c"
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=035a5ed5ab980542e0225cef77ceea9c';
//https://api.themoviedb.org/3/trending/all/day?api_key=035a5ed5ab980542e0225cef77ceea9c

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id);

export default{
    getTrendingVideos,
    getMovieByGenreId
}