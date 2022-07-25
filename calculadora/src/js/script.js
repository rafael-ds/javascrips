const numbers = document.querySelectorAll('[Number]')
const operators = document.querySelectorAll('[operator]')


numbers.forEach(e => {
    e.addEventListener('click', function(){
        let valuer = e.value

        let display = document.getElementById('display').innerHTML
        document.getElementById('display').innerHTML = display + valuer
    })
})