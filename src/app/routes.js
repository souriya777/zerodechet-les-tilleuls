import pathToRegexp from 'path-to-regexp'

const ROUTES = {}

ROUTES.landing = '/'
ROUTES.signin = '/signin'
ROUTES.signup = '/signup'
// ROUTES.dashboard = '/dashboard'
// ROUTES.signout = '/signout'
// ROUTES.resetPwd = '/reset-pwd'
// ROUTES.terms = '/terms'
// ROUTES.profile = '/profile'
// ROUTES.weight = '/weight'
// ROUTES.progress = '/progress'
ROUTES.stat = '/stat'
// ROUTES.event = '/event'
// ROUTES.eventCreation = '/event-creation'
// ROUTES.infos = '/infos'
// ROUTES.userProfile = '/profile'

export const anonymousPath = () => {
  return pathToRegexp([ROUTES.signin, ROUTES.signup])
}

export default ROUTES