import { Response, NextFunction } from "express";
import { addToCartService, findAllProduct, findProudctAndDelete, findProudctAndUpdate } from "../services/productService";
import { successResponse } from "../middlewares/errorHandlers/responseHandler";
import Poroduct, { IProduct } from "../models/productModel";
import { IError, IRequest } from "../types";

export const getAllProducts: any = async ( req: IRequest, res: Response, next: NextFunction ) => {
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

export const createProduct: any = async ( req: IRequest, res: Response, next: NextFunction ) => {
    const body = req.body;
    try{
        if(req.userAuth.role === 0){
            const err: IError = new Error('access denied! Admin Only!');
            err.statusCode = 400;
            throw(err); 
        }

        const newProduct = new Poroduct(body);
        await newProduct.save();
        
        if(!newProduct){
            const err: IError = new Error('cannot create product!');
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

export const updateProduct: any = async ( req: IRequest, res: Response, next: NextFunction ) => {
    try{
        if(req.userAuth.role === 0){
            const err: IError = new Error('access denied! Admin Only!');
            err.statusCode = 400;
            throw(err); 
        }

        const updatedProduct = await findProudctAndUpdate(req);
        if(!updatedProduct){
            const err: IError = new Error('product is not found!');
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

export const deleteProduct:any = async ( req: IRequest, res: Response, next: NextFunction ) => {
    const productId = req.params.id;
    try {
        if(req.userAuth.role === 0){
            const err: IError = new Error('access denied! Admin Only!');
            err.statusCode = 400;
            throw(err); 
        }
        
        const deletedProduct = await findProudctAndDelete(productId);
        if(!deletedProduct){
            const err: IError = new Error('product is not found!');
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

export const addToCart:any = async ( req: IRequest, res: Response, next: NextFunction ) => {
    try{
        const cart = await addToCartService(req);
        if(cart) {
             res.status(201).json(
            successResponse(
                {},
                'cart added successfully!',
                201
            )
        );
        }
    }catch(err: any){
        console.log(err)
        next(err);
    }
}