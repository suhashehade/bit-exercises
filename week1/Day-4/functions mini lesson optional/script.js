
/**ex1 */
// people_info = [
//     {
//       name: "guido",
//       profession: "bungalow builder",
//       age: 17,
//       country: "canaland",
//       city: "sydurn",
//       catchphrase: "what a piece of wood!"
//     },
//     {
//       name: "petra",
//       profession: "jet plane mechanic",
//       age: 31,
//       country: "greenmark",
//       city: "bostork",
//       catchphrase: "that's my engine, bub"
//     },
//     {
//       name: "damian",
//       profession: "nursery assistant",
//       age: 72,
//       country: "zimbia",
//       city: "bekyo",
//       catchphrase: "with great responsibility comes great power"
//     }
//   ]

  

//   const capitalize = function(str){
//     let capitalizedStr = ""
//     capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
//     capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
//     return capitalizedStr;
//   }
  
//   const getAge = function(age){
//     let modAge = "";
//     if(age > 55){
//         modAge = "55+"
//     }else {
//         if(age < 21){
//             modAge = "Underage";
//         }else{
//             modAge = age;
//         }
      
//     }
//     return modAge;
//   }

//   const getProfession = function(profession){
//       return profession;
//   }

//   const getCountryAndCity = function(country, city){
//     return country + " " + city;
//   }
   
//   const getCatchphrasereturn = function(catchphrase){
//        let newCatchphrase = `"${catchphrase}"`
//        return newCatchphrase;
//   }

//   const getSummary = function(person){
//     let summary = ""
//     summary += capitalize(person.name)
//     summary += ` is ${getAge(person.age)} year old, ` //Yes - you can put a function call inside the tick quotes!
//     summary += `${getProfession(person.profession)} and from `;
//     summary += getCountryAndCity(person.country, person.city);
//     summary += `. ${capitalize(person.name)} loves to say ${getCatchphrasereturn(person.catchphrase)}`
//     return summary;
//   }
   

//  const printSummeryEachPerson = function(){
//     for(let person of people_info){
//         console.log(getSummary(person));
//     }
//  }

 
//  printSummeryEachPerson();



/**ex2 */
 const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

let storyArr = story.split(" ");

const count = function(myWord){
   let counter = 0;
   for(let word of storyArr){
     if(word === myWord){
        counter ++;
     }
   }
   return counter;
}

const addToObject = function(word, number){
    wordCounts[word] = number;
}

const countWordsAllStory = function(){
    for(word of storyArr){
     let number = count(word);
     addToObject(word, number);
    }
}

countWordsAllStory();

console.log(wordCounts);





 