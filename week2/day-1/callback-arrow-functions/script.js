// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback();
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

// const timer = function(){
//     console.log(new Date())
//   }
  
//   setInterval(timer, 1000)

// setInterval(function(){
//     console.log(new Date())
// },1000)


// const square = num => console.log(num **  2);

// square(4)


// const getFormalTitle = (name, title) => name + " " +title;
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"



// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => { 
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()

// let x = {
//     count: 12,
//     go: () => {
//         setTimeout(function () {
//             console.log(this.count)
//         }, 1500)
//     }
// }
// x.go()


// setInterval(()=>{console.log("hi")}, 2000)

const run = (name) => {console.log("Run, " + name + ", run!")}
const yell = function(action){
    let env = "Forest"
    action(env)
}
run(yell)