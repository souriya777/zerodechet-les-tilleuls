const ROUTES = {}

ROUTES.landing = '/'
ROUTES.tuto = '/tuto'
ROUTES.signin = '/signin'
ROUTES.signup = '/signup'
ROUTES.stat = '/stat'

export const inTuto = route => {
  return '/tuto' === route
}

export default ROUTES