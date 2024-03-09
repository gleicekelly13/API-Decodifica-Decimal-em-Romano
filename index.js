const express = require('express');
const app = express();

const { decimalParaRomano } = require('./servico');


app.get('/', (req, res) => {
    let numero = req.query.numero;
    
    if(numero <= 0) { //A validação de entrada(verificação de números negativos, foi transferida para a rota do Express)
        res.status(400).json({ 'Erro' : 'Números negativos não podem ser convertidos para algarismos romanos.'});
    }

    let numeroConvertido = decimalParaRomano(numero);
    res.json({resultado : numeroConvertido});
    
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});