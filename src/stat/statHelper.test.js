import { avg, avgHome } from './statHelper'

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

describe(`avgHome`, () => {

  it(`
    FOR :
      recycled = 2000
      norecycled = 1000
      nbPers = 2
      nbDays = 0
    RETURNS 
      {
        recycled: 2000, 
        norecycled: 1000,
      }
  `, async () => {
      const result = avgHome(2000, 1000, 2, 0)
      expect(result).toEqual({
        recycled: 2000, 
        norecycled: 1000,
      })
  })

  it(`
    FOR :
      recycled = 2000
      norecycled = 1000
      nbPers = 2
      nbDays = 2
    RETURNS 
      {
        recycled: 500, 
        norecycled: 250,
      }
  `, async () => {
      const result = avgHome(2000, 1000, 2, 2)
      expect(result).toEqual({
        recycled: 500, 
        norecycled: 250,
      })
  })

  it(`
    FOR :
      recycled = 0
      norecycled = 1000
      nbPers = 1
      nbDays = 1
    RETURNS 
      {
        recycled: 0, 
        norecycled: 1000,
      }
  `, async () => {
      const result = avgHome(0, 1000, 1, 1)
      expect(result).toEqual({
        recycled: 0, 
        norecycled: 1000,
      })
  })

  it(`
    FOR :
      recycled = 354
      norecycled = 123
      nbPers = 3
      nbDays = 1
    RETURNS 
      {
        recycled: 118, 
        norecycled: 41,
      }
  `, async () => {
      const result = avgHome(354, 123, 3, 1)
      expect(result).toEqual({
        recycled: 118, 
        norecycled: 41,
      })
  })

  it(`
    FOR :
      recycled = 657
      norecycled = 2349
      nbPers = 2
      nbDays = 6
    RETURNS 
      {
        recycled: 54.75, 
        norecycled: 195.75,
      }`, async () => {
    const result = avgHome(657, 2349, 2, 6)
    expect(result).toEqual({
      recycled: 54.75, 
      norecycled: 195.75,
    })
  })

})