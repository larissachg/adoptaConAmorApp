import { Router } from 'express';
import { AuthController } from './controller';




export class Authroutes {


  static get routes(): Router {

    const router = Router();


    const controller = new AuthController();

    // Definir las rutas
    router.post('/login', controller.loginUser );
    router.post('/register', controller.loginUser );
    
    return router;
  }


}

