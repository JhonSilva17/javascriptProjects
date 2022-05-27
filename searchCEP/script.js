const cepInput = document.querySelector('#cep')
const logInput = document.querySelector('#log')
const bairroInput = document.querySelector('#bairro')
const localInput = document.querySelector('#local')
const ufpInput = document.querySelector('#uf')

function checkCEP(event) {
    event.preventDefault()
    const cepFormat = cep.value.replace("-", "")
    console.log(cepFormat)

    const url = `http://viacep.com.br/ws/${cepFormat}/json/`
    fetch(url)
        .then(response => response.json()
        .then(data => {
            logInput.value = data.logradouro
            bairroInput.value = data.bairro
            localInput.value = data.localidade
            ufpInput.value = data.uf
        }) )
        .catch()
       
}

const btn = document.querySelector('#btnCheck')
btn.addEventListener('click', checkCEP)