import weightAPI from './weightAPI'
import { 
  UID,
  WEEK,
  MEMBERS_TOTAL,
  WEIGHT_RECYCLED,
  WEIGHT_NORECYCLED,
} from '../utils/common-test/common-data'
import { 
  WEEK_DATA
} from './__mocks__/weekData'
import PermissionDeniedException from '../utils/PermissionDeniedException'

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

describe(`addWeight`, () => {
  
  it(`if uid is different from UID, throw a PermissionDeniedException with error message : 
  'Vous n'avez pas la permission d'accéder à la base de données. Contactez-nous, et nous vous aiderons au mieux.'`, async () => {
      await expect(
        weightAPI.addWeight('UID_NOT_AUTHORIZED', MEMBERS_TOTAL, WEEK.MONDAY.toDate(), WEEK.TUESDAY.toDate(), WEIGHT_RECYCLED, WEIGHT_NORECYCLED)
      ).rejects.toEqual(
        new PermissionDeniedException(`Vous n'avez pas la permission d'accéder à la base de données. Contactez-nous, et nous vous aiderons au mieux.`)
      )
  })

  it(`
    FOR :
      uid = UID
      nbPers = 2
      startDate = MONDAY, 
      endDate = <same as startDate>
      recycled = WEIGHT_RECYCLED
      norecycled = WEIGHT_NORECYCLED
    WRITE in database without error
    AND return a valid DocumentReference`, async () => {
      const dbResp = await weightAPI.addWeight(UID, MEMBERS_TOTAL, WEEK.MONDAY.toDate(), WEEK.TUESDAY.toDate(), WEIGHT_RECYCLED, WEIGHT_NORECYCLED)
      expect(dbResp).toBeUndefined()
  })

})