
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose on form true/flase
    fridge: {
        price: 500,
        works: true, // choose on form true/flase
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}


// if(kitchen.hasOven){
//      hasOven += "she has an oven to cook the raddish in."
// }
// let sentence1 = ""
// sentence1 += kitchen.owner + "'s " + kitchen.fridge.items[1].name + 
//             " expired " + (date - kitchen.fridge.items[1].expiryDate) +
//             " day ago. Weird, considering her fridge works. Luckily, ";
// sentence1 += "" + hasOven;
// console.log(sentence1);

// kitchen.hasOven = false;
// kitchen.fridge.works = true;

// let hasOven = "";
// if(!kitchen.hasOven){
//    hasOven = "she doesn’t have an oven";
// }
// let sentence2 = "";
// sentence2 += kitchen.owner + "'s " + kitchen.fridge.items[1].name + " expired " +
//  (date - kitchen.fridge.items[1].expiryDate) + 
//    " day ago. Weird, considering her fridge works. Too bad " + hasOven + 
//    " to cook " + kitchen.fridge.items[1].name +" in." ;

//    console.log(sentence2);


// kitchen.hasOven = true;
// kitchen.fridge.works = false;

// let sentence3 = "";
// let fridgeWork = "";
// let hasOven = "";

// if(!kitchen.fridge.works){
//     fridgeWork += "fridge doesn’t work.";
// }

// if(kitchen.hasOven){
//     hasOven += "she has an oven";
// }


// sentence3 += kitchen.owner + "'s " + kitchen.fridge.items[1].name + " expired " +
//   (date - kitchen.fridge.items[1].expiryDate) + " Probably because her " +
//   fridgeWork + " Luckily, " + hasOven + " to cook the " + kitchen.fridge.items[1].name + " in." + 
//   " And she’ll have to pay " + (kitchen.fridge.price / 2) + " to fix the fridge." ;

//   console.log(sentence3);

  kitchen.hasOven = false;
  kitchen.fridge.works = false;
  
  let sentence4 = "";
  let fridgeWork = "";
  let hasOven = "";
  
  if(!kitchen.fridge.works){
      fridgeWork += "her fridge doesn’t work.";
  }
  
  if(!kitchen.hasOven){
      hasOven += "she doesn’t have an oven";
  }

  sentence4 += kitchen.owner + "'s " + kitchen.fridge.items[1].name + " expired " +
  (date - kitchen.fridge.items[1].expiryDate) + " Probably because " +
  fridgeWork + " Too bad " + hasOven + " to cook the " + kitchen.fridge.items[1].name + " in." + 
  " And she’ll have to pay " + (kitchen.fridge.price / 2) + " to fix the fridge." ;
  
  console.log(sentence4);
//   Geraldine’s raddish expired 1 day ago. 
//   Probably because her fridge doesn’t work. 
//   Too bad she doesn’t have an oven to cook the raddish in.
//    And she’ll have to pay 250 to fix the fridge.