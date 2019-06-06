import { padWeight } from './string-utils'

describe(`padWeight`, () => {

  it(`padWeight(0.25) returns 0,250`, () => {
    expect(padWeight(0.25)).toEqual('0,250');
  })

  it(`padWeight(.25) returns 0,250`, () => {
    expect(padWeight(.25)).toEqual('0,250');
  })

  it(`padWeight(1.2) returns 1,200`, () => {
    expect(padWeight(1.2)).toEqual('1,200');
  })

})