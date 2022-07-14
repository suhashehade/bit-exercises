// let classData = {
//   classmates: [
//     { name: "That on gal", description: "Always has the ansswer" },
//     { name: "The weird dude", description: "Quick with a smile" },
//     { name: "Taylor", description: "Just Taylor" },
//   ],
// };


// const source = $("#class-template").html();
// const template = Handlebars.compile(source);
// let htmlClassItem = template(classData)
// $(".items").append(htmlClassItem)

const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"];

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"];



const renderAnimals = function(animalsList){
    const source = $("#animal-template").html();
    const template = Handlebars.compile(source);
    let animalHtmlElem = template({animals: animalsList})
    let animalsHtmlDiv = $("#animals");
    animalsHtmlDiv.append(animalHtmlElem);
}

const renderLanguages = function(languagesList){
    const source = $("#language-template").html();
    const template = Handlebars.compile(source);
    let languageHtmlElem = template({languages: languagesList});
    let languagesDiv = $('#languages');
    languagesDiv.append(languageHtmlElem)
}

renderAnimals(animals)

renderLanguages(languages)