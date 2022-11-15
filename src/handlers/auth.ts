import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
dotenv.config();
export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHead: string | undefined = req.headers.authorization;
        const token: string = authHead ? authHead.split(' ')[1] : '';
        const decoded: string | object = jwt.verify(
            token,
            process.env.BYCRYPT_PWD as string
        );
        next();
    } catch (error) {
        res.status(401).json({"message" :"Unauthorized"})
    }
}