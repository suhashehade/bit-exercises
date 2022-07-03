/**should solve it */

const reservations = {
    Bob: { 
           claimed: false 
        },
    Ted: { 
           claimed: true 
         }
  }
 
 
const name = prompt('Please enter the name for your reservation');

let isExists = false;
let isClaimed = false;

for(let key of Object.keys(reservations)){
    if(key.toLowerCase() == name.toLowerCase()){
        isExists = true;
        isClaimed = reservations[key].claimed;
    }  
}

if(isExists && !isClaimed){
  console.log("welcome " + name);
}else{
  if(isExists && isClaimed){
    console.log("The reservation is already claimed");
  }else{
   
    reservations[name] = {claimed : true};
    console.log("We recently add you with cliamed reservation");
    
  }
}



