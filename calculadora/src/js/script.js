const btnNumbers = document.querySelectorAll('[Number]')
const btnOperators = document.querySelectorAll('[Operator]')
const btnResult = document.querySelector('[Result]')


let temNumber = 0
let numberOne

function clickNumber() {
    btnNumbers.forEach(eventClick => eventClick.addEventListener(
        'click', function () {
            temNumber = eventClick.textContent
            console.log(`Click Number ${temNumber}`)

            let display = document.getElementById('display').innerHTML
    
            document.getElementById('display').innerHTML = display + temNumber
        }
    ))
}
clickNumber()

function clickOperator() {
    btnOperators.forEach(eventClick => eventClick.addEventListener(
        'click', function () {

            if (eventClick.textContent == '+') {
                let display = document.getElementById('display').innerHTML

                numberOne = display
                temNumber = 0
                
                document.getElementById('display').innerHTML = display + ' + '
                
            }
            
        }
        ))
    }
    clickOperator()

    
    function clickResult() {
        btnResult.addEventListener(
            'click', function () {
                console.log(btnResult.textContent)
            
                let result =  parseInt(numberOne) + parseInt(temNumber)
                document.getElementById('display').innerHTML = result

                console.log(result)
            }
    )
}
clickResult()


