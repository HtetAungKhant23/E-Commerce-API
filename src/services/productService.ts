import Poroduct from "../models/productModel";
import { Request } from "express";

export const findAllProduct = () => {
    return Poroduct.find();
}

export const findProudctAndUpdate = async ( req: Request ) => {
    const productId = req.params.id;
    const body = req.body;
    const updatedProduct = await Poroduct.findByIdAndUpdate(productId,body);
    if(!updatedProduct){
        return false;
    }
    return updatedProduct;
}

export const findProudctAndDelete = async ( id: string ) => {
    const deletedProduct = await Poroduct.findByIdAndDelete(id);
    console.log(deletedProduct);
    if(!deletedProduct){
        return false;
    }
    return deletedProduct;
}

