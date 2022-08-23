const btnNumbers = document.querySelectorAll('[Number]')
const btnOperators = document.querySelectorAll('[Operator]')
const btnResult = document.querySelector('[Result]')


let temNumber
let numberOne

function clickNumber() {
    btnNumbers.forEach(eventClick => eventClick.addEventListener(
        'click', function () {
            let display = document.getElementById('display').innerHTML

            temNumber = eventClick.textContent          

            document.getElementById('display').innerHTML = display + temNumber

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


