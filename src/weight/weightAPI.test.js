import weightAPI from './weightAPI'
import { 
  UID,
  WEEK,
  MEMBERS_TOTAL,
  WEIGHT_RECYCLED,
  WEIGHT_NORECYCLED,
  DOC_WEIGHT_REF,
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

// describe(`addWeight`, () => {

//   it(`
//     FOR :
//       uid = UID
//       nbPers = 2
//       startDate = MONDAY, 
//       endDate = <same as startDate>
//       recycled = WEIGHT_RECYCLED
//       norecycled = WEIGHT_NORECYCLED
//     WRITE in database without error
//     AND return a valid DocumentReference`, async () => {
//       const docRef = await weightAPI.addWeight(UID, MEMBERS_TOTAL, WEEK.MONDAY.toDate(), WEEK.MONDAY.toDate(), WEIGHT_RECYCLED, WEIGHT_NORECYCLED)

//       expect(docRef).toEqual(DOC_WEIGHT_REF)
//   })

// })