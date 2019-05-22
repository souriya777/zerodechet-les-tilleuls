import { 
  UID,
  WEEK,
  DAY_NEXT_YEAR,
  DAY_LAST_YEAR,
} from '../utils/common-test/common-data'
import { WEEK_DATA } from './__mocks__/weekData'
import statAPI from './statAPI'

jest.mock('../weight/weightAPI')

describe(`getWeekData`, () => {

  it(`returns WEEK_DATA for :
    uid = UID
    now = SUNDAY
  `, async () => {
      const mNow = WEEK.SUNDAY

      const result = await statAPI.getWeekData(UID, mNow.toDate())
      expect(result).not.toBeUndefined()
      expect(result).toEqual(WEEK_DATA)
  })

  it(`returns undefined for day with no DATA (FUTURE) :
    uid = UID
    now = DAY_NEXT_YEAR
  `, async () => {
      const mNow = DAY_NEXT_YEAR

      const result = await statAPI.getWeekData(UID, mNow.toDate())
      expect(result).toBeUndefined()
  })

  it(`returns undefined for day with no DATA (PAST) :
    uid = UID
    now = DAY_NEXT_YEAR
  `, async () => {
      const mNow = DAY_LAST_YEAR

      const result = await statAPI.getWeekData(UID, mNow.toDate())
      expect(result).toBeUndefined()
  })

})