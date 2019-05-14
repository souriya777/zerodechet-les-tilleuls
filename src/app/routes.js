import pathToRegexp from 'path-to-regexp'

const ROUTES = {}

ROUTES.landing = '/'
ROUTES.tuto = '/tuto'
ROUTES.signin = '/signin'
ROUTES.signup = '/signup'
ROUTES.stat = '/stat'

export const anonymousPath = () => {
  return pathToRegexp([ROUTES.signin, ROUTES.signup])
}

export const inTuto = route => {
  return '/tuto' === route
}

export default ROUTES