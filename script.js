// Variáveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  },
}

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const heigth = inputHeight.value

  const result = IMC(weight, heigth)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}


function IMC(weight, heigth) {
  return (weight / ((heigth / 100) ** 2)).toFixed(2)
}