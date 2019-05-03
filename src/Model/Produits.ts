export class Produits {

    private id_produit :number;
    
        public setId_produit(v : number) {
            this.id_produit = v;}
        public getId_produit(): number {
            return this.id_produit }


    private nom :string;

        public setNom(v: string) {
            this.nom = v;}
        public getNom(): string { 
            return this.nom }

    private prix_de_vente :number;

        public setPrix_de_vente(v: number) {
            this.prix_de_vente = v; }
        public getPrix_de_vente(): number {
            return this.prix_de_vente }

    private format :string;

        public setFormat(v: string) {
            this.format = v;  }
        public getFormat(): string {
            return this.format}
            

    private type :string;

        public setType(v: string) {
            this.type = v; }
        public getType(): string {
            return this.type}


    constructor(id_produit :number, nom :string, prix_de_vente :number, format :string, type :string) {
        this.id_produit = id_produit;
        this.nom = nom;
        this.prix_de_vente = prix_de_vente;
        this.format = format;
        this.type = type;
    }

}
