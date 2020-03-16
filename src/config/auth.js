import "dotenv/config" ;
import User from "../model/User" ;
import jwt from "jsonwebtoken" ;
import bcrypt from "bcryptjs" ;

export default (req , res , next) => {

    const authHeaders = req.headers.auth ;

    if (! authHeaders) return res.status(401).send("You must be authenticated ");

    const parts = authHeaders.split(" ");

    if (! parts.length === 2) return res.status(401).send("Token error");

    const [scheme , token] = parts ; 

    if (!/^Bearer$/i.test(scheme)) return res.status(401).send("Token malformatted !");

    try {
        const payload = jwt.verify(token , process.env.APP_SECRET) ;
        req.id = payload.id ;
        return next();
    }catch(err) {
        return res.status(401).send(`Authentication problem. ${err}`);
    }

}