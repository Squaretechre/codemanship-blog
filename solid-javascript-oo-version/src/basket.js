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