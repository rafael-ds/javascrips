const btnNumbers = document.querySelectorAll('[Number]')
const btnOperators = document.querySelectorAll('[Operator]')
const btnResult = document.querySelector('[Result]')


let tempNumber = 0
let numberOne

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

                    numberOne = display
                    tempNumber = 0

                    document.getElementById('display').innerHTML = sum + ' + '
                    break

                case '-':
                    let subtraction = document.getElementById('display').innerHTML

                    numberOne = display
                    tempNumber = 0

                    document.getElementById('display').innerHTML = subtraction + ' - '
                    break

                case 'x':
                    let multiplication = document.getElementById('display').innerHTML

                    numberOne = display
                    tempNumber = 0

                    document.getElementById('display').innerHTML = multiplication + ' x '
                    break

                case '/':
                    let division = document.getElementById('display').innerHTML

                    numberOne = display
                    tempNumber = 0

                    document.getElementById('display').innerHTML = division + ' / '
                    break

                case '%':
                    let rest = document.getElementById('display').innerHTML

                    numberOne = display
                    tempNumber = 0

                    document.getElementById('display').innerHTML = rest + ' % '
                    break


            }

        }
    ))
}
clickOperator()


function clickResult() {
    btnResult.addEventListener(
        'click', function () {
            console.log(btnResult.textContent)

            let result = parseInt(numberOne) + parseInt(tempNumber)
            document.getElementById('display').innerHTML = result

            console.log(result)
        }
    )
}
clickResult()


