const urllib = require('urllib')

urllib.request('https://www.omdbapi.com/?apikey=9ef22479&t=Guardians%20of%20the%20Galaxy%20Vol.%202', function(err, response){
    console.log(response.Released.toString());
})