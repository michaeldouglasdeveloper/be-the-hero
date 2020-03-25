import { Router } from 'express';

import OngController from './controllers/OngController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';
import IncidentController from './controllers/IncidentController';

class Routes {

  constructor() {
    this.routes = Router();

    this.createRoutes();
  }

  createRoutes() {
    this.routes.get('/ongs', OngController.index);
    this.routes.post('/ongs', OngController.store);

    this.routes.post('/sessions', SessionController.store);

    this.routes.get('/profile', ProfileController.index);

    this.routes.get('/incidents', IncidentController.index);
    this.routes.post('/incidents', IncidentController.store);
    this.routes.delete('/incidents/:id', IncidentController.delete);
  }
}

export default new Routes().routes;