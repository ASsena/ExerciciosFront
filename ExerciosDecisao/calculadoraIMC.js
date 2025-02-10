function verificarImc(){

    let idade = parseInt(prompt("Digite a sua idade: "))
    let peso = parseInt(prompt("Digite o seu peso: "))
    let altura = parseInt(prompt("Digite a sua altura em metros: "))

    if(isNaN(idade) || isNaN(peso) || isNaN(altura)){
        console.log("Preencha os campos corretamente");
        return;
    }

    return calcularImc(idade, peso, altura)
}

function calcularImc(idade, peso, altura){
    let imc =  peso / altura**2;

    if(idade > 65){
        imc--
    }else if(idade < 18){
        if(imc == 18.5 || imc == 25 || imc == 35 || imc == 40){
            imc--
        }
    }

    if(imc < 18.5){
        return `Abaixo do peso. IMC: ${imc}`;
    }
    if(18.5 >= imc < 25){
        return `Peso normal. IMC: ${imc}`;
    }
    if(25 >= imc < 30){
        return `Sobrepeso. IMC: ${imc}`;
    }
    if(30 >= imc < 35){
        return `Obesidade grau I. IMC: ${imc}`;
    }
    if(35 >= imc < 40){
        return `Obesidade grau II. IMC: ${imc}`;
    }
    if(imc > 40){
        return `Obeidade grau III. IMC: ${imc}`;
    }

}

verificarImc()