const genero = prompt("Digite o gênero do filme. Opções: 1.Terror 2.Ficção Científica 3.Romance");
const ano = parseInt(prompt("Digite o ano do filme"));
const ator = prompt("Digite seu ator favorito");

const filmes = [["Ficção Científica","O Homem da Terra", 2007, "David Lee"],
                ["Ficção Científica","Interestelar", 2014, "Matthew"],
                ["Terror","Invocação do Mal", 2013, "Vera Farmiga"],
                ["Romance","(500) Dias Com Ela", 2009, "Joseph Gordon"]
            ];

if(isNaN(ano) || genero === "Terror" || genero === "Ficção Científica" || genero === "Romance"){
    console.log("Por favor, preencha o gênero e o ano corretamente")
    console.log(isNaN(genero), isNaN(ano))
}else{
    for(i=0; i < filmes.length; i++){
        if(filmes[i][0] == genero){
            if(filmes[i][2] == ano){
                console.log(`Filme sugerido: 
                    \nTítulo: ${filmes[i][1]} 
                    \nAno: ${filmes[i][2]} 
                    \nGênero: ${filmes[i][0]}
                    \nAtor: ${filmes[i][3]}`);
            }else{
                console.log("Nenhum filme encontrado");
            }
        }
    }    
}
