class PayPalPayments {
    pay(total, creditCard) {
        console.log('🌐  Beep, boop! Talking to PayPal...')
        console.log(`💳  Charging ${creditCard} for £${total}.`)
        return true
    }
}

export default PayPalPayments