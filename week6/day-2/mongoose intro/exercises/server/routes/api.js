const express = require("express");

const bodyParser = require("body-parser");
const Person = require("../models/Person");

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/people", function (request, response) {
  Person.find({}, function (err, people) {
    response.send(people);
  });
});

router.post("/person", function (request, response) {
  let person = request.body;
  let newPerson = new Person(person);
  newPerson.save();
  response.end();
});

router.put("/person/:id", function (request, response) {
  let personId = request.params.id;
  Person.findByIdAndUpdate(
    personId,
    { age: 80 },
    { new: true },
    function (err, person) {
      response.send(person);
    }
  );
});

router.delete("/apocalypse", function (request, response) {
  Person.deleteMany({}, function (err) {
    response.end();
  });
});

module.exports = router;
