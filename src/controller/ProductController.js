import Product from "../model/Product" ;

class ProductController {

    async store(req , res) {
        try {
            const {name , about , price} = req.body ;

            const data = await Product.findOne({name});

            if (data) {
                return res.send("Product already  registered !");
            }else {
                data = await Product.create({name , about , price});
                return res.json({data});
            }

        }catch(err) {
            return res.status(500).send(`There´s a problem with the registration. ${err}`);
        }
    } 

    async show(req , res) {
        const data = await Product.find();

        if (data.length == 0)
            return res.status(404).send("There are no products available");
        
        return res.json({data });
    }

}

export default new ProductController();