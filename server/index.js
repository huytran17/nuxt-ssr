const express = require("express");
const app = express();
const appRouter = require("./routes");

app.use("/", appRouter);

app.listen(3001, () => console.log("Server is listening on port 3001"));
