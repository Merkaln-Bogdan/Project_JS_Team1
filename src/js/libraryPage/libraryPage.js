import refs from '../refs';
import { infoMovieCardBuild } from '../filmDetailsPage/filmDetailsPage.js';
import mainPageTemplate from '../../html/homePage/homePage.hbs';

const emptyMessage = `<h2 class="empty-message">You do not have watched movies.
<a href="../../index.html">Add them</a></h2>`;

export function drawWatchedFilmList() {
  refs.cardList.innerHTML = '';
  const watchedFilms = JSON.parse(localStorage.getItem('watched'));
  const markupWatched = watchedFilms.length
    ? mainPageTemplate(watchedFilms)
    : emptyMessage;
  infoMovieCardBuild.insertCardsToMainPage(markupWatched);
  infoMovieCardBuild.setOnclick();
}

export function drawQueueFilmList() {
  refs.cardList.innerHTML = '';
  const queueFilms = JSON.parse(localStorage.getItem('queue'));
  const markupQueue = queueFilms.length
    ? mainPageTemplate(queueFilms)
    : emptyMessage;
  infoMovieCardBuild.insertCardsToMainPage(markupQueue);
  infoMovieCardBuild.setOnclick();
}
