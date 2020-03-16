import Product from "../model/Product" ;

class ProductController {

    async store(req , res) {
        try {
            const {name , about , price} = req.body ;

            const data = await Product.findOne({name});

            if (data) return res.send("This product is already registered !");

            data = await Product.create({name , about , price});
            return res.send("The product was registered sucessfully :)");
        }catch(err) {
            return res.status(500).send(`There was a problem with the registration. ${err}`);
        }
    }

    async show(req , res) {
        const data = await Product.find();

        if (!data.length == 0) return res.status(404).send("There are no products available !");
        return res.json({list : data});
    }
}

export default new ProductController();