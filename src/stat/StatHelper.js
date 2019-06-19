export const PERIOD = {
  WEEK: 'week',
  MONTH: 'month',
  TRIMESTER: 'trimester',
  SEMESTER: 'semester',
}

export const PERIOD_LABEL = {
  [PERIOD.WEEK]: 'Cette semaine', 
  [PERIOD.MONTH]: 'Ce mois',
  [PERIOD.TRIMESTER]: 'Ce trimestre',
  [PERIOD.SEMESTER]: 'Ce semestre',
}
export const DEFAUT_PERIOD = PERIOD.WEEK

export const DAYS_SHORT = 
  ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM']
export const MONTH_SHORT = 'SEM'
export const TRIMESTER_SHORT = 
  ['JANV', 'FEV', 'MAR', 'AVR', 'MAI', 'JUI', 'JUI', 'AOU', 'SEP', 'OCT', 'NOV', 'DEC']



export const avg = (recycled, norecycled) => {
  let result = 0
  result += recycled ? Number.parseFloat(recycled) : 0
  result += norecycled ? Number.parseFloat(norecycled) : 0
  return result / 2
}

export const avgHome = (recycled, norecycled, nbPers, nbDays) => {
  if (nbDays === 0 || nbPers === 0) {
    return {
      recycled: recycled, 
      norecycled: norecycled,
    }
  }

  const avgRecycled = recycled / nbDays / nbPers
  const avgNorecycled = norecycled / nbDays / nbPers

  return {
    recycled: avgRecycled, 
    norecycled: avgNorecycled,
  }
}

export const convertGoalToAvg = (goal, avg) => 
  Math.abs(avg - Math.floor(avg * goal / 100))

export const convertAvgToGoal = (avgStat, cityAvg) => 
  Math.floor(avgStat / cityAvg * 100)