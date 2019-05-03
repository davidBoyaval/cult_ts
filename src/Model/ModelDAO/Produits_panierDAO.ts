import { Produits_panier } from '../Produits_panier';
import {connect} from './BddConnectionMySQL';

const Prod = new Produits_panier(12, 'nom', 13, 'format', 'type');

console.log(Prod.getId_produit());