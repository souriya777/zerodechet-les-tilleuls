import { anonymousPath } from './routes'

describe('anonymousPath()', () => {
  it(`should returns :` + /(?:^\/signin(?:\/)?$|^\/signup(?:\/)?$)/i, () => {
    expect(anonymousPath()).toEqual(/(?:^\/signin(?:\/)?$|^\/signup(?:\/)?$)/i)
  })
})