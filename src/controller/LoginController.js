import "dotenv/config" ;

import jwt from "jsonwebtoken" ;
import bcrypt from "bcryptjs" ;
import User from "../model/User" ;

class LoginController {
    async login(req , res) {
        try {
            const {email , password} = req.body ;

            const data = await User.findOne({email}).select("+password");

            if (!data) return res.status(404).send("Sorry, we couldn´t find this user. Check your e-mail to make sure that is correct !");

            if (! await bcrypt.compare(password ,data.password)) return res.send("Wrong password !");

            return res.json({
                data ,
                token : jwt.sign({id : data._id} , process.env.APP_SECRET , {
                    expiresIn : 86400
                })
            });

        }catch(err) {
            return res.send(`There´s a problem with the authentication. ${err}`);
        }
    }

}

export default new LoginController();