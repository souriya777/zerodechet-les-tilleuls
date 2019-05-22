import { 
  UID,
  WEEK 
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

})