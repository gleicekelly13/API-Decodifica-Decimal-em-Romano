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

