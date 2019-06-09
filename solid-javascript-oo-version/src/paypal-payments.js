class PayPalPayments {
    constructor(paymentSuccess) {
        this.paymentSuccess = paymentSuccess
    }

    pay(total, creditCard) {
        console.log('🌐  Beep, boop! Talking to PayPal...')
        console.log(`💳  Charging ${creditCard} for £${total}.`)
        return true
    }
}

export default PayPalPayments