import weightAPI from './weightAPI'
import {
  VALID_UID,
  VALID_BEGIN_DATE,
  VALID_END_DATE,
} from './__mocks__/weightData'
import { 
  WEEK_DATA
} from './__mocks__/weekData'

jest.mock('./weightFirebase')

describe(`getWeightListBtwDates`, () => {

  it(`returns 7 results for a "week" :
    uid = PINv9HysdhWBgbq870qGSmjXH0q2
    beginDate= 2019-05-02
    endDate= 2019-05-09`, async () => {
      const result = await weightAPI.getWeightListBtwDates(VALID_UID, VALID_BEGIN_DATE, VALID_END_DATE)

      await expect(result.length).toEqual(7)
      await expect(result).toEqual(WEEK_DATA)
  })

})