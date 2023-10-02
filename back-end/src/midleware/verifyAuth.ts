import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken'
export function verifyAuth(request: Request, response: Response, next: NextFunction) {
    const auth = request.headers.authorization;
    if(auth){
        const[,token] = auth.split(' ');
        try{
            const {sub} = verify(token, '#x82$cs<QK#^<I2`MsE%;:sGD4?I+6bx:U6BFDX?:sJz&rIw47$@%t|Y|Wv3.fE');
            request.body['userID'] = sub;
            return next();
        }catch{
            return response.status(401).json({message: 'Unauthorized'})
        }
    }

    return response.status(401).json({message: 'Unauthorized'})
}