"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProduitsDAO_1 = require("../Model/ModelDAO/ProduitsDAO");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const exp = express_1.default();
exp.use(body_parser_1.default.json());
//demarrage du server sur le port 3000
exp.listen(3000, function () {
    console.log('démarrage avec express');
});
let debut = 0;
let quantite = 10;
let nom;
let genre;
let type;
//methode GET 
exp.get('/catalog', (req, res) => {
    //CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //appelle couche DAO methode getProduits reccuperation de la promise et réponse au XMLHttpRequest
    ProduitsDAO_1.getProduits(debut, quantite, nom, genre, type).then(response => {
        console.log(response);
        res.status(200).send(response);
    });
});
exp.get('/recherche', (req, res) => {
    //CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //reccupération des paramètres JS
    nom = req.param('motclef');
    genre = req.param('genre');
    type = req.param('type');
    //appelle couche DAO methode getProduits reccuperation de la promise et réponse au XMLHttpRequest
    ProduitsDAO_1.getProduits(debut, quantite, nom, genre, type).then(response => {
        console.log(response);
        res.status(200).send(response);
    });
});
exp.get('/next', (req, res) => {
    //CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //reccupération des paramètres JS
    debut += 9;
    nom = req.param('motclef');
    genre = req.param('genre');
    type = req.param('type');
    //appelle couche DAO methode getProduits reccuperation de la promise et réponse au XMLHttpRequest
    ProduitsDAO_1.getProduits(debut, quantite, nom, genre, type).then(response => {
        console.log(response);
        res.status(200).send(response);
    });
});
exp.get('/last', (req, res) => {
    //CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //reccupération des paramètres JS
    debut -= 9;
    nom = req.param('motclef');
    genre = req.param('genre');
    type = req.param('type');
    //appelle couche DAO methode getProduits reccuperation de la promise et réponse au XMLHttpRequest
    ProduitsDAO_1.getProduits(debut, quantite, nom, genre, type).then(response => {
        console.log(response);
        res.status(200).send(response);
    });
});
