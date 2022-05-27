const adviceItemHtml = document.querySelector("#advice")
const buttonGenerate = document.querySelector("#buttonGenerate")

function adviceGenerate() {
    const random = Number((Math.random() * 224).toFixed(0))
    const url = `https://api.adviceslip.com/advice/${random}`
    fetch(url).then(reponse => reponse.json()).then(item => {
        adviceItemHtml.innerHTML = item.slip.advice
    })
}

buttonGenerate.addEventListener('click', adviceGenerate)