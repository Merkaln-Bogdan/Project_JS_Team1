import axios from 'axios';
const BaseUrl = (axios.defaults.baseURL = 'https://api.themoviedb.org/3/');
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const API = '8b49236e6b82eb62c6f5cab7126e8684';

export default {
  currPage: 1,
  getPopularFilms() {
    return axios
      .get(
        `${proxyUrl}${BaseUrl}/movie/popular/?api_key=${API}&page=${this.currPage}`,
      )
      .then(response => response.data);
  },

  getInfoById(id) {
    id = this.getMovieIdFromLink() ? this.getMovieIdFromLink() : id;
    return axios
      .get(`${proxyUrl}${BaseUrl}/movie/${id}?api_key=${API}`)
      .then(response => response.data);
  },
  getMoviesByQuery(query) {
    this.currPage = this.getPageFromLink()
      ? this.getPageFromLink()
      : this.currPage;

    return axios
      .get(
        `${proxyUrl}${BaseUrl}/search/movie?api_key=${API}&page=${this.currPage}&query=${query}&include_adult=false&language=en-US`,
      )
      .then(response => {
        this.currPage += 1;

        if (response.data.total_pages === 0) {
          return (
            alert('Please enter correct film name') ||
            (refs.textArea.value = '')
          );
        }

        return response.data;
      });
  },
  getPageFromLink() {
    return location.hash.split('#page=')[1];
  },
  getMovieIdFromLink() {
    return location.hash.split('#id=')[1];
  },
  getSimilarMovies(id) {
    id = this.getMovieIdFromLink() ? this.getMovieIdFromLink() : id;
    return axios
      .get(`${proxyUrl}${BaseUrl}/movie/${id}/similar?api_key=${API}`)
      .then(response => response.data);
  },
};
