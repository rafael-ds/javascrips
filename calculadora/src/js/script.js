const btnNumbers = document.querySelectorAll('[Number]')
const btnOperators = document.querySelectorAll('[Operator]')
const btnResult = document.querySelector('[Result]')


let tempNumber = 0
let numberOne
let operator

function clickNumber() {

    btnNumbers.forEach(eventClick => eventClick.addEventListener(

        'click', function () {
            tempNumber = eventClick.textContent

            let display = document.getElementById('display').innerHTML
            document.getElementById('display').innerHTML = display + tempNumber
        }

    ))
}
clickNumber()

function clickOperator() {
    btnOperators.forEach(eventClick => eventClick.addEventListener(

        'click', function () {

            switch (eventClick.textContent) {

                case '+':
                    let sum = document.getElementById('display').innerHTML

                    numberOne = sum
                    tempNumber = 0
                    operator = eventClick.textContent

                    document.getElementById('display').innerHTML = sum + ' + '
                    break

                case '-':
                    let subtraction = document.getElementById('display').innerHTML

                    numberOne = subtraction
                    tempNumber = 0
                    operator = eventClick.textContent

                    document.getElementById('display').innerHTML = subtraction + ' - '
                    break

                case 'x':
                    let multiplication = document.getElementById('display').innerHTML

                    numberOne = multiplication
                    tempNumber = 0
                    operator = eventClick.textContent

                    document.getElementById('display').innerHTML = multiplication + ' x '
                    break

                case '/':
                    let division = document.getElementById('display').innerHTML

                    numberOne = division
                    tempNumber = 0
                    operator = eventClick.textContent

                    document.getElementById('display').innerHTML = division + ' / '
                    break

                case '%':
                    let rest = document.getElementById('display').innerHTML

                    numberOne = rest
                    tempNumber = 0
                    operator = eventClick.textContent

                    document.getElementById('display').innerHTML = rest + ' % '
                    break

                case 'c':
                    document.getElementById('display').innerHTML = ''
                    break

            }

        }
    ))
}
clickOperator()

function clickResult() {
    btnResult.addEventListener(
        'click', function () {

            switch (operator) {
                case '+':
                    let sumResult = parseInt(numberOne) + parseInt(tempNumber)
                    document.getElementById('display').innerHTML = sumResult
                    break

                case '-':
                    let subtractionResult = parseInt(numberOne) - parseInt(tempNumber)
                    document.getElementById('display').innerHTML = subtractionResult
                    break

                case 'x':
                    let multiplicationResult = parseInt(numberOne) * parseInt(tempNumber)
                    document.getElementById('display').innerHTML = multiplicationResult
                    break

                case '/':
                    let divisionResult = parseInt(numberOne) / parseInt(tempNumber)
                    document.getElementById('display').innerHTML = divisionResult
                    break

                case '%':
                    document.getElementById('display').innerHTML = restResult
                    console.log(restResult)
                    break

            }


        }
    )
}
clickResult()


