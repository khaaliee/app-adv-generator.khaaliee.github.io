// API Advice https://api.adviceslip.com/advice

document.addEventListener("DOMContentLoaded", () => {
    generateAdvice();
})

let advanceID = document.querySelector("#adv-number");
let advanceText = document.querySelector("#adv-text");
let btn = document.querySelector("#btn-adv");

async function generateAdvice() {
    let resp = await fetch("https://api.adviceslip.com/advice");
    let data = await resp.json();
    advanceID.innerHTML = `#${data.slip.id}`;
    advanceText.innerHTML = `"${data.slip.advice}"`;
}

btn.addEventListener('click', generateAdvice);

