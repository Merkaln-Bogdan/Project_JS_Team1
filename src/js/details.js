import refs from './refs';
import api from './api';
import detailsItem from '../html/detailsPage/details-page.hbs';
console.log(refs.cardList);
refs.cardList.addEventListener('click', fetchMovieDetails);

const menuItemPosition = refs.cardContainer;

export function fetchMovieDetails() {
  api.getInfoById().then(data => {
    const markup = detailsItem(data);
    menuItemPosition.insertAdjacentHTML('beforeend', markup);
  });
}

const QueueFilms = document.querySelector('.js-button-queue');
const WatchedFilms = document.querySelector('.js-button-watched');

const localQeue = localStorage.getItem('queue');
const parsedQeue = JSON.parse(localQeue);
const localWatched = localStorage.getItem('watched');
const parsedWatched = JSON.parse(localWatched);

QueueFilms.addEventListener('click', newQueueFilm);
WatchedFilms.addEventListener('click', newWatchedFilm);

export function newQueueFilm() {
  api.getInfoById().then(data => {
    if (!parsedQeue.id === data.id) {
      localStorage.setItem('queue', JSON.stringify(data));
    } else return;
  });
}

export function newWatchedFilm() {
  api.getInfoById().then(data => {
    if (!parsedWatched.id === data.id) {
      localStorage.setItem('watched', JSON.stringify(data));
    } else return;
  });
}
