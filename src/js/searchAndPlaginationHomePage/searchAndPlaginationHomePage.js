import api from '../api';
import refs from '../refs';
import mainPageTemplate from '../../html/homePage/homePage.hbs';
import error from '../../html/error.hbs';
import { mainPage } from '../initialHomePage/initialHomePage';
import { infoMovieCardBuild } from '../filmDetailsPage/filmDetailsPage';

refs.serchForm.addEventListener('submit', e => {
  refs.loadMoreBtn.classList.remove('hide');
  api.currPage = 1;
  e.preventDefault();
  refs.cardList.innerHTML = '';
  const text = refs.textArea.value;
  showCardsByquery(text);
});
// const movieId = api.getMovieIdFromLink();
// if (movieId) {
//   infoMovieCardBuild.card(movieId);
// } else {
//   mainPage();
// }

function showCardsByquery(query) {
  api.getMoviesByQuery(query).then(data => {
    data.results.map(
      elem => (elem.release_date = elem.release_date.split('-')[0]),
    );
    const markup = data.results.length
      ? mainPageTemplate(data.results)
      : error();
    infoMovieCardBuild.insertCardsToMainPage(markup);
  });
}
const btnPrev = document.querySelector('.prev_btn');
const btnNext = document.querySelector('.next_btn');
const counter = document.querySelector('.counter__value');

btnNext.addEventListener('click', nextPageHandler);
btnPrev.addEventListener('click', prevPageHandler);
btnPrev.setAttribute('disabled', 'disabled');
btnPrev.classList.add('disable');

async function nextPageHandler() {
  api.currPage = api.currPage + 1;
  const query = refs.textArea.value;
  const request = query
    ? async () => await api.getMoviesByQuery(query).bind(api)
    : api.getPopularFilms.bind(api);
  const movies = await request();
  const markup = movies.results.length
    ? mainPageTemplate(movies.results)
    : error();

  refs.cardList.innerHTML = '';
  refs.cardList.insertAdjacentHTML('beforeend', markup);

  if (api.currPage !== 1) {
    btnPrev.removeAttribute('disabled');
    btnPrev.classList.remove('disable');
  }

  counter.value = api.currPage;
}

async function prevPageHandler() {
  api.currPage = api.currPage - 1;

  const query = refs.textArea.value;
  const request = query
    ? async () => api.getMoviesByQuery(query).bind(api)
    : api.getPopularFilms.bind(api);
  const movies = await request();
  const markup = movies.results.length
    ? mainPageTemplate(movies.results)
    : error();

  refs.cardList.innerHTML = '';
  refs.cardList.insertAdjacentHTML('beforeend', markup);

  if (api.currPage === 1) {
    btnPrev.setAttribute('disabled', 'disabled');
    btnPrev.classList.add('disable');
  }

  counter.value = api.currPage;
}
