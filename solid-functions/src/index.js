import price from './pricer'

const buttonSubmit = document.querySelector(".price-calculator__submit")
const fieldMovieId = document.querySelector(".price-calculator__movie-id")
const labelPrice = document.querySelector(".price-calculator__price")

const formatPrice = (price) => `£${price}`

buttonSubmit.addEventListener('click', () => {
  const movieId = fieldMovieId.value
  const moviePrice = price(movieId)

  labelPrice.innerHTML = formatPrice(moviePrice)
})