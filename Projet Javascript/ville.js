export class Ville {
  constructor(nom, x, y) {
    this.nom = nom;
    this.x = x;
    this.y = y;
  }

  getNom() { return this.nom; }
  getX() { return this.x; }
  getY() { return this.y; }

  versChaine() {
    return `${this.nom} (${this.x}, ${this.y})`;
  }
}
