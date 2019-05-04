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
//methode GET 
exp.get('/test', (req, res) => {
    //CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //appelle couche DAO methode getProduits reccuperation de la promise et réponse au XMLHttpRequest
    ProduitsDAO_1.getProduits().then(response => {
        console.log(response);
        res.status(200).send(response);
    });
});
