import {getProduits} from '../Model/ModelDAO/ProduitsDAO';
import * as Prod from '../Model/ModelDAO/Produits_panierDAO';
import { Produits } from '../Model/Produits';
import { connect } from '../Model/ModelDAO/BddConnectionMySQL';
import {Request,Response} from 'express';
import express from 'express';
import bodyParser from 'body-parser';
const exp=express();
exp.use(bodyParser.json());

exp.listen(3000, function () {
    console.log('démarrage avec express');
});


exp.get('/test',(req :Request, res :Response) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    getProduits().then(response =>{
        console.log(response);
        res.status(200).send(response);
       
    }); 
});


