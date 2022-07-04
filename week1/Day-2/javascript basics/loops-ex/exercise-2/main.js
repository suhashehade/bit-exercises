const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i=0;i<3;i++){
    let person={
        name:names[i],
        age:ages[i],
    }
  
    people.push(person);
}

let result = "";
for (let index in people){
    if(index != people.length - 1){
        result += (people[index].name + "is " + people[index].age + ", ");
    }else{
        result += (people[index].name + "is " + people[index].age);
    }
    
}

console.log(result);