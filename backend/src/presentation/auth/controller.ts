import { Request, Response } from 'express';

export class AuthController {

  loginUser = ( req: Request, res: Response ) => {
    const { email, password } = req.body;
    console.log( email, password );
    res.json( { email, password } );
  }
}