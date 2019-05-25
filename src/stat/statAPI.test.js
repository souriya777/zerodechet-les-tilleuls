import { 
  UID,
  WEEK,
  MONTH,
  TRIMESTER,
  DAY_NEXT_YEAR,
  DAY_LAST_YEAR,
} from '../utils/common-test/common-data'
import { WEEK_DATA } from './__mocks__/weekData'
import { MONTH_DATA } from './__mocks__/monthData'
import { TRIMESTER_DATA } from './__mocks__/trimesterData'
import statAPI from './statAPI'

jest.mock('../weight/weightAPI')

describe(`getWeekData`, () => {

  it(`returns WEEK_DATA for :
    uid = UID
    now = SATURDAY
  `, async () => {
      const mNow = WEEK.SATURDAY

      const result = await statAPI.getWeekData(UID, mNow.toDate())
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

describe(`getMonthData`, () => {

  it(`returns MONTH_DATA for :
    uid = UID
    now = MONTH.DAY_23
  `, async () => {
      const mNow = MONTH.DAY_23

      const result = await statAPI.getMonthData(UID, mNow.toDate())
      expect(result).toEqual(MONTH_DATA)
  })

})

describe(`getTrimesterData`, () => {

  it(`returns TRIMESTER_DATA for :
    uid = UID
    now = TRIMESTER.MAY_DAY_23
  `, async () => {
      const mNow = TRIMESTER.MAY_DAY_23

      const result = await statAPI.getTrimesterData(UID, mNow.toDate())
      expect(result).toEqual(TRIMESTER_DATA)
  })

})