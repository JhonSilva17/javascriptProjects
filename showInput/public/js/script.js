const checkButton = document.querySelector('#iconCheck') // Botão
const output = document.querySelector(".output span") // Saída da senha

let iconOn = 'icon-eye' // Classe para o ícone de 'mostrar senha'
let iconOff = 'icon-eye-off' // Classe para o ícone de 'esconder senha'
const icon = document.querySelector("#icon i") // ícone do botão
const inputPass = document.querySelector("#pass") // Input onde será digitada a senha

// Só vai ser ativada quando eu clicar no ícone
function checkbox() {
    if (checkButton.checked) {
        output.innerHTML = inputPass.value

        icon.classList.remove(iconOn)
        icon.classList.add(iconOff)
    } else {
        output.innerHTML = ''

        icon.classList.remove(iconOff)
        icon.classList.add(iconOn)
    }
}

checkButton.addEventListener('click', checkbox)