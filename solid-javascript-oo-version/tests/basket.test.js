import Basket from '../src/basket'

describe('basket', () => {
  it('processes payment on checkout', () => {
    const basket = new Basket({creditCard: '1234'}, [])

    basket.add({price: 10.0, quantity: 10})

    expect(basket.checkout(new PaymentsStub(true))).toBe(true)
  })
})

class PaymentsStub {
  constructor(paymentSuccess) {
    this.paymentSuccess = paymentSuccess
  }

  pay(total, creditCard) {
    console.log('🤖  Beep, boop! I\'m a test double!')
    console.log(`💳  Faking charging ${creditCard} for £${total}.`)
    return this.paymentSuccess
  } 
}