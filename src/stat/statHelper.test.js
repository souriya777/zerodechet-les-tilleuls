import { avg } from './statHelper'

describe(`avg`, () => {

  it(`returns 300 for :
    recycled = 400
    norecycled = 200
  `, async () => {
      const result = avg(400, 200)
      expect(result).toEqual(300)
  })

  it(`returns 300 for :
    recycled = undefined
    norecycled = 100
  `, async () => {
      const result = avg(undefined, 200)
      expect(result).toEqual(100)
  })

  it(`returns 300 for :
    recycled = null
    norecycled = 100
  `, async () => {
      const result = avg(null, 200)
      expect(result).toEqual(100)
  })

  it(`returns 300 for :
    recycled = "400" (string)
    norecycled = "200" (string)
  `, async () => {
      const result = avg("400", "200")
      expect(result).toEqual(300)
  })

})