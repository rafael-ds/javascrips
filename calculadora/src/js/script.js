const btnNumbers = document.querySelectorAll('[Number]')
const btnOperators = document.querySelectorAll('[Operator]')
const btnResult = document.querySelector('[Result]')


btnNumbers.forEach(number => number.addEventListener(
    'click', function () {
        console.log(number.value)
    }
))

btnOperators.forEach(operator => operator.addEventListener(
    'click', function () {
        console.log(operator.value)
    }
))