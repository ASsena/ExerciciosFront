let contador = 0

const elementoHtml = document.getElementById("numero_usuario")
let numUsuario = "<p> Soma total dos números inseridos: "
do{
    let pedirNumero = parseInt(prompt("Digite um número"))
    contador += pedirNumero
}while(contador < 100)

numUsuario += `${contador}`
numUsuario += "</p>"
elementoHtml.innerHTML = numUsuario

