//Desafio DIO - Calculadora de Partidas Rankeadas
function calculadoraNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    let nivel = ""

    if (vitorias < 10) {
        nivel = "ferro"
    }
    else if (vitorias = 11 && vitorias <=20 ){
        nivel = "Bronze"
    }
    else if (vitorias = 21 && vitorias <=50 ){
        nivel = "Prata"
    }
    else if (vitorias = 51 && vitorias <=80 ){
        nivel = "Ouro"
    }
    else if (vitorias = 81 && vitorias <=90 ){
        nivel = "Diamante"
    }
    else if (vitorias = 91 && vitorias <=100 ){
        nivel = "Bronze"
    }
    else if (vitorias >= 101){
        nivel = "Imortal"
    }

    return "O heroi tem o saldo de " + saldoVitorias + " e está no nivel de " + nivel
}

let resultado = calculadoraNivel(80,18)
console.log(resultado)