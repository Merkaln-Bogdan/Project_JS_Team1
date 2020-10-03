import refs from '../refs';
import mainPageTemplate from '../../html/homePage/homePage.hbs';
import api from '../api';
import { infoMovieCardBuild } from '../filmDetailsPage/filmDetailsPage';
export function mainPage() {
  api.getPopularFilms().then(data => {
    data.results.map(
      elem => (elem.release_date = elem.release_date.split('-')[0]),
    );
    const markup = mainPageTemplate(data.results);
    refs.cardList.innerHTML = '';
    infoMovieCardBuild.insertCardsToMainPage(markup);
    infoMovieCardBuild.setOnclick();
  });
}
