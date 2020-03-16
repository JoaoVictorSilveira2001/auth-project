import express from "express" ;
import mongoose from "mongoose" ;
import routes from "./routes" ;

const app = express();

mongoose.connect("mongodb+srv://joao:bolinha2001@cluster0-kdhin.mongodb.net/JOAO_TEST?retryWrites=true&w=majority" , {
    useNewUrlParser : true ,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);
app.listen(2121);