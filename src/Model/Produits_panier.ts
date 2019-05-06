import { Produits } from "./Produits";

export class Produits_panier extends Produits{//prend les attributs Produits

    private quantite : number;
        public setQuantite(v: number) { this.quantite = v;}
        public getQuantite(): number {return this.quantite}

    private prix_ht_unitaire : number;
        public setPrix_ht_unitaire(v: number) { this.prix_ht_unitaire = v; }
        public getPrix_ht_unitaire(): number { return this.prix_ht_unitaire }

    private tva : number;
        public setTva(v: number) { this.tva = v; }
        public getTva(): number { return this.tva }

    private remise_produit : number;
        public setRemise_produit(v: number) { this.remise_produit = v; }
        public getRemise_produit(): number { return this.remise_produit }

    private remise_client : number;
        public setRemise_client(v: number) { this.remise_client = v; }
        public getRemise_client(): number { return this.remise_client }
        
    private prix_ht_final : number;
        public setPrix_ht_final(v: number) { this.prix_ht_final = v; }
        public getPrix_ht_final(): number { return this.prix_ht_final }

    constructor(quantite: number,
                prix_ht_unitaire: number,
                tva: number,
                remise_produit: number,
                remise_client: number,
                prix_ht_final: number,
                id_produit: number,
                nom: string,
                prix_de_vente: number,
                format: string | null,
                type: string | null){

        super(id_produit, nom, prix_de_vente, format, type);
        this.quantite=quantite;
        this.prix_ht_unitaire= prix_ht_unitaire;
        this.tva= tva;
        this.remise_produit= remise_produit;
        this.remise_client= remise_client;
        this.prix_ht_final= prix_ht_final;
        
    } 
}
