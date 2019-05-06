export class Produits {

    //attribut Produits
        //getter & setter attribut Produits

    private id_produit: number;
        public setId_produit(v : number) {this.id_produit = v;}
        public getId_produit(): number {return this.id_produit }

    private nom :string;
        public setNom(v: string) {this.nom = v;}
        public getNom(): string {return this.nom }

    private prix_de_vente :number;
        public setPrix_de_vente(v: number) {this.prix_de_vente = v; }
        public getPrix_de_vente(): number {return this.prix_de_vente }

    private format :string | null;
        public setFormat(v: string | null) {this.format = v;  }
        public getFormat(): string | null {return this.format}
            
    private type :string | null;
        public setType(v: string | null) {this.type = v; }
        public getType(): string | null {return this.type}

    //constructeur Produits
    constructor(id_produit :number, nom :string, prix_de_vente :number, format :string | null, type :string | null) {
        this.id_produit = id_produit;
        this.nom = nom;
        this.prix_de_vente = prix_de_vente;
        this.format = format;
        this.type = type;
    }

}
