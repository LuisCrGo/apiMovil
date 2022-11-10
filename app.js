import express from 'express';
import { api } from './config/Config.js';
// import cors from'cors';
import swaggerDocs from './config/swagger.config.js';


import docente from './routes/docente.routes.js';
import login from './routes/login.routes.js'
import simpatizantes from './routes/simpatizantes.routes.js'


const app = express();

app.use(express.json());

// app.use(
//     cors({
//         origin: "http://localhost:8001"
//     })
// )


app.use('/api/docente',docente);
app.use('/api/login',login);
app.use('/api/simpatizantes',simpatizantes);



app.listen(api.port,()=>{
    console.log(`Servidor corriento en el puerto => ${api.port}`);
    swaggerDocs(app, api.port);
});