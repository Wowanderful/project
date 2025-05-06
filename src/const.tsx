export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer',
}

const STARS_COUNT = 5;
const MAX_PERCENT_STARS_WIDTH = 100;

export {STARS_COUNT, MAX_PERCENT_STARS_WIDTH};

