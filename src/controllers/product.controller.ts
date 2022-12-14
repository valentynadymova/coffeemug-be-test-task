import { Request,Response } from "express";
import { CreateProductInput, UpdateProductInput,GetProductInput,DeleteProductInput } from "../schemas/product.schema";
import{createProduct, findProduct,deleteProduct,findAndUpdateProduct, findAllProducts} from "../services/product.service";
import logger from "../utils/logger";



export async function createProductHandler(
    req:Request<{},{},CreateProductInput["body"]>,
    res:Response) {
        try{
            const body=req.body;
            const product= await createProduct({...body})
    
            return res.status(200).send(product);
        }catch(err:any){
            res.status(409).send('product already exists');
        }
       
    
}

export async function updateProductHandler(
    req:Request<UpdateProductInput['params']>,
    res:Response) {
        const productId=req.params.id;
        const update=req.body;

        const product=await findProduct({productId});

        if(!product){
            return res.sendStatus(404)
        }

        const updatedProduct= await findAndUpdateProduct({productId},update, {
            new:true,
        })

    return res.status(200).send(updatedProduct)
    
}

export async function getProductHandler(
    req:Request<GetProductInput['params']>,
    res:Response) {
        const productId=req.params.id;
        const product = await findProduct({productId});
        
        if(!product){
            res.sendStatus(404)
        }

        return res.send(product);
}

export async function getAllProductsHandler(
    req:Request,
    res:Response,
){
const products= await findAllProducts();
return res.send(products)
}

export async function deleteProductHandler(
    req:Request<DeleteProductInput['params']>,
    res:Response) {
        const productId=req.params.id;

        const product=await findProduct({productId});

        if(!product){
            return res.sendStatus(404)
        }

        await deleteProduct({productId});

    return res.status(200).json({message:"Product is deleted"});
}

