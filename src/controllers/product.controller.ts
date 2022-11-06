import { Request,Response } from "express";
import { CreateProductInput, UpdateProductInput,GetProductInput,DeleteProductInput } from "../schemas/product.schema";
import{createProduct, findProduct,deleteProduct,findAndUpdateProduct} from "../services/product.service";



export async function createProductHandler(
    req:Request<{},{},CreateProductInput["body"]>,
    res:Response) {
        const body=req.body;
        const product= await createProduct({...body})

        return res.send(product);
    
}

export async function updateProductHandler(
    req:Request<UpdateProductInput['params']>,
    res:Response) {
        const productId=req.params.productId;
        const update=req.body;

        const product=await findProduct({productId});

        if(!product){
            return res.sendStatus(404)
        }

        const updatedProduct= await findAndUpdateProduct({productId},update, {
            new:true,
        })

    return res.send(updatedProduct)
    
}

export async function getProductHandler(
    req:Request<UpdateProductInput['params']>,
    res:Response) {
        const productId=req.params.productId;
        const product = await findProduct({productId});
        
        if(!product){
            res.sendStatus(404)
        }

        return res.send(product);


}

export async function deleteProductHandler(
    req:Request<UpdateProductInput['params']>,
    res:Response) {
        const productId=req.params.productId;

        const product=await findProduct({productId});

        if(!product){
            return res.sendStatus(404)
        }

        await deleteProduct({productId});

    return res.sendStatus(200)
}