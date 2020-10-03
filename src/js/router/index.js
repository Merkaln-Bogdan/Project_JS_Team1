import Navigo from 'navigo';

import { mainPage } from '../initialHomePage/initialHomePage';
import {
  drawWatchedFilmList,
  drawQueueFilmList,
} from '../libraryPage/libraryPage';

import refs from '../refs';

const router = new Navigo();
const locationWatched = refs.library.getAttribute('href');
const locationHome = refs.logoHome.getAttribute('href');
const locationQueue = refs.queueButton.getAttribute('href');

refs.home.addEventListener('click', e => {
  e.preventDefault();
  router.navigate(locationHome);
});
refs.library.addEventListener('click', e => {
  e.preventDefault();
  router.navigate(locationWatched);
});
refs.sidebarQueueBtn.addEventListener('click', e => {
  e.preventDefault();
  router.navigate(locationQueue);
});

export const initRouter = () => {
  router.on({
    '/': function () {
      refs.queueButton.classList.remove('active-button');
      refs.watchButton.classList.remove('active-button');
      refs.sidebar.classList.add('hide');
      refs.libraryPageSection.classList.add('hide');
      refs.serchForm.classList.remove('hide');
      refs.cardContainer.classList.remove('hide');
      mainPage();
    },
    'library/watched': function () {
      console.log(location.pathname);
      refs.sidebar.classList.remove('hide');
      refs.libraryPageSection.classList.remove('hide');
      refs.serchForm.classList.add('hide');
      refs.cardContainer.classList.add('hide');
      drawWatchedFilmList();
    },
    'library/queue': function () {
      console.log(location.pathname);
      drawQueueFilmList();
      refs.queueButton.classList.add('active-button');
      refs.watchButton.classList.remove('active-button');
    },
  });
};
