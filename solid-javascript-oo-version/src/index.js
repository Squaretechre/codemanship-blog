import price from './pricer'
import fetchRating from './imdb-service'
import getScalar from './scalar-db'

const scalarDb = getScalar(
  'https://localhost:7979',
  'imdb_db',
  'admin',
  'moviephile123',
  'titles',
  'rating')
  
const formatPrice = (price) => `£${price}`

const buildPricer = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pricer = urlParams.get('pricer');  
  return pricer === 'imdb'
  ? (id) => price(id, fetchRating)
  : (id) => price(id, scalarDb)
}

const priceForMovieWithId = buildPricer()

const buttonSubmit = document.querySelector(".price-calculator__submit")
const fieldMovieId = document.querySelector(".price-calculator__movie-id")
const labelPrice = document.querySelector(".price-calculator__price")

buttonSubmit.addEventListener('click', () => {
  const movieId = fieldMovieId.value
  const moviePrice = priceForMovieWithId(movieId)

  labelPrice.innerHTML = formatPrice(moviePrice)
})