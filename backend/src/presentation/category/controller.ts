import { Response, Request } from 'express';


export class CategoryController {

  createCategory = ( req: Request, res: Response ) => {

    const category = req.body;
    console.log( category );
    res.json( category );
  };

}