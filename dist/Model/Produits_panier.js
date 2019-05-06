"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produits_1 = require("./Produits");
class Produits_panier extends Produits_1.Produits {
    setQuantite(v) { this.quantite = v; }
    getQuantite() { return this.quantite; }
    setPrix_ht_unitaire(v) { this.prix_ht_unitaire = v; }
    getPrix_ht_unitaire() { return this.prix_ht_unitaire; }
    setTva(v) { this.tva = v; }
    getTva() { return this.tva; }
    setRemise_produit(v) { this.remise_produit = v; }
    getRemise_produit() { return this.remise_produit; }
    setRemise_client(v) { this.remise_client = v; }
    getRemise_client() { return this.remise_client; }
    setPrix_ht_final(v) { this.prix_ht_final = v; }
    getPrix_ht_final() { return this.prix_ht_final; }
    constructor(quantite, prix_ht_unitaire, tva, remise_produit, remise_client, prix_ht_final, id_produit, nom, prix_de_vente, format, type) {
        super(id_produit, nom, prix_de_vente, format, type);
        this.quantite = quantite;
        this.prix_ht_unitaire = prix_ht_unitaire;
        this.tva = tva;
        this.remise_produit = remise_produit;
        this.remise_client = remise_client;
        this.prix_ht_final = prix_ht_final;
    }
}
exports.Produits_panier = Produits_panier;
