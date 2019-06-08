import price from './pricer'
import fetchRating from './imdb-service'
import getScalar from './scalar-db'

const buttonSubmit = document.querySelector(".price-calculator__submit")
const fieldMovieId = document.querySelector(".price-calculator__movie-id")
const labelPrice = document.querySelector(".price-calculator__price")

const scalarDb = getScalar(
  'https://localhost:7979',
  'imdb_db',
  'admin',
  'moviephile123',
  'titles',
  'rating')

const formatPrice = (price) => `£${price}`

buttonSubmit.addEventListener('click', () => {
  const movieId = fieldMovieId.value
  const moviePrice = price(movieId, scalarDb)

  labelPrice.innerHTML = formatPrice(moviePrice)
})