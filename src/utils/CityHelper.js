export const CITY = {
  keyList: [
    'ascq',
    'bondues', 
    'croix', 
    'hem', 
    'faches', 
    'lambersart', 
    'leers', 
    'marcq', 
    'roubaix', 
    'tourcoing', 
    'wasquehal', 
    'wattignies'
  ],
  labelList: [
    `Villeneuve d'Ascq`,
    'Bondues', 
    'Croix', 
    'Hem', 
    'Fâches Thumesnil', 
    'Lambersart', 
    'Leers', 
    'Marcq en Baroeul', 
    'Roubaix', 
    'Tourcoing', 
    'Wasquehal', 
    'Wattignies'
  ],
  avgList: [
    400,
    250, 
    222, 
    309, 
    299, 
    189, 
    234, 
    224, 
    366, 
    345, 
    342, 
    333,
  ]
}

export const findCityAvg = city => {
  let result = null
  if (city) {
    const idx = CITY.keyList.indexOf(city)
    result = CITY.avgList[idx]
  }

  return result
}