import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { IMC, notANumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const heigth = inputHeight.value

  const showAlertError = notANumber(weight) || notANumber(heigth)

  if(showAlertError) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = IMC(weight, heigth)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}