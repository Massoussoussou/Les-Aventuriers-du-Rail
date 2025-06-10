export class Jeu {
  constructor() {
    this.villes = [];
    this.routes = [];
  }

  ajouterVille(ville) {
    this.villes.push(ville);
  }

  ajouterRoute(route) {
    this.routes.push(route);
  }

  afficher(context) {
    this.routes.forEach(route => {
      const v1 = route.ville1;
      const v2 = route.ville2;

      context.beginPath();
      context.moveTo(v1.x, v1.y);
      context.lineTo(v2.x, v2.y);
      context.strokeStyle = route.getCouleur();
      context.lineWidth = 5;
      context.stroke();
    });

    this.villes.forEach(ville => {
      context.beginPath();
      context.arc(ville.x, ville.y, 10, 0, 2 * Math.PI);
      context.fillStyle = "blue";
      context.fill();
      context.stroke();

      context.fillStyle = "black";
      context.font = "14px Arial";
      context.fillText(ville.nom, ville.x + 12, ville.y + 4);
    });
  }
}
 