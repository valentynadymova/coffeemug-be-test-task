import {Request,Response,NextFunction} from "express";
import { isValidObjectId } from "mongoose";



const validateId=(req:Request,res:Response,next:NextFunction)=>{
    const {id}=req.params;
    if(!isValidObjectId(id)){
        return res.status(400).send('id is not valid')
    }
    next();

}

export default validateId;