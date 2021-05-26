const express = require('express');
const app = express();

app.use(express.json())

app.get('/soma/:valor1/:valor2', (req, res) => {
    return res.json({ result: parseFloat(req.params.valor1) + parseFloat(req.params.valor2) })
});
app.get('/subtracao/:valor1/:valor2', (req, res) => {
    return res.json({ result: parseFloat(req.params.valor1) - parseFloat(req.params.valor2) })
});
app.get('/multiplicacao/:valor1/:valor2', (req, res) => {
    return res.json({ result: parseFloat(req.params.valor1) * parseFloat(req.params.valor2) })
});
app.get('/divisao/:valor1/:valor2', (req, res) => {
    return res.json({ result: parseFloat(req.params.valor1) / parseFloat(req.params.valor2) })
});

app.use('/soma', (req, res) => {
    res.status(400).json({ error: { message: "invalid endpoint" } })
})
app.use('/subtracao', (req, res) => {
    res.status(400).json({ error: { message: "invalid endpoint" } })
})
app.use('/multiplicacao', (req, res) => {
    res.status(400).json({ error: { message: "invalid endpoint" } })
})
app.use('/divisao', (req, res) => {
    res.status(400).json({ error: { message: "invalid endpoint" } })
})
app.listen(3333, () => {
    console.log('rodando');
});