let numeroDaSorte = document.querySelector(".numeroDaSorte")
let button = document.querySelector(".button")
let numeroSorteado = []


for(i = 0; i <= 999999; i++){
    numeroSorteado.push(i)
}

button.addEventListener('click', () => {
    numeroDaSorte.innerHTML = "Seu número da sorte é: " + numeroSorteado[Math.floor(Math.random() * numeroSorteado.length)]
})