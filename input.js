const inputs = document.querySelector('.input-area');

const amount = document.querySelector('#amount');
const percent = document.querySelector('#percent');

inputs.addEventListener('submit', (e) =>{
    e.preventDefault();
    let divider = 100;
    const calc = percent.value / divider * amount.value ;
    const ans = document.getElementById("ans").innerHTML =+ calc;    
})