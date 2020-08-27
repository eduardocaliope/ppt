//Variáveis do "Você" e "Klebinho Bot"

var jogadorEscolha = 0;
var computadorEscolha = 0;


var resultadorodada;
var jogadorPontuação = 0;
var computadorPontuação = 0;
//Começa o jogo com "Você" escolhendo entre Pedra, Papel ou Tesoura?!
//Sendo: 
//1 - Pedra
//2 - Papel
//3 - Tesoura
function jogar(escolha) {
    jogadorEscolha = escolha;
    
    //Após "Você" escolher, "Klebinho Bot" é sorteado e joga
    computadorEscolha = Math.floor((Math.random () * (3 - 1 + 1))) + 1;
    
    //Comparando "Você" com "Klebinho Bot"
    if((jogadorEscolha == 1) && (computadorEscolha == 1)) {
       resultadorodada = "Xii, Você e Klebinho empataram nessa rodada!";
    }
    else if((jogadorEscolha == 2) && (computadorEscolha == 2)) {
       resultadorodada = "Xii, Você e Klebinho empataram nessa rodada!";
    }
    else if((jogadorEscolha == 3) && (computadorEscolha == 3)) {
       resultadorodada = "Xii, Você e Klebinho empataram nessa rodada!";
    }
    else if((jogadorEscolha == 1) && (computadorEscolha == 3)) {
       resultadorodada = "Você ganhou a rodada!";
       jogadorPontuação++;

    }
    else if((jogadorEscolha == 2) && (computadorEscolha == 1)) {
       resultadorodada = "Você ganhou a rodada!";
       jogadorPontuação++;

    }
    else if((jogadorEscolha == 3) && (computadorEscolha == 2)) {
       resultadorodada = "Você ganhou a rodada!";
       jogadorPontuação++;

    }
     else if((jogadorEscolha == 1) && (computadorEscolha == 2)) {
       resultadorodada = "Klebinho ganhou a rodada!";
       computadorPontuação++;

    }
    else if((jogadorEscolha == 2) && (computadorEscolha == 3)) {
       resultadorodada = "Klebinho ganhou a rodada!";
       computadorPontuação++;

    }
    else if((jogadorEscolha == 3) && (computadorEscolha == 1)) {
       resultadorodada = "Klebinho ganhou a rodada!";
       computadorPontuação++;

    }
        
    document.getElementById("jogador-escolha-1").classList.remove('selecionado')
    document.getElementById("jogador-escolha-2").classList.remove('selecionado') 
    document.getElementById("jogador-escolha-3").classList.remove('selecionado') 

    document.getElementById("computador-escolha-1").classList.remove('selecionado') 
    document.getElementById("computador-escolha-2").classList.remove('selecionado') 
    document.getElementById("computador-escolha-3").classList.remove('selecionado') 

    
    document.getElementById("computador-escolha-" + computadorEscolha).classList.remove('selecionado')

    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado')
    
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado')
    
    document.getElementById('mensagens').innerHTML = resultadorodada
    document.getElementById('jogador-pontos').innerHTML = jogadorPontuação
    document.getElementById('computador-pontos').innerHTML = computadorPontuação

}