"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produits_1 = require("../Produits");
const BddConnectionMySQL_1 = require("./BddConnectionMySQL");
//methode de reccuperation des produits(parametres en dur pour le moment)
function getProduits(debut, quantite, nom, genre, type) {
    return new Promise(function (resolve, reject) {
        if (nom == '')
            nom = null;
        if (genre == '')
            genre = null;
        if (type == '')
            type = null;
        var listProd = new Array();
        let sqlQuery = 'CALL PS_lister_produit(?, ?, ?, ?, ?, @err_code, @err_msg);select  @err_code, @err_msg ';
        BddConnectionMySQL_1.connect.query(sqlQuery, [quantite, debut, nom, genre, type], (error, rows) => {
            var i = 0;
            if (error) {
                throw error;
                reject; //rejet de la promise
            }
            else {
                var resultTaille = rows[0].length; //rows[0] resultats du select de ma PS MySQL
                for (i = 0; i < resultTaille; i++) {
                    listProd[i] = new Produits_1.Produits(rows[0][i].id_produits, rows[0][i].nom, rows[0][i].prix_vente_HT, rows[0][i].formats, rows[0][i].types);
                }
                ;
                var result = JSON.stringify(listProd); //conversion resultat en JSON
                console.log(listProd);
                resolve(result); //return de la promise
            }
        });
    });
}
exports.getProduits = getProduits;
