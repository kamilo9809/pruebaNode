import express from 'express';
import cors from 'cors';
import router from './routes/index.js'
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json' with { type: "json" };

import './middleware/modelsSync.js'

const app = express();

const port = 3000;


app.use(express.json())
app.use(cors())
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.listen(port,()=>{
    console.log(`server is runin en http://localhost:${port}`);
})