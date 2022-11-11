import express,{ Request,Response } from "express";
import { Category,CategoryStore } from "../models/category_model";
import jwt, { Secret } from 'jsonwebtoken'



const store=new CategoryStore();

const create=async(req:Request ,res:Response)=>{
    try {
        const authorizationHeader = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.BYCRYPT_PWD as Secret)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
    const c=await store.create(req.body);
    res.send({
        category:c
    })
}


const product_routes=(app:express.Application)=>{
    app.post('/category',create);
    
}

export default product_routes;
