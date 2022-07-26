const express = require("express");
const api = require("./server/routes/api.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", api);

const port = 3000;
app.listen(port, function () {
  console.log(`server is listening on port: ${port}`);
});
