const express = require('express');
const app = express();

const { decimalParaRomano } = require('./servico');


app.get('/', (req, res) => {
    let numero = req.query.numero;
    
    if(numero <= 0) { 
        res.status(400).json({ 'Erro' : 'Números negativos não podem ser convertidos para algarismos romanos.'});
    } else if (isNaN(numero)) {
        res.status(400).json({'Erro' : 'Requisição inválida!'});
    } else {
        let numeroConvertido = decimalParaRomano(numero);
        res.json({resultado : numeroConvertido});
    }

});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});
