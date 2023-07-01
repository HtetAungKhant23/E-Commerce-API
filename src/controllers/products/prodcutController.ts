import { Request, Response, NextFunction } from "express";
import { findAllProduct, findProudctAndDelete, findProudctAndUpdate } from "./productService";
import { successResponse } from "../../utils/responseHandler";
import Poroduct, { IProduct } from "../../models/productModel";

export const getAllProducts = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const products = await findAllProduct();

        res.status(200).json(successResponse<IProduct[]>(
            products,
            'success',
            200
        ));

    }catch(err: any){
        next(err);
    }
}

export const createProduct = async ( req: Request, res: Response, next: NextFunction ) => {
    const body = req.body;
    try{
        const newProduct = new Poroduct(body);
        await newProduct.save();
        
        if(!newProduct){
            const err: Error = new Error('cannot create product!');
            err.statusCode = 400;
            throw(err);
        }

        res.status(201).json(
            successResponse<IProduct>(
                newProduct,
                'product create successfully!',
                201
            )
        );

    }catch(err: any){
        next(err);
    }
}

export const updateProduct = async ( req: Request, res: Response, next: NextFunction ) => {
    try{
        const updatedProduct = await findProudctAndUpdate(req);
        if(!updatedProduct){
            const err: Error = new Error('product is not found!');
            err.statusCode = 404;
            throw err;
        }
        res.status(200).json(
            successResponse(
                {},
                `Product is successully deleted with this id = ${updatedProduct._id}`,
                200
            )
        )

    }catch(err: any){
        next(err);
    }
}

export const deleteProduct = async ( req: Request, res: Response, next: NextFunction ) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await findProudctAndDelete(productId);
        if(!deletedProduct){
            const err: Error = new Error('product is not found!');
            err.statusCode = 404;
            throw err;
        }
        res.status(200).json(
            successResponse(
                {},
                `Product is successully deleted with this id = ${deletedProduct._id}`,
                200
            )
        )

    }catch(err: any){
        next(err);
    }
}