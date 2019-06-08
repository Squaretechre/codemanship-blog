import price from '../src/pricer'
import fetchRating from '../src/imdb-service'

describe('pricer', () => {
  it('calculates standard price when movie is average', () => {
    const movieId = 'tt0096754'
    const actualPrice = price(movieId, fetchRating)
    const standardPrice = 3.95
    expect(actualPrice).toEqual(standardPrice)
  })
})
