import refs from '../refs';
import cardTemplate from '../../html/detailsPage/details-page.hbs';
import similarMoviesTemplate from '../../html/similar-movies.hbs';
import api from '../api';
import localStorageJs from '../localStorageJS';

export const infoMovieCardBuild = {
  card(id) {
    api.getInfoById(id).then(data => {
      refs.loadMoreBtn.classList.add('hide');
      refs.pagination.classList.add('hide');
      const markup = cardTemplate(data);

      this.insertCardToMain(markup);

      this.rerenderButtons();

      this.setOnclickAddWatch();

      this.setOnclickAddQueue();

      api.getSimilarMovies(id).then(data => {
        data.results;

        const similarMoviesMarkup = similarMoviesTemplate(data.results);
        this.insertSimilarMoviesToCard(similarMoviesMarkup);
        $('.similarMovies').slick({
          dots: true,
          infinite: true,
          speed: 400,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          centerPadding: '60px',
          arrows: true,
          autoplay: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      });
    });
  },

  buildCartTemplate(item) {
    return cardTemplate(item);
  },

  insertSimilarMoviesToCard(item) {
    refs.cardList.insertAdjacentHTML('beforeend', item);
  },

  insertCardToMain(item) {
    refs.cardList.innerHTML = '';
    refs.cardList.innerHTML = item;
    refs.textArea.hidden = true;
  },
  insertCardsToMainPage(items) {
    refs.cardList.insertAdjacentHTML('beforeend', items);
  },

  setOnclickAddWatch() {
    const buttonAddWatch = document.querySelector('.btnAddWatch');
    buttonAddWatch.addEventListener('click', e => {
      const id = e.currentTarget.dataset.movieid;
      if (buttonAddWatch.dataset.action === 'add') {
        const saveData = localStorageJs.setWatchedMovieIdToLocalStorage;
        api.getInfoById(id).then(saveData).then(this.rerenderButtons);
      } else if (buttonAddWatch.dataset.action === 'remove') {
        api
          .getInfoById(id)
          .then(localStorageJs.deleteWatchedMovieIdFromLocalStorage)
          .then(this.rerenderButtons);
      }
    });
  },

  rerenderButtons() {
    const buttonAddWatch = document.querySelector('.btnAddWatch');
    const buttonAddQueue = document.querySelector('.btnAddQueue');
    const watchedLS = localStorageJs.getWatchedMovieIdToLocalStorage();
    let isWatched = false;
    let isQueued = false;
    if (watchedLS) {
      isWatched = watchedLS.find(
        movie => movie.id === Number(buttonAddWatch.dataset.movieid),
      );
    }
    const queuedLS = localStorageJs.getQueueMovieIdToLocalStorage();
    if (queuedLS) {
      isQueued = queuedLS.find(
        movie => movie.id === Number(buttonAddQueue.dataset.movieid),
      );
    }

    if (isWatched) {
      buttonAddWatch.textContent = 'Remove from watched';
      buttonAddWatch.dataset.action = 'remove';
    } else {
      buttonAddWatch.textContent = 'Add to watched';
      buttonAddWatch.dataset.action = 'add';
    }

    if (isQueued) {
      buttonAddQueue.textContent = 'Remove from queue';
      buttonAddQueue.dataset.action = 'remove';
    } else {
      buttonAddQueue.textContent = 'Add to queue';
      buttonAddQueue.dataset.action = 'add';
    }
  },

  setOnclickAddQueue() {
    const buttonAddQueue = document.querySelector('.btnAddQueue');
    buttonAddQueue.addEventListener('click', e => {
      const id = e.currentTarget.dataset.movieid;
      if (buttonAddQueue.dataset.action === 'add') {
        const saveData = localStorageJs.setQueueMovieIdToLocalStorage;
        api.getInfoById(id).then(saveData).then(this.rerenderButtons);
      } else if (buttonAddQueue.dataset.action === 'remove') {
        api
          .getInfoById(id)
          .then(localStorageJs.deleteQueueMovieIdFromLocalStorage)
          .then(this.rerenderButtons);
      }
    });
  },
  setOnclick() {
    const markup = document.querySelectorAll('.itemCard');
    for (const li of markup) {
      li.addEventListener('click', e => {
        if (e.target.nodeName != 'A') {
          const id = e.currentTarget.dataset.movieid;
          this.card(id);
        }
      });
    }
  },
};
