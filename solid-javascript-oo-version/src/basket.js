class Basket {
    constructor(customer, items) {
        this.customer = customer        
        this.items = items
    }
    
    add(item) {
        this.items.push(item)
    }

    checkout(payments) {
        return payments.pay(this.total(), this.customer.creditCard)
    }

    total() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
}

export default Basket