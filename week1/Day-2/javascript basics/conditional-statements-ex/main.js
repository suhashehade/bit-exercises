let boughtTesla = true;
const yearOfTeslaPurchase = 2016;
let isUSCitizen = true;
let currentYear = 2018;

if(boughtTesla && isUSCitizen){
    let long = currentYear - yearOfTeslaPurchase; 
    if(long>=4){
        console.log("whether the customer would like an upgrade?");
    }else{
        console.log("whether the customer is satisfied with the car?");
    }
}else if(boughtTesla && !isUSCitizen){
    console.log("whether the customer would like to move to the US");
}else{
    console.log("whether they are interested in buying one");
}