import mongoose from "mongoose";

import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abc0123456789", 10);


export interface ProductInput{
    name:string;
    price:number;
} 

export interface ProductDocument extends ProductInput, mongoose.Document{
    createdAt:Date;
    updatedAt:Date;
    productId:string;
}

const productSchema= new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true,
        default: ()=>`product_${nanoid()}`
    },
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
},
{timestamps:true}
);

const ProductModel=mongoose.model<ProductDocument>("Product", productSchema);

export default ProductModel;
