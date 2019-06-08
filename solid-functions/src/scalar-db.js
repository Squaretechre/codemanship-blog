const getScalar = (dbUrl, dbName, userName, password, table, column) => {
    return (id) => {
        // close over getScalar parameters and return closure to client
        // presenting a function that only takes an id

        // code to fetch scalar value using parameters and id goes here

        return 10
    }
}

module.exports = getScalar