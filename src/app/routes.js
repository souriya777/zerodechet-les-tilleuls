const ROUTES = {}

ROUTES.landing = '/'
ROUTES.dashboard = '/dashboard'
ROUTES.signin = '/signin'
ROUTES.signup = '/signup'
ROUTES.signupChoice = '/signup-choice'
ROUTES.signout = '/signout'
ROUTES.resetPwd = '/reset-pwd'
ROUTES.terms = '/terms'
ROUTES.profile = '/profile'
ROUTES.garbage = '/garbage'
ROUTES.progress = '/progress'
ROUTES.events = '/events'
ROUTES.eventCreation = '/event-creation'
ROUTES.infos = '/infos'
ROUTES.userProfile = '/profile'
ROUTES.userHabits = '/user-habits'

ROUTES.isActive = (pathname, linkTo) => {
  return pathname !== ROUTES.landing && 
          pathname === linkTo
}

ROUTES.publicRoutesAsRegex = () => {
  
}

export default ROUTES