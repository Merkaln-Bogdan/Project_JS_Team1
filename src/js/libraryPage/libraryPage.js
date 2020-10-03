import refs from '../refs';
import itemTemplate from '../../html/myFilmLibraryPage/library-page.hbs';
import api from '../api';
import { infoMovieCardBuild } from '../filmDetailsPage/filmDetailsPage.js';

console.log(infoMovieCardBuild);
const emptyMessage = `<h2 class="empty-message">You do not have watched movies.
<a href="../../index.html">Add them</a></h2>`;

export function drawWatchedFilmList() {
  const filmstorage = localStorage.getItem('watched');
  if (filmstorage) {
    const watchedFilms = JSON.parse(localStorage.getItem('watched'));
    refs.libraryPageList.innerHTML = '';
    refs.watchButton.classList.add('active-button');
    refs.queueButton.classList.remove('active-button');
    const items = watchedFilms.map(el => itemTemplate(el)).join('');
    refs.libraryPageList.insertAdjacentHTML('afterbegin', items);
  } else {
    refs.container.classList.add('hide');
    refs.libraryPageList.insertAdjacentHTML('afterbegin', emptyMessage);
  }
}

export function drawQueueFilmList() {
  const queueFilms = JSON.parse(localStorage.getItem('queue'));
  if (!queueFilms) {
    refs.libraryPageList.innerHTML = '';
    refs.libraryPageList.insertAdjacentHTML('afterbegin', emptyMessage);
  } else {
    const items = queueFilms.map(el => itemTemplate(el)).join('');
    refs.libraryPageList.insertAdjacentHTML('afterbegin', items);
  }
}

const dataMovieId = document.querySelector('.library-page__list');
dataMovieId.addEventListener('click', showMovieDetails);
export function showMovieDetails(e) {
  // const id = e.target.id;

  const markup = document.querySelectorAll('.libraryItem');
  console.log(markup);
  for (const li of markup) {
    li.addEventListener('click', e => {
      if (e.target.nodeName != 'A') {
        const id = e.currentTarget.dataset.movieid;
        api.getInfoById(id);
      }
    });
  }
}
