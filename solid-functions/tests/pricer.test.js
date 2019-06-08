import price from '../src/pricer'

const movieId = 'tt0096754'

describe('pricer', () => {
  it('calculates basic price when movie is below average', () => {
    const imdbStub = () => 1

    const actualPrice = price(movieId, imdbStub)
    const standardPrice = 2.95

    expect(actualPrice).toEqual(standardPrice)
  })

  it('calculates standard price when movie is average', () => {
    const imdbStub = () => 7.6

    const actualPrice = price(movieId, imdbStub)
    const standardPrice = 3.95

    expect(actualPrice).toEqual(standardPrice)
  })

  it('calculates premium price when movie is above average', () => {
    const imdbStub = () => 10

    const actualPrice = price(movieId, imdbStub)
    const standardPrice = 4.95

    expect(actualPrice).toEqual(standardPrice)
  })
})
