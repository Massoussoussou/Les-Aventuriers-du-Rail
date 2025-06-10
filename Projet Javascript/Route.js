export class Route {
  constructor(ville1, ville2, couleur) {
    this.ville1 = ville1;
    this.ville2 = ville2;
    this.couleurInitiale = couleur;
    this.proprietaire = null;
  }

  getCouleur() {
    return this.proprietaire ? this.proprietaire.getCouleur() : this.couleurInitiale;
  }

  setProprietaire(etat) {
    this.proprietaire = etat;
  }

  contientCoord(x, y, tolerance) {
    const dx = this.ville2.x - this.ville1.x;
    const dy = this.ville2.y - this.ville1.y;
    const length = Math.hypot(dx, dy);
    const dot = ((x - this.ville1.x) * dx + (y - this.ville1.y) * dy) / (length * length);
    const closestX = this.ville1.x + dot * dx;
    const closestY = this.ville1.y + dot * dy;
    const distToSegment = Math.hypot(x - closestX, y - closestY);

    const withinBounds = dot >= 0 && dot <= 1;
    return withinBounds && distToSegment <= tolerance;
  }
  

  distancePointSegment(px, py, x1, y1, x2, y2) {
    const A = px - x1;
    const B = py - y1;
    const C = x2 - x1;
    const D = y2 - y1;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    const param = lenSq !== 0 ? dot / lenSq : -1;

    let xx, yy;
    if (param < 0) {
      xx = x1; yy = y1;
    } else if (param > 1) {
      xx = x2; yy = y2;
    } else {
      xx = x1 + param * C;
      yy = y1 + param * D;
    }

    const dx = px - xx;
    const dy = py - yy;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
