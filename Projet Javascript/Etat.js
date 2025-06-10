export class Etat {
  constructor(nom, couleur) {
    this.nom = nom;
    this.couleur = couleur;
  }

  getNom() { return this.nom; }
  getCouleur() { return this.couleur; }
  versChaine() { return this.nom; }
}
