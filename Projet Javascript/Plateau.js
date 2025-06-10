import { Ville } from './MASSI/ville.js';
import { Route } from './MASSI/Route.js';

export const Plateau = {
  villes: [],
  routes: [],
  initialiser() {
    const v1 = new Ville("Paris", 200, 100);
    const v2 = new Ville("Lyon", 400, 300);
    const v3 = new Ville("Marseille", 600, 500);

    this.villes = [v1, v2, v3];

    this.routes = [
      new Route(v1, v2, "red"),
      new Route(v2, v3, "blue"),
      new Route(v1, v3, "green")
    ];
  },
  getVilles() { return this.villes; },
  getRoutes() { return this.routes; }
};
