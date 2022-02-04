import swaggerDocs from "./swagger.json";
import express from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import route from "./routes";

import "./typeorm/connection";

const app = express();
app.use(cors());

app.use(express.json());
app.use(route);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(5555, () => console.log("Server is running on 5555 port"));
