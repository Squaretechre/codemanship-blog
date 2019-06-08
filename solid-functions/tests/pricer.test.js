import price from '../src/pricer'

describe('pricer', () => {
  it('calculates standard price when movie is average', () => {
    const imdbStub = () => 7.6

    const movieId = 'tt0096754'
    const actualPrice = price(movieId, imdbStub)
    const standardPrice = 3.95

    expect(actualPrice).toEqual(standardPrice)
  })
})
