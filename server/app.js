import express, { response } from "express";
import bodyParser, { json } from "body-parser";
import dotenv from "dotenv";
import router from './routes/index'; 
import './controller/user';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
 

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("app running"));
export default app;
