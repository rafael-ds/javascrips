const btnNumbers = document.querySelectorAll('[Number]')
const btnOperators = document.querySelectorAll('[Operator]')
const btnResult = document.querySelector('[Result]')

const display = document.getElementById('display')

let temNumber
let numberOne

function clickNumber() {
    btnNumbers.forEach(eventClick => eventClick.addEventListener(
        'click', function () {

            console.log(eventClick.textContent)
            temNumber = parseInt(eventClick.textContent)

        }
    ))
}
clickNumber()

function clickOperator() {
    btnOperators.forEach(eventClick => eventClick.addEventListener(
        'click', function () {
            console.log(eventClick.textContent)

            if (eventClick.textContent == '+') {
                numberOne = temNumber
                temNumber = 0
            }

        }
    ))
}
clickOperator()


function clickResult() {
    btnResult.addEventListener(
        'click', function () {
            console.log(btnResult.textContent)

            console.log(temNumber + numberOne)
        }
    )
}
clickResult()


