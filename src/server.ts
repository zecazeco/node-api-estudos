import "reflect-metadata";
import express from "express";
import cors from "cors";

import { teamsRouter } from "./routes/teams";
import { competitionsRouter } from "./routes/competitions";

const app = express();

app.use(cors());

app.use(express.json());

app.use(teamsRouter);
app.use(competitionsRouter);


app.listen(5000, () => {
    console.log('Server on port: 5000')
})