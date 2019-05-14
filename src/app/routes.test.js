import { inTuto } from './routes'

describe('inTuto(route)', () => {
  it(`should true when route is '/tuto'`, () => {
    expect(inTuto('/tuto')).toBeTruthy()
  })

  it(`should false when route is not '/tuto'`, () => {
    expect(inTuto('/test')).toBeFalsy()
  })
})