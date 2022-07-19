

// localStorage.setItem("name", "suha");
// console.log(localStorage.getItem("name"));


let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}
let stringVersionOfUserStorage = JSON.stringify(userStorage)
localStorage.setItem("userStorage", stringVersionOfUserStorage);
let cart = JSON.parse(localStorage.getItem("userStorage")).cart;
console.log(cart[cart.length - 1].count);