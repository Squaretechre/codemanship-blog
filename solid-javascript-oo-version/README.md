# S.O.L.I.D JavaScript – OO Version #

Example code from Codemanship's blog of the same title which can be found [here](https://codemanship.wordpress.com/2019/03/10/s-o-l-i-d-javascript-oo-version/). Notes adapted from the blog.

Codemanship - [@codemanship](https://twitter.com/codemanship)

Jason Gorman - [@jasongorman](https://twitter.com/jasongorman)

## Open-Closed Principle ##

The initial design violates the Open-Closed Principle:

```
    class Basket {
        constructor(customer, items) {
            this.customer = customer        
            this.items = items
        }
        
        add(item) {
            this.items.push(item)
        }

        checkout() {
            const payments = new PayPalPayments();
            return payments.pay(this.total(), customer.creditCard)
        }

        total() {
            return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        }
    }

    export default Basket
```

What happens if we want to change the way we process payments? Maybe we don’t want to use PayPal any more, for example. Or what if we don’t want to use a real payment processor in a unit test? In this design, we’d have to change the Basket class. That breaks the Open-Closed Principle of SOLID (classes should be open to extension, but closed for modification).

Refactor by inverting the dependency and injecting the payment processing strategy:

```
    class Basket {
        constructor(customer, items) {
            this.customer = customer        
            this.items = items
        }
        
        add(item) {
            this.items.push(item)
        }

        checkout(payments) {
            return payments.pay(this.total(), customer.creditCard)
        }

        total() {
            return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        }
    }

    export default Basket
```

Payment can now be substitued for another strategy or test double.

## Single Responsibility Principle ##

Classes should have a Single Responsibility. The same’s true of functions, modules, microservices and any other discrete unit of executable code.

## Interface Segregation Principle ##

Classes should present client-specific interfaces. That is, interfaces should only include the methods a client uses. Also modules shouldn’t reference implementations they’re not using.