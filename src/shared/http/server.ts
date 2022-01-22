import express from "express";

import route from "./routes";

import "./typeorm/connection";

const app = express();

app.use(express.json());
app.use(route);

app.listen(5555, () => console.log("Server is running on 5555 port"));
