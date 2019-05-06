import {getProduits} from '../Model/ModelDAO/ProduitsDAO';
import * as Prod from '../Model/ModelDAO/Produits_panierDAO';
import { Produits } from '../Model/Produits';
import { connect } from '../Model/ModelDAO/BddConnectionMySQL';
import {Request,Response} from 'express';
import express from 'express';
import bodyParser from 'body-parser';
const exp=express();
exp.use(bodyParser.json());

//demarrage du server sur le port 3000
exp.listen(3000, function () {
    console.log('démarrage avec express');
});

let debut: number=0;
let quantite: number=9;
let nom: string | null;
let genre: string | null;
let type: string | null;

//methode GET 
exp.get('/catalog', (req: Request, res: Response) => {
    //CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    //appelle couche DAO methode getProduits reccuperation de la promise et réponse au XMLHttpRequest
    getProduits(debut, quantite, nom, genre, type).then(response => {
        console.log(response);
        res.status(200).send(response);
    });
});


exp.get('/recherche',(req :Request, res :Response) =>{
    //CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    //reccupération des paramètres JS
    nom=req.param('motclef');
    genre=req.param('genre');
    type=req.param('type');

    //appelle couche DAO methode getProduits reccuperation de la promise et réponse au XMLHttpRequest
    getProduits(debut,quantite,nom,genre,type).then(response =>{
        console.log(response);
        res.status(200).send(response);
    }); 
});


