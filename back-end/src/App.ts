import express from "express";
import { router } from "./routes";

const app = express();
app.use(router);
app.use(express.json)

app.listen(3001, () => console.log('Server on port: 3001'));
