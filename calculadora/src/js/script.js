const numbers = document.querySelectorAll('[Number]')
const operators = document.querySelectorAll('[operator]')


numbers.forEach(e => {
    e.addEventListener('click', function () {
        let valueNumber = e.value

        let display = document.getElementById('display').innerHTML
        document.getElementById('display').innerHTML = display + valueNumber
    })
})

operators.forEach(e => {
    e.addEventListener('click', function () {
        let valuerOperator = e.value

        let display = document.getElementById('display').innerHTML
        document.getElementById('display').innerHTML = display + valuerOperator

        if (valuerOperator === '+') {
            console.log('somar')
        }
    })
})