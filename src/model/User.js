import {Schema , model} from "mongoose" ;
import bcrypt from "bcryptjs" ;

const UserSchema = new Schema({

    name : {
        type : String ,
        required : true ,
        uppercase : true 
    } ,

    email : {
        type : String ,
        required : true ,
        lowercase : true  
    } ,

    password : {
        type : String ,
        required : true ,
        select : false 
    } ,

    createdAt : {
        type : Date,
        default : Date.now
    }
});

UserSchema.pre("save" , async function(next) {
    let hash = await bcrypt.hash(this.password , 10);
    this.password = hash ;
}) 

export default new model("User" , UserSchema);