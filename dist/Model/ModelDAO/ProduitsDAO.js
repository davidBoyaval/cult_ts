"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produits_1 = require("../Produits");
const BddConnectionMySQL_1 = require("./BddConnectionMySQL");
function getProduits() {
    return new Promise(function (resolve, reject) {
        let quantite = 10;
        let debut = 0;
        let nom = "a";
        let genre = "fantastique";
        let type = "jeux";
        var listProd = new Array();
        let sqlQuery = 'CALL PS_lister_produit(?, ?, ?, ?, ?, @err_code, @err_msg);select  @err_code, @err_msg ';
        BddConnectionMySQL_1.connect.query(sqlQuery, [quantite, debut, nom, genre, type], (error, rows) => {
            var i = 0;
            if (error) {
                throw error;
                reject;
            }
            else {
                var resultTaille = rows[0].length;
                for (i = 0; i < resultTaille; i++) {
                    listProd[i] = new Produits_1.Produits(rows[0][i].id_produits, rows[0][i].nom, rows[0][i].prix_vente_HT, rows[0][i].formats, rows[0][i].types);
                }
                ;
                var result = JSON.stringify(listProd);
                console.log(listProd);
                resolve(result);
            }
        });
    });
}
exports.getProduits = getProduits;
