# S.O.L.I.D Functions #

Example code from Codemanship's blog of the same title which can be found [here](http://codemanship.co.uk/parlezuml/blog/?postid=1578). Notes adapted from the blog.

Codemanship - [@codemanship](https://twitter.com/codemanship)

Jason Gorman - [@jasongorman](https://twitter.com/jasongorman)

## Simple Design ##

1. It has to work.
2. It must be easy to understand
3. It should be low in duplication
4. It should be made from simple parts

## S.O.L.I.D ##

### Single Responsibility ###

Refactor fetching the rating into its own function which results in increased composability.

### Swappable Dependencies (Open-Closed + Dependency Inversion + Liskov Substitution) ###

Refactor the design to inject the extracted dependency as a function parameter, making it composable from the outside (e.g, from the test code).

- High-level functions should not depend directly on low-level functions
- We should be able to substitute a function with another implementation of that function (e.g., a function that calls a web service with a stub implementation)
- Can we add or replace functions without modifying existing functions? 

### Client-Specific Interfaces ###

The intent of the Interface Segregation Principle is that modules shouldn't depend on things they're not using.

- No unused imports
- The functional, dynamic equivalent of the ISP might be "Modules shouldn't reference things they don't use."

### Tell, Don't Ask ###

Our aim is to have our modules and our functions know as little about each other as possible. They should present the smallest surface area through which clients interact with them. Function parameters can be thought of as setters. Every extra parameter creates an extra reason why the client might break.

- Leverage closures to minimize the surface area exposed to clients
- Construct dependencies outside of the pricer, makes database / api call swappable

```
    // function that gets a movie rating from a database
    const getScalar = (dbUrl, dbName, userName, password, table, column) => {
        return (id) => {
            // close over getScalar parameters and return closure to client
            // presenting a function that only takes an id

            // code to fetch scalar value using parameters and id goes here

            return value;
        }
    }

    // function that gets a movie rating from an api
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
```