const validator = require("validator");
const { faker } = require("@faker-js/faker");

console.log(validator.isEmail("shoobert@dylan"));
console.log(validator.isMobilePhone("786-329-9958"));
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
let text = "I'M SO EXCITED!!!~!";
text = validator.blacklist(text, blacklist);
console.log(text);

const makeHuman = function (number) {
  for (let i = 1; i <= number; i++) {
    let person = {
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
      company: faker.company.companyName(),
    };
    console.log(person.name + ", " + person.avatar + ", " + person.company);
  }
};

makeHuman(2);
