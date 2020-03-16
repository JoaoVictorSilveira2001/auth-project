import User from "../model/User" ;

class UserController {

    async store(req , res) {
        try {
            const {name , email , password} = req.body ;

            const data = await User.findOne({email});

            if  (data) return res.send("This email is already taken");

            data = await User.create({name , email , password});
            return res.json({data});

        }catch(err) {
            return res.status(500).send(`There was a problem with the registration. ${err}`);
        }
    }


    async show(req , res) {
        const data = await User.find();
        if (data.length == 0) {
            return res.send("There are no users !");
        }else {
            return res.json({data});
        }
    }




}

export default new UserController();