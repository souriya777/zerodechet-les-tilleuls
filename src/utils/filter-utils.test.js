import { all, allId, filter } from './filter-utils'

describe(`all`, () => {

  it(`
    for: 
      myArray=['Roubaix', 'Wattrelos', 'Tourcoing']
      isMale=true
    returns :
      ['Tous', 'Roubaix', 'Wattrelos', 'Tourcoing']
  `, () => {
    const result = all(['Roubaix', 'Wattrelos', 'Tourcoing'], true)
    expect(result).toEqual(['Tous', 'Roubaix', 'Wattrelos', 'Tourcoing'])
  })

  it(`
    for: 
      myArray=['Roubaix', 'Wattrelos', 'Tourcoing']
    returns :
      ['Tous', 'Roubaix', 'Wattrelos', 'Tourcoing']
  `, () => {
    const result = all(['Roubaix', 'Wattrelos', 'Tourcoing'], true)
    expect(result).toEqual(['Tous', 'Roubaix', 'Wattrelos', 'Tourcoing'])
  })

  it(`
    for: 
      myArray=['Roubaix', 'Wattrelos', 'Tourcoing']
      isMale=false
    returns :
      ['Toutes', 'Roubaix', 'Wattrelos', 'Tourcoing']
  `, () => {
    const result = all(['Roubaix', 'Wattrelos', 'Tourcoing'], false)
    expect(result).toEqual(['Toutes', 'Roubaix', 'Wattrelos', 'Tourcoing'])
  })
  
})

describe(`all`, () => {

  it(`
    for: 
      myArray=[23, 34, 4]
    returns :
      [-1, 23, 34, 4]
  `, () => {
    const result = allId([23, 34, 4])
    expect(result).toEqual([-1, 23, 34, 4])
  })


  it(`
    1/ for: 
      myArray=[
        { a: 'une grande maison', b: 1 }, 
        { a: 'grand gamin', b: 2 },
        { a: 'Grande maisonnette?', b: 3 }
      ]
      field='a'
      keyword='grande maison'
    returns :
      [
        { a: 'une grande maison', b: 1 }, 
        { a: 'Grande maisonnette?', b: 3 }
      ]

    2/ for: 
      myArray not changed
      field='a'
      keyword='grand'
    returns :
      all values of myArray
      
    3/ for:
      myArray not changed
      field='b'
      keyword=1
    returns :
      [
        { a: 'une grande maison', b: 1 }, 
      ]
  `, () => {
    const myArray = [
      { a: 'une grande maison', b: 1 }, 
      { a: 'grand gamin', b: 2 },
      { a: 'Grande maisonnette?', b: 3 }
    ]
    const expected = [
      { a: 'une grande maison', b: 1 }, 
      { a: 'Grande maisonnette?', b: 3 }
    ]

    expect(filter(myArray, 'a', 'grande maison')).toEqual(expected)

    expect(filter(myArray, 'a', 'grand')).toEqual(myArray)

    expect(filter(myArray, 'b', 1)).toEqual(new Array(myArray[0]))
  })

  it(` test here if "special chars" are escape (ex. "à" => become "a")
    for: 
      myArray=[
        { a: 'aaa' },
        { a: 'Âmi Énergétique âpre à-coup île ïnoui entêté père poëme Ôoo où' }, 
        { a: 'bbb' }
      ]
      field=a
      keyword=<ANY VALUE>
    returns : 
      [
        { a: 'Âmi Énergétique âpre à-coup île ïnoui entêté père poëme Ôoo où' }, 
      ]
  `, () => {
    const myArray=[
      { a: 'aaa' },
      { a: 'Âmi Énergétique âpre à-coup île ïnoui entêté père poëme Ôoo où' }, 
      { a: 'bbb' }
    ]
    const expected = [
      { a: 'Âmi Énergétique âpre à-coup île ïnoui entêté père poëme Ôoo où' }, 
    ]

    expect(filter(myArray, 'a', 'ami')).toEqual(expected)
    expect(filter(myArray, 'a', 'ile')).toEqual(expected)
    expect(filter(myArray, 'a', 'inou')).toEqual(expected)
    expect(filter(myArray, 'a', 'tete')).toEqual(expected)
    expect(filter(myArray, 'a', 'apre')).toEqual(expected)
    expect(filter(myArray, 'a', 'PERE')).toEqual(expected)
    expect(filter(myArray, 'a', 'poeme')).toEqual(expected)
    expect(filter(myArray, 'a', 'ooo')).toEqual(expected)
    expect(filter(myArray, 'a', 'ou')).toEqual(expected)
    expect(filter(myArray, 'a', 'energetique')).toEqual(expected)
  })



})