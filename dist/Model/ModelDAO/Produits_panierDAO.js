"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produits_panier_1 = require("../Produits_panier");
const Prod = new Produits_panier_1.Produits_panier(12, 'nom', 13, 'format', 'type');
console.log(Prod.getId_produit());
