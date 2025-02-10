const codigo = prompt("Coloque seu código");

function verificarCodigo(codigo){
    if(codigo.includes("let") || codigo.includes("const")){
        if(codigo.includes("while") || codigo.includes("for")){
            if(codigo.includes("if")){
                if(codigo.includes("function")){
                    console.log("Bom. Seu código atende a todos os requisitos.");
                    return;
                }else{
                    console.log("Regular.");
                    return;
                }
            }else{
                console.log("Regular.");
                return;
            }
        }else{
            console.log("Ruim.");
            return;
        }
    }else{
        console.log("Ruim.");
        return;
    }
}

verificarCodigo(codigo)

//código para teste 
// function soma(num){
//     return num + 1;
// }
// let teste = 1;
// while(teste < 10){
//     if(teste == 3){
//         soma(teste, 1);
//     }
// }
