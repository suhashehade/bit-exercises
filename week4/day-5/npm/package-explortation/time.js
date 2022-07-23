// const moment = require('moment')
let urllib = require('urllib')
// let formattedTimeNow = moment().format("MMMM Do, YYYY")
// console.log(formattedTimeNow) //January 3rd, 2017





urllib.request('https://www.omdbapi.com/?apikey=9ef22479&t=Guardians%20of%20the%20Galaxy%20Vol.%202', function(response, error){
    console.log(response.toString());
})


