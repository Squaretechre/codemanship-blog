
const price = (imdbId, fetchRating) => {
    let rating = 0;

    rating = fetchRating(imdbId)

    let basePrice = 3.95;

    if (rating >= 8) {
        basePrice += 1.0;
    }
    if (rating < 4) {
        basePrice -= 1.0;
    }

    return basePrice;
}

module.exports = price;