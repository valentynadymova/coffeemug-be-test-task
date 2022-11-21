import {Express,Request,Response} from "express";
import { createProductHandler,updateProductHandler,deleteProductHandler,getProductHandler, getAllProductsHandler } from "./controllers/product.controller";
import validate from "./middlewares/validation";
import validateId from "./middlewares/validateId";
import { createProductSchema } from "./schemas/product.schema";



function routes(app:Express){
    

    app.post('/api/products', validate(createProductSchema), createProductHandler);
    app.put('/api/products/:id', validateId, updateProductHandler);
    app.get('/', getAllProductsHandler)
    app.get('/api/products/:id', validateId, getProductHandler);
    app.delete('/api/products/:id', validateId, deleteProductHandler);


}

export default routes;