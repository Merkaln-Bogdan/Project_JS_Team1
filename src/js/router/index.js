import Navigo from 'navigo';
import { mainPage } from '../initialHomePage/initialHomePage';
import {
  drawWatchedFilmList,
  drawQueueFilmList
} from '../libraryPage/libraryPage';
import refs from '../refs';

// in this app we use the routes Krasimir Navigo vanila js https://github.com/krasimir/navigo

const router = new Navigo();

const locationHome = refs.logoHome.getAttribute('href');
const locationWatched = refs.library.getAttribute('href');
const locationQueue = refs.queueButton.getAttribute('href');
export const initRouter = () => {
  router
    .on({
      '/': function () {
        refs.serchForm.classList.remove('hide');
        refs.queueButton.classList.remove('active-button');
        refs.watchButton.classList.remove('active-button');
        refs.pagination.classList.remove('hide');
        refs.sidebar.classList.add('hide');
        refs.libraryPageSection.classList.add('hide');
        refs.serchForm.classList.remove('hide');
        mainPage();
      },
    })
    .resolve();
    router
    .on({
    'library/watched': function () {
      refs.queueButton.classList.remove('active-button');
      refs.watchButton.classList.add('active-button');
      refs.sidebar.classList.remove('hide');
      refs.libraryPageSection.classList.remove('hide');
      refs.pagination.classList.add('hide');
      refs.serchForm.classList.add('hide');
      drawWatchedFilmList();
    },
  }).resolve()
  router
    .on({
      'library/queue': function () {
        refs.queueButton.classList.add('active-button');
        refs.watchButton.classList.remove('active-button');
        drawQueueFilmList();
      },
    })
    .resolve('/queue');
};

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
