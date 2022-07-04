


const StringFormatter = function(){
    
    const capitalizeFirst = function(str){
        
        return str.charAt(0).toUpperCase().concat(str.slice(1))
    }
   
    const skewerCase = function(str){
        return str.replace(" ", "-");
    }

    return {
        cap: capitalizeFirst,
        skew: skewerCase,
    }

}

const formatter = StringFormatter();
console.log(formatter.cap("suha"));
console.log(formatter.skew("suha shehadeh"));