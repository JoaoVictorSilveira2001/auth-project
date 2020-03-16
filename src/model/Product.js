import {Schema , model} from "mongoose" ;

const ProductSchema = new Schema({

    name : {
        type : String ,
        required : true 
    } ,

    about : {
        type : String ,
        required : true 
    } ,

    price : {
        type : Number ,
        required : true 
    } 

});

export default new model("Product" , ProductSchema);