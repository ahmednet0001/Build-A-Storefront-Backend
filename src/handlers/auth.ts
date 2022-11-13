import dotenv from 'dotenv';
import  { Request, Response, NextFunction} from 'express';
import jwt, { Secret } from 'jsonwebtoken';


dotenv.config();

export const auth = (req: Request, res: Response, next:NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization as string;
        const token = authorizationHeader.split(' ')[1];
        const x=jwt.verify(token, process.env.BYCRYPT_PWD as Secret);
        res.json(x)
       // next()
    } catch (error) {
        res.status(401)
    }
    
}