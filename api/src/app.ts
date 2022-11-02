import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pool from "./db/pgdb";
import authRoute from "./routes/auth";
import detailsRoute from "./routes/details";
import chartsRoute from "./routes/charts";
import insightRoute from "./routes/insights";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRoute);
app.use("/charts", chartsRoute);
app.use("/data", detailsRoute);
app.use("/stats", insightRoute);
// app.use('/report', )

pool.connect();

app.listen(5000, "localhost", () => {
  console.log("listening on port 5000");
});



