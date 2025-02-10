const listaElemento = document.getElementById("lista1a20")

let texto = "<ul>"
for(let i = 1; i<=20;i++){
    texto += `<li>${i}</li>`
}

texto += "</ul>"
listaElemento.innerHTML = texto