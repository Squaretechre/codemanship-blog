import http from 'http'

const apiKey = '1f56833c'

const fetchRating = (imdbId) => {
    return http.get(`http://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`, (response) => {
        let data = ''

        response.on('data', (chunk) => {
            data += chunk
        })

        response.on('end', () => {
            return JSON.parse(data).imdbRating
        })
    })
}

module.exports = fetchRating