import { Request, Response, NextFunction } from "express";
import { findAllProduct, findProudctAndDelete, findProudctAndUpdate } from "../services/productService";
import { successResponse } from "../middlewares/errorHandlers/responseHandler";
import Poroduct, { IProduct } from "../models/productModel";
import User, { IUser } from "../models/userModel";

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
        if(req.userAuth.role === 0){
            const err: Error = new Error('access denied! Admin Only!');
            err.statusCode = 400;
            throw(err); 
        }

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
        if(req.userAuth.role === 0){
            const err: Error = new Error('access denied! Admin Only!');
            err.statusCode = 400;
            throw(err); 
        }

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
        if(req.userAuth.role === 0){
            const err: Error = new Error('access denied! Admin Only!');
            err.statusCode = 400;
            throw(err); 
        }
        
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

export const addToCart = async ( req: Request, res: Response, next: NextFunction ) => {
    const _id = req.userAuth.id;
    const productId = req.body.product_id;
    const productPrice = req.body.price;
    const productQuantity = req.body.quantity;
    try {
        const user:any = await User.findById({_id});
        let cartProducts = user?.cart.products;
        console.log('carts', cartProducts)
        console.log('productId', productId)
        const existingProductIndex = cartProducts.findIndex((product: any) => product.
product_id.toString() === productId)
        console.log("cart id", existingProductIndex)
        if (existingProductIndex > -1) {
            console.log('id', cartProducts[existingProductIndex])
            cartProducts[existingProductIndex].quantity += productQuantity || 1;
            user.cart.products = cartProducts;
            await user.save();
        }else {
            const newProduct = {
                product_id: productId,
                quantity: productQuantity || 1,
                price: productPrice
            }
            user.cart.products.push(newProduct)
            await user.save();
        }
        res.status(201).json(
            successResponse(
                {},
                'cart added successfully!',
                201
            )
        );
       
    }catch(err: any){
        console.log(err)
        next(err);
    }
}