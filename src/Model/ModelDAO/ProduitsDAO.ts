import { Produits } from '../Produits';
import {connect} from './BddConnectionMySQL';
import { callbackify, error } from 'util';
import { stringify } from 'querystring';
import { json } from 'body-parser';

//methode de reccuperation des produits(parametres en dur pour le moment)
export function getProduits(debut:number, quantite: number ,nom: string | null, genre: string | null, type: string |null){
    return new Promise(function (resolve,reject){//promise methode asynchrone
        if (nom=='')nom=null;
        if (genre == '') genre = null;
        if (type == '') type = null;
        var listProd: Array<Produits> = new Array()
        let sqlQuery: string = 'CALL PS_lister_produit(?, ?, ?, ?, ?, @err_code, @err_msg);select  @err_code, @err_msg ';
        
        connect.query(sqlQuery, [quantite, debut, nom, genre, type],(error ,rows)=>{
                        var i :number=0;
                        if(error){
                            throw error;
                            reject;//rejet de la promise
                        }else{
                            var resultTaille=rows[0].length;//rows[0] resultats du select de ma PS MySQL
                            for (i = 0; i < resultTaille;i++){
                            listProd[i] = new Produits(rows[0][i].id_produits, 
                                                    rows[0][i].nom,
                                                    rows[0][i].prix_vente_HT,
                                                    rows[0][i].formats,
                                                    rows[0][i].types) 
                            };
                            var result = JSON.stringify(listProd);//conversion resultat en JSON
                            console.log(listProd);
                            resolve(result);//return de la promise
                        }
        });
    });
} 


