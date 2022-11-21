import mongoose from "mongoose";

export interface ProductInput{
    name:string;
    price:number;
} 

export interface ProductDocument extends ProductInput, mongoose.Document{
    createdAt:Date;
    updatedAt:Date;
}

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
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
