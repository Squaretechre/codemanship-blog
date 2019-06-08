# S.O.L.I.D Functions #

Example code from Codemanship's blog of the same title which can be found [here](http://codemanship.co.uk/parlezuml/blog/?postid=1578).

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