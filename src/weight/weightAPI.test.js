import weightAPI from './weightAPI'
import { 
  UID,
  WEEK,
  ANNUAL,
  MEMBERS_TOTAL,
  WEIGHT_RECYCLED,
  WEIGHT_NORECYCLED,
} from '../utils/common-test/common-data'
import { 
  WEEK_DATA
} from './__mocks__/weekData'
import { CONVERTED_LAST_WEIGHT_DATA } from './__mocks__/lastWeightData'

jest.mock('./weightFirebase')

describe(`getWeightListBtwDates`, () => {

  it(`returns 7 results for a "week" :
    beginDate= MONDAY
    endDate= SATURDAY`, async () => {
      const result = await weightAPI.getWeightListBtwDates(UID, WEEK.MONDAY.toDate(), WEEK.SATURDAY.toDate())

      await expect(result.length).toEqual(5)
      await expect(result).toEqual(WEEK_DATA)
  })

})

describe(`addWeight`, () => {

  it(`
    FOR :
      nbPers = 2
      startDate = MONDAY, 
      endDate = <same as startDate>
      recycled = WEIGHT_RECYCLED
      norecycled = WEIGHT_NORECYCLED
    WRITE in database without error
    AND return a valid DocumentReference`, async () => {
      const dbResp = await weightAPI.addWeight(MEMBERS_TOTAL, WEEK.MONDAY.toDate(), WEEK.TUESDAY.toDate(), WEIGHT_RECYCLED, WEIGHT_NORECYCLED)
      expect(dbResp).toBeUndefined()
  })

})

describe(`getLastWeight`, () => {

  it(`convert LAST_WEIGHT_DATA and returned it`, async () => {
    const w = await weightAPI.getLastWeight(UID)
    expect(w).toEqual(CONVERTED_LAST_WEIGHT_DATA)
  })

})

describe(`getLastStartDate`, () => {

  it(`return JUN_DAY_4`, async () => {
    const d = await weightAPI.getLastStartDate(UID)
    expect(d).toEqual(ANNUAL.JUN_DAY_4.toDate())
  })

})