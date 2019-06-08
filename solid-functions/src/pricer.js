
const price = (imdbId, fetchRating) => {
    let rating = 0;

    rating = fetchRating(imdbId)

    let base_price = 3.95;

    if (rating >= 8) {
        base_price += 1.0;
    }
    if (rating < 4) {
        base_price -= 1.0;
    }

    return base_price;
}

module.exports = price;