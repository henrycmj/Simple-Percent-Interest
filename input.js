
const interest = () => {
    const amount = document.getElementById("amount").value
    const percent = document.getElementById("percent").value
    let divider = 100

    let answer = percent / divider * amount;
    const ans = document.getElementById("ans").innerHTML =+ answer;
}