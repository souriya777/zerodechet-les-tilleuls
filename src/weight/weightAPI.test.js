import weightAPI from './weightAPI'
import { 
  UID,
  WEEK 
} from '../utils/common-test/common-data'
import { 
  WEEK_DATA
} from './__mocks__/weekData'

jest.mock('./weightFirebase')

describe(`getWeightListBtwDates`, () => {

  it(`returns 7 results for a "week" :
    uid = UID
    beginDate= MONDAY
    endDate= SATURDAY`, async () => {
      const result = await weightAPI.getWeightListBtwDates(UID, WEEK.MONDAY.toDate(), WEEK.SATURDAY.toDate())

      await expect(result.length).toEqual(5)
      await expect(result).toEqual(WEEK_DATA)
  })

})