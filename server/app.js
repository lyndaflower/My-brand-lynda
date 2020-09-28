import express, { response } from "express";
import bodyParser, { json } from "body-parser";
import dotenv from "dotenv";
import router from './routes/index'; 

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("app running"));
export default app;
