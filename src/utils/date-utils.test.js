import firebase from 'firebase/app'
import 'firebase/firestore'

import { 
  unix,
  firebaseTimestamp,
  toDate,
  getThisWeekDate,
  getThisMonthDate,
  getThisTrimesterDate,
  getWeekOfMonth,
  getMonthOfTrimester,
  pastDays,
  dateDiff,
  oneDayLater,
  toStandardFormat,
  lastYear,
  isDefaultStartDate,
} from './date-utils'
import { WEEK, MONTH, TRIMESTER, DAY_WITH_HOUR } from './common-test/common-data'

const moment = require('moment')

describe(`isDefaultStartDate`, () => {
  it(`for now=1st janv 1970 returns true`, () => {
      const myDate = moment('1970-01-01').toDate()
      expect(isDefaultStartDate(myDate)).toBeTruthy()
  })

  it(`for now=6 june 2019 returns false`, () => {
      const myDate = moment('2019-06-06').toDate()
      expect(isDefaultStartDate(myDate)).toBeFalsy()
  })
})

describe(`unix`, () => {
  it(`for now: Wednesday May 01, 2019 08:50:10 (am) 
    returns: 1556661600`, () => {
      const now = moment([2019, 4, 1, 8, 50, 10, 125]).toDate()
      expect(unix(now)).toEqual(1556661600)
  })
})

describe(`firebaseTimestamp`, () => {
  it('generate Firebase Timestamp {"nanoseconds": 0, "seconds": 1556661600} From Date 2019-05-01', () => {
    const date = moment('2019-05-01').toDate()
    const timestamp = firebaseTimestamp(date)
    expect(timestamp).toEqual({"nanoseconds": 0, "seconds": 1556661600})
  })
})

describe(`toDate`, () => {
  it('from Firebase Timestamp {"nanoseconds": 0, "seconds": 1556661600} returns Date 2019-05-01', () => {
    const expectedDate = moment('2019-05-01').toDate()
    const firebaseTimestamp = new firebase.firestore.Timestamp(1556661600, 0)
    const myDate = toDate(firebaseTimestamp)
    expect(myDate).toEqual(expectedDate)
  })
})

describe(`getThisWeekDate`, () => {

  it(`for now = undefined or null, returns null`, () => 
  {
    const expectedNull = getThisWeekDate(null)
    const expectedNull2 = getThisWeekDate(undefined)
    const expectedNull3 = getThisWeekDate()

    expect(expectedNull).toEqual(undefined)
    expect(expectedNull2).toEqual(undefined)
    expect(expectedNull3).toEqual(undefined)
  })
  
  it(`for now = SATURDAY, returns 
    {
      begin: MONDAY
      end: SUNDAY
    }`, () => {
    const mNow = WEEK.SATURDAY
    const dates = getThisWeekDate(mNow.toDate())

    expect(dates).toEqual({
      begin: WEEK.MONDAY.toDate(),
      end: WEEK.SUNDAY.toDate(),
    })
  })
  
  it(`for now = SUNDAY, returns 
    {
      begin: MONDAY
      end: NEXT_MONDAY
    }`, () => {
    const mNow = WEEK.SUNDAY
    const dates = getThisWeekDate(mNow.toDate())

    expect(dates).toEqual({
      begin: WEEK.MONDAY.toDate(),
      end: WEEK.NEXT_MONDAY.toDate(),
    })
  })

  it(`for now = MONDAY, returns 
    {
      begin: MONDAY
      end: TUESDAY
    }`, () => {
    const mNow = WEEK.MONDAY
    const dates = getThisWeekDate(mNow.toDate())

    expect(dates).toEqual({
      begin: WEEK.MONDAY.toDate(),
      end: WEEK.TUESDAY.toDate(),
    })
  })

  it(`for now = MONTH.DAY_5, returns 
    {
      begin: MONTH.DAY_1
      end: MONTH.DAY_6
    }`, () => {
    const mNow = MONTH.DAY_5
    const dates = getThisWeekDate(mNow.toDate())

    expect(dates).toEqual({
      begin: MONTH.DAY_1.toDate(),
      end: MONTH.DAY_6.toDate(),
    })
  })

  it(`for now = MONTH.DAY_7, returns 
    {
      begin: MONTH.DAY_6
      end: MONTH.DAY_8
    }`, () => {
    const mNow = MONTH.DAY_7
    const dates = getThisWeekDate(mNow.toDate())

    expect(dates).toEqual({
      begin: MONTH.DAY_6.toDate(),
      end: MONTH.DAY_8.toDate(),
    })
  })

  it(`for now = JUN_DAY_5_00H44, returns 
    {
      begin: JUN_DAY_3_00H00
      end: JUN_DAY_6_00H00
    }`, () => {
    const mNow = DAY_WITH_HOUR.JUN_DAY_5_00H44
    const dates = getThisWeekDate(mNow.toDate())

    expect(dates).toEqual({
      begin: DAY_WITH_HOUR.JUN_DAY_3_00H00.toDate(),
      end: DAY_WITH_HOUR.JUN_DAY_6_00H00.toDate(),
    })
  })

})

describe(`getThisMonthDate`, () => {
  
  it(`for now = DAY_23, returns 
    {
      begin: DAY_1
      end: DAY_24
    }`, () => {
    const mNow = MONTH.DAY_23
    const dates = getThisMonthDate(mNow.toDate())

    expect(dates).toEqual({
      begin: MONTH.DAY_1.toDate(),
      end: MONTH.DAY_24.toDate(),
    })
  })
  
  it(`for now = DAY_1, returns 
    {
      begin: DAY_1
      end: DAY_2
    }`, () => {
    const mNow = MONTH.DAY_1
    const dates = getThisMonthDate(mNow.toDate())

    expect(dates).toEqual({
      begin: MONTH.DAY_1.toDate(),
      end: MONTH.DAY_2.toDate(),
    })
  })
  
  it(`for now = DAY_31, returns 
    {
      begin: DAY_1
      end: NEXT_DAY_1
    }`, () => {
    const mNow = MONTH.DAY_31
    const dates = getThisMonthDate(mNow.toDate())

    expect(dates).toEqual({
      begin: MONTH.DAY_1.toDate(),
      end: MONTH.NEXT_DAY_1.toDate(),
    })
  })
  
})

describe(`getThisTrimesterDate`, () => {
  
  it(`for now = MAR_DAY_28, returns 
    {
      begin: JAN_DAY_1
      end: MAR_DAY_29
    }`, () => {
    const mNow = TRIMESTER.MAR_DAY_28
    const dates = getThisTrimesterDate(mNow.toDate())

    expect(dates).toEqual({
      begin: TRIMESTER.JAN_DAY_1.toDate(),
      end: TRIMESTER.MAR_DAY_29.toDate(),
    })
  })
  
  it(`for now = APR_DAY_8, returns 
    {
      begin: FEV_DAY_1
      end: APR_DAY_9
    }`, () => {
    const mNow = TRIMESTER.APR_DAY_8
    const dates = getThisTrimesterDate(mNow.toDate())

    expect(dates).toEqual({
      begin: TRIMESTER.FEV_DAY_1.toDate(),
      end: TRIMESTER.APR_DAY_9.toDate(),
    })
  })
  
  it(`for now = FEV_DAY_14, returns 
    {
      begin: LAST_DEC_1 (last year)
      end: FEV_DAY_15
    }`, () => {
    const mNow = TRIMESTER.FEV_DAY_14
    const dates = getThisTrimesterDate(mNow.toDate())

    expect(dates).toEqual({
      begin: TRIMESTER.LAST_DEC_1.toDate(),
      end: TRIMESTER.FEV_DAY_15.toDate(),
    })
  })
  
})

describe(`getWeekOfMonth`, () => {
  
  it(`for date = DAY_1, returns : 1`, () => {
    const result = getWeekOfMonth(MONTH.DAY_1.toDate())
    expect(result).toEqual(1)
  })
  
  it(`for date = DAY_5, returns : 1`, () => {
    const result = getWeekOfMonth(MONTH.DAY_5.toDate())
    expect(result).toEqual(1)
  })
  
  it(`for date = DAY_7, returns : 2`, () => {
    const result = getWeekOfMonth(MONTH.DAY_7.toDate())
    expect(result).toEqual(2)
  })
  
  it(`for date = DAY_8, returns : 2`, () => {
    const result = getWeekOfMonth(MONTH.DAY_8.toDate())
    expect(result).toEqual(2)
  })
  
  it(`for date = DAY_14, returns : 3`, () => {
    const result = getWeekOfMonth(MONTH.DAY_14.toDate())
    expect(result).toEqual(3)
  })
  
  it(`for date = DAY_15, returns : 3`, () => {
    const result = getWeekOfMonth(MONTH.DAY_15.toDate())
    expect(result).toEqual(3)
  })
  
  it(`for date = DAY_23, returns : 4`, () => {
    const result = getWeekOfMonth(MONTH.DAY_23.toDate())
    expect(result).toEqual(4)
  })
  
  it(`for date = DAY_31, returns : 5`, () => {
    const result = getWeekOfMonth(MONTH.DAY_31.toDate())
    expect(result).toEqual(5)
  })
})

describe(`getMonthOfTrimester`, () => {
  
  it(`for date = JAN_DAY_1, returns : 1`, () => {
    const result = getMonthOfTrimester(TRIMESTER.JAN_DAY_1.toDate())
    expect(result).toEqual(1)
  })
  
  it(`for date = APR_DAY_8, returns : 3`, () => {
    const result = getMonthOfTrimester(TRIMESTER.APR_DAY_8.toDate())
    expect(result).toEqual(4)
  })
  
  it(`for date = LAST_DEC_1, returns : 11`, () => {
    const result = getMonthOfTrimester(TRIMESTER.LAST_DEC_1.toDate())
    expect(result).toEqual(12)
  })

})

describe(`pastDays`, () => {
  
  it(`return a list of 14 Date, for
    howMany = 14
    today = FEV_DAY_14
  `, () => {
    const thisDay = TRIMESTER.FEV_DAY_14
    const howMany = 2
    const dayList = pastDays(howMany, thisDay.toDate())
    expect(dayList.length).toEqual(howMany)
    expect(dayList[0]).toEqual(TRIMESTER.FEV_DAY_12.toDate())
    expect(dayList[1]).toEqual(TRIMESTER.FEV_DAY_13.toDate())
  })

})

describe(`dateDiff`, () => {
  
  it(`return 2, for
    begin = FEV_DAY_12
    end = FEV_DAY_14
  `, () => {
    const diff = dateDiff(TRIMESTER.FEV_DAY_12.toDate(), TRIMESTER.FEV_DAY_14.toDate())
    expect(diff).toEqual(2)
  })
  
  it(`return 0, for begin and end dates are equals
  `, () => {
    const sameDate = TRIMESTER.FEV_DAY_12.toDate()
    const diff = dateDiff(sameDate, sameDate)
    expect(diff).toEqual(0)
  })
})

describe(`oneDayLater`, () => {
  
  it(`return JAN_DAY_2, for date = JAN_DAY_1`, () => {
    const newDate = oneDayLater(TRIMESTER.JAN_DAY_1.toDate())
    expect(newDate).toEqual(TRIMESTER.JAN_DAY_2.toDate())
  })

  it(`return FEV_DAY_1, for date = JAN_DAY_31`, () => {
    const newDate = oneDayLater(TRIMESTER.JAN_DAY_31.toDate())
    expect(newDate).toEqual(TRIMESTER.FEV_DAY_1.toDate())
  })

})

describe(`toStandardFormat`, () => {

  it(`return 2019-01-01, for date = JAN_DAY_1`, () => {
    const toDisplay = toStandardFormat(TRIMESTER.JAN_DAY_1.toDate())
    expect(toDisplay).toEqual('2019-01-01')
  })
  
})

describe(`lastYear`, () => {

  it(`return LAST_JAN_DAY_1, for date = JAN_DAY_1`, () => {
    const myDate = lastYear(TRIMESTER.JAN_DAY_1.toDate())
    expect(myDate).toEqual(TRIMESTER.LAST_JAN_DAY_1.toDate())
  })
  
})