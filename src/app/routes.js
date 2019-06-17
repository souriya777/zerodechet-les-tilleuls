const ROUTES = {}

ROUTES.welcome = '/welcome'
ROUTES.tuto = '/tuto'
ROUTES.signin = '/signin'
ROUTES.signup = '/signup'
ROUTES.resetPwd = '/reset-pwd'
// FIXME : improve arg in url
ROUTES.profile = '/profile/:header?'
ROUTES.rdv = '/rdv/:header?'
ROUTES.stat = '/stat/:header?'
ROUTES.weight = '/weight/:header?'

export default ROUTES