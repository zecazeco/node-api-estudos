import "reflect-metadata";
import express from "express";
import cors from "cors";

import { teamsRouter } from "./routes/teams";
import { competitionsRouter } from "./routes/competitions";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", function (req, res) {
    res.send("API Zeco")
  })

app.use(teamsRouter);
app.use(competitionsRouter);

const port = process.env.PORT || 8080;

//app.listen(5000, () => {
app.listen(port, () => {
    console.log('Server on port: 8080');
})