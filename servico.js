const { tabela } = require('./dados/tabela');

function decimalParaRomano(numero) {
    let resultado = '';

    for(let i = 0; i < tabela.length; i++) {
        while(numero >= tabela[i].decimal) {
            resultado += tabela[i].romano;
            numero -= tabela[i].decimal;
        }
    }

    return resultado;
}

exports.decimalParaRomano = decimalParaRomano;

//console.log(decimalParaRomano(2024));
//console.log(decimalParaRomano(-10));
console.log(decimalParaRomano(49));