import express from 'express';
import addRoutes from "./routes/addRoutes";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

addRoutes(app);

app.listen(port, () => {
  return console.log('Server is running.');
});
