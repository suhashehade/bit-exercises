const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/solar-system-db', { useNewUrlParser: true })

const Schema = mongoose.Schema

const solarSystemSchema = new Schema({
    planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}],
    starName: String
})

const planetSchema = new Schema({
    name: String,
    system: {type: Schema.Types.ObjectId, ref: 'SolarSystem'},
    visitors: [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
})

const visitorSchema = new Schema({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: 'Planet'},
    visitedPlanets:[{type: Schema.Types.ObjectId, ref: 'Planet'}]
})

const SolarSystem = mongoose.model('SolarSystem', solarSystemSchema)
const Planet = mongoose.model('Planet', planetSchema)
const Visitor = mongoose.model('Visitor', visitorSchema)

let solarSystem = new SolarSystem({
    planets: [],
    starName: 'Sun'
})


let Mercury = new Planet({
    name: 'Mercury',
    system: solarSystem,
    visitors: []
})

let Venus = new Planet({
    name: 'Venus',
    system: solarSystem,
    visitors: []
})

let Mars = new Planet({
    name: 'Mars',
    system: solarSystem,
    visitors: []
})

let Earth =  new Planet({
    name: 'Earth',
    system: solarSystem,
    visitors: []
})

let visitor1 = new Visitor({
    name: 'Aamir Ercan',
    homePlanet: Earth,
    visitedPlanets: []
})

let visitor2 = new Visitor({
    name: 'Moira Gherardo',
    homePlanet: Mars,
    visitedPlanets: []
})

let visitor3 = new Visitor({
    name: 'Pompeo Kai',
    homePlanet: Earth,
    visitedPlanets: []
})

visitor1.visitedPlanets.push(Mercury)
visitor1.visitedPlanets.push(Venus)
visitor1.visitedPlanets.push(Mars)

visitor2.visitedPlanets.push(Mercury)
visitor2.visitedPlanets.push(Earth)

visitor3.visitedPlanets.push(Mars)

Mercury.visitors.push(visitor1)
Mercury.visitors.push(visitor2)

Mars.visitors.push(visitor1)
Mars.visitors.push(visitor3)

Venus.visitors.push(visitor1)

Earth.visitors.push(visitor2)

solarSystem.planets.push(Mercury)
solarSystem.planets.push(Venus)
solarSystem.planets.push(Earth)
solarSystem.planets.push(Mars)

// solarSystem.save()

// Earth.save()
// Mercury.save()
// Venus.save()
// Mars.save()

// visitor1.save()
// visitor2.save()
// visitor3.save()



// Planet.find({}).populate('visitors').exec(function(err, planets){
//     console.log(planets)
// })



// Planet.findOne({}).populate('visitors').exec(function(err, planets){
//     console.log(planets)
// })


SolarSystem.find({}).populate({
    path: 'planets',
    populate: {
        path: 'visitors'
    }
}).exec(function(err, planets){
    console.log(planets[0]);
})
