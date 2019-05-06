"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produits {
    setId_produit(v) { this.id_produit = v; }
    getId_produit() { return this.id_produit; }
    setNom(v) { this.nom = v; }
    getNom() { return this.nom; }
    setPrix_de_vente(v) { this.prix_de_vente = v; }
    getPrix_de_vente() { return this.prix_de_vente; }
    setFormat(v) { this.format = v; }
    getFormat() { return this.format; }
    setType(v) { this.type = v; }
    getType() { return this.type; }
    //constructeur Produits
    constructor(id_produit, nom, prix_de_vente, format, type) {
        this.id_produit = id_produit;
        this.nom = nom;
        this.prix_de_vente = prix_de_vente;
        this.format = format;
        this.type = type;
    }
}
exports.Produits = Produits;
