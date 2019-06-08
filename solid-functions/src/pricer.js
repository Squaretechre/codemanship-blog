const http = require("http")

function price(imdbId) {
    let rating = 0
    const apiKey = '1f56833c'

    rating = http.get(`http://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`, (response) => {
        let data = ''

        response.on('data', (chunk) => {
            data += chunk
        })

        response.on('end', () => {
            return JSON.parse(data).imdbRating
        })
    })

    let base_price = 3.95

    if (rating >= 8) {
        base_price += 1.0
    }
    if (rating < 4) {
        base_price -= 1.0
    }

    return base_price
}

module.exports = price