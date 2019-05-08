import ROUTES from './routes'

describe('ROUTES', () => {
  it(`isActive return false when pathname === '/'`, () => {
    const isActive = ROUTES.isActive('/', 'toto')
    expect(isActive).toBeFalsy()
  })

  it(`isActive return true when pathname === linkTo`, () => {
    const pathname = '/match'
    const linkTo = '/match'
    const isActive = ROUTES.isActive(pathname, linkTo)
    expect(isActive).toBeTruthy()
  })

  it(`isActive return false when pathname !== linkTo`, () => {
    const pathname = '/1'
    const linkTo = '/2'
    const isActive = ROUTES.isActive(pathname, linkTo)
    expect(isActive).toBeFalsy()
  })
})