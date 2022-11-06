import {Express,Request,Response} from "express";
import { createProductHandler,updateProductHandler,deleteProductHandler,getProductHandler } from "./controllers/product.controller";
import validate from "./middlewares/validation";
import { createProductSchema, updateProductSchema,deleteProductSchema,getProductSchema } from "./schemas/product.schema";



function routes(app:Express){
    

    app.post('/api/products', validate(createProductSchema), createProductHandler);
    app.put('/api/products/:productId', validate(updateProductSchema), updateProductHandler);
    app.get('/api/products/:productId', validate(getProductSchema), getProductHandler);
    app.delete('/api/products/:productId', validate(deleteProductSchema), deleteProductHandler);


}

export default routes;