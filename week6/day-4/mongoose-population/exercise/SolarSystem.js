const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/solar-system-db", {
  useNewUrlParser: true,
});

const Schema = mongoose.Schema;

const solarSystemSchema = new Schema({
  planets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
  starName: String,
});

const planetSchema = new Schema({
  name: String,
  system: { type: Schema.Types.ObjectId, ref: "SolarSystem" },
  visitors: [{ type: Schema.Types.ObjectId, ref: "Visitor" }],
});

const visitorSchema = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: "Planet" },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});

const SolarSystem = mongoose.model("SolarSystem", solarSystemSchema);
const Planet = mongoose.model("Planet", planetSchema);
const Visitor = mongoose.model("Visitor", visitorSchema);

let solarSystem = new SolarSystem({
  planets: [],
  starName: "Sun",
});

let Mercury = new Planet({
  name: "Mercury",
  system: solarSystem,
  visitors: [],
});

let Venus = new Planet({
  name: "Venus",
  system: solarSystem,
  visitors: [],
});

let Mars = new Planet({
  name: "Mars",
  system: solarSystem,
  visitors: [],
});

let Earth = new Planet({
  name: "Earth",
  system: solarSystem,
  visitors: [],
});

let visitor1 = new Visitor({
  name: "Aamir Ercan",
  homePlanet: Earth,
  visitedPlanets: [],
});

let visitor2 = new Visitor({
  name: "Moira Gherardo",
  homePlanet: Mars,
  visitedPlanets: [],
});

let visitor3 = new Visitor({
  name: "Pompeo Kai",
  homePlanet: Earth,
  visitedPlanets: [],
});

visitor1.visitedPlanets.push(Mercury);
visitor1.visitedPlanets.push(Venus);
visitor1.visitedPlanets.push(Mars);

visitor2.visitedPlanets.push(Mercury);
visitor2.visitedPlanets.push(Earth);

visitor3.visitedPlanets.push(Mars);

Mercury.visitors.push(visitor1);
Mercury.visitors.push(visitor2);

Mars.visitors.push(visitor1);
Mars.visitors.push(visitor3);

Venus.visitors.push(visitor1);

Earth.visitors.push(visitor2);

solarSystem.planets.push(Mercury);
solarSystem.planets.push(Venus);
solarSystem.planets.push(Earth);
solarSystem.planets.push(Mars);

// solarSystem.save()

// Earth.save()
// Mercury.save()
// Venus.save()
// Mars.save()

// visitor1.save()
// visitor2.save()
// visitor3.save()

// Visitor.find({})
//   .populate({
//     path: "visitedPlanets",
//     populate: {
//       path: "visitors",
//     },
//   })
//   .exec(function (err, visitors) {
//     for (let visitor of visitors) {
//       let visitedPlanets = visitor.visitedPlanets;
//       for (let visitedPlanet of visitedPlanets) {
//         let visitors = visitedPlanet.visitors;
//         for (let visitor of visitors) {
//           console.log(visitedPlanet.name + " visited by " + visitor.name);
//         }
//       }
//     }
//   });

// Planet.findById("62e9a0e162c180f59203a099")
//   .populate("visitors")
//   .exec(function (err, planet) {
//     let visitors = planet.visitors;
//     for (let visitor of visitors) {
//       console.log(planet.name + " visited by " + visitor.name);
//     }
// });

// SolarSystem.find({}).populate({
//     path: 'planets',
//     populate: {
//         path: 'visitors'
//     }
// }).exec(function(err, system){
//      let planets = system[0].planets;
//      for(let planet of planets){
//         let visitors = planet.visitors
//         for(let visitor of visitors){
//             console.log(planet.name+ " visitor " + visitor.name);
//         }

//      }
// })

// Visitor.find({})
//   .populate({
//     path: "visitedPlanets",
//     populate: "system",
//   })
//   .exec(function (err, visitors) {
//     for (let visitor of visitors) {
//       console.log(visitor.visitedPlanets[0].system.starName);
//     }
//   });

Planet.find({})
  .populate("system")
  .exec(function (err, planets) {
    for (let planet of planets) {
      console.log(
        planet.name + " from system that has star " + planet.system.starName
      );
    }
});
