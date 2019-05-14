import { anonymousPath, inTuto } from './routes'

describe('anonymousPath()', () => {
  it(`should returns :` + /(?:^\/signin(?:\/)?$|^\/signup(?:\/)?$)/i, () => {
    expect(anonymousPath()).toEqual(/(?:^\/signin(?:\/)?$|^\/signup(?:\/)?$)/i)
  })
})

describe('inTuto(route)', () => {
  it(`should true when route is '/tuto'`, () => {
    expect(inTuto('/tuto')).toBeTruthy()
  })

  it(`should false when route is not '/tuto'`, () => {
    expect(inTuto('/test')).toBeFalsy()
  })
})