import "../../../style.css"
import { Customer } from "./classes/Customer"

const customer: Customer = new Customer(
  "Max Mustermann",
  "max.mustermann@gmail.com",
  "Musterstraße 1",
  "10551",
  "Berlin"
)
console.log(customer)

const customerWithWrongData: Customer = new Customer(
  "Max Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann Mustermann",
  "max.muster@manngmailcom",
  "Musterstraße 1",
  "105511",
  "Berlin"
)

console.log(customerWithWrongData)
