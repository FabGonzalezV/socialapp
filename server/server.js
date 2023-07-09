import { default as config } from "../config/config.mjs";
import { default as app } from "./express.mjs";
import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/prueba';

 
mongoose.Promise = global.Promise;
await mongoose.connect(uri)
.then(() => {
    console.log('Conexión exitosa a la base de datos');
})
.catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info(`server listening in port : ${config.port}`);
});
