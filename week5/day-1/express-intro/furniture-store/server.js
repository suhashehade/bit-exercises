const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.get("/", function (request, response) {
  console.log("Server is up and running smoothly");
  response.send("end the request-response cycle");
});

app.get("/priceCheck/:name", function (request, response) {
  let itemName = request.params.name;
  let item = store.find((i) => i.name == itemName);
  let itemPrice = {
    price: item.price,
  };
  response.send(itemPrice);
});

app.get("/buy/:name", function (request, response) {
  let inventoryName = request.params.name;
  let item = store.find((i) => i.name == inventoryName);
  item.inventory -= 1;
  response.send(item);
});

app.get("/sale", function (request, response) {
  let params = request.query;
  let isAdmin = params.admin;
  if (isAdmin === "true") {
    store.filter((i) => i.inventory > 10).map((i) => (i.price /= 2));
  }
  response.send(store);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
