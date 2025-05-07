import type { Offer } from '../../../types/types';
import { Link } from 'react-router-dom';
import Card from '../../offer-card/offer-card';

type CardListProps = {
  offers: Offer[];
};

function FavoritesPage ({offers} : CardListProps): JSX.Element {

  const groupedOffersByCity = offers.reduce<{ [key: string ]: Offer[] }>((acc, curr) => {
    if (curr.isFavorite) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const city = curr.city.name;

      if (!(city in acc)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        acc[city] = [];
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      acc[city].push(curr);
    }

    return acc;
  }, {});

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <ul className="favorites__list">
              {Object.entries(groupedOffersByCity).map(([city, groupedOffers]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {groupedOffers.map((offer) => (
                      <Card onMouseMove={function (id: number): void {
                        throw new Error('Function not implemented.');
                      } } onMouseLeave={function (): void {
                        throw new Error('Function not implemented.');
                      } } key={offer.id} {...offer} place="favorites"
                      />))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );

}

export default FavoritesPage;
