import Basket from './basket'
import PayPalPayments from './paypal-payments'

const customer = {
  creditCard: '1234'
}

const items = []

const basket = new Basket(customer, items) 

const buttonAddItem = document.querySelector(".basket__add-item")
const buttonPay = document.querySelector(".basket__pay")

buttonAddItem.addEventListener('click', () => {
  basket.add({price: 10.0, quantity: 10})
  console.log('🍌 Item added!')
})

buttonPay.addEventListener('click', () => {
  basket.checkout(new PayPalPayments())
})