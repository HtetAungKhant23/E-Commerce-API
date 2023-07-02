import Poroduct from "../models/productModel";
import { Request } from "express";
import User from "../models/userModel";
import { IRequest } from "../types";

export const findAllProduct = () => {
    return Poroduct.find();
}

export const findProudctAndUpdate = async ( req: IRequest ) => {
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

export const addToCartService =async (req:IRequest) => {
    const _id = req.userAuth.id;
    const productId = req.body.product_id;
    const productQuantity = req.body.quantity;
    const user:any = await User.findById({_id});
    let cartProducts = user?.cart.products;
    const existingProductIndex = cartProducts.findIndex(
        (product: any) => product.product_id.toString() === productId
    );
    const product = await Poroduct.findById(productId);
    if (existingProductIndex > -1) {
        cartProducts[existingProductIndex].quantity += productQuantity || 1;
        user.cart.products = cartProducts;
        await user.save();
    }else {
        const newProduct = {
            product_id: productId,
            quantity: productQuantity || 1,
            price: product?.price
        }
        user.cart.products.push(newProduct)
        await user.save();
    }
    return user.cart.products;
}

