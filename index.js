var express = require('express');
var app = express();

//rotas
app.get('/', function(req, res) {
	res.send('Bem vindo!');
});
app.get('/usuarios', function(req, res, next){
	res.send(usuarios);
});
app.get('/cardapios', function(req, res, next){
	res.send(cardapios);
});
app.get('/eventos', function(req, res, next){
	res.send(eventos);
});

//dados
var usuarios = [
	{ id: 1, nome: 'gusta', email: 'gusta@node.js' },
	{ id: 2, nome: 'biris', email: 'biris@node.js' }
];
var cardapios = [
	{ id: 1, nome: 'Jurandais' },
	{ id: 2, nome: 'MecRonalds' }
];
var eventos = [
	{ id: 1, nome: 'Phono Clubber', data: '27/02/2017' },
	{ id: 2, nome: 'Sunset Festival', data: '29/02/2017' }
];

//server
app.listen(9000);