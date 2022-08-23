const btnNumbers = document.querySelectorAll('[Number]')
const btnOperators = document.querySelectorAll('[Operator]')
const btnResult = document.querySelector('[Result]')


let temNumber
let numberOne

function clickNumber() {
    btnNumbers.forEach(eventClick => eventClick.addEventListener(
        'click', function () {
            temNumber = eventClick.textContent
            
            let display = document.getElementById('display').innerHTML
            temNumber = document.getElementById('display').innerHTML = display + temNumber

        }
    ))
}
clickNumber()

function clickOperator() {
    btnOperators.forEach(eventClick => eventClick.addEventListener(
        'click', function () {

            if (eventClick.textContent == '+') {
                numberOne = temNumber
                document.getElementById('display').innerHTML = ''
            }

        }
    ))
}
clickOperator()

function clickResult() {
    btnResult.addEventListener(
        'click', function () {
            console.log(btnResult.textContent)

            let result =  parseInt(temNumber) + parseInt(numberOne)
            document.getElementById('display').innerHTML = result
        }
    )
}
clickResult()


