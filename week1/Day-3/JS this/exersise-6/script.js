/* ex6 */
const coffeeShop = {
    beans: 40,

    money: 100,

    buyBeans: function(numBeans){
       this.money -= (numBeans * 2);
       this.beans += numBeans;
    },
  
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 5},
      americano: {beanRequirement: 5, price: 4},
      doubleShot: {beanRequirement: 15, price: 6},
      frenchPress: {beanRequirement: 12, price: 3},
      bb: {beanRequirement: 5, price: 4},
      
    },

    buyDrink : function(drinkType){
        let isExsist = false;
      for(let drink of Object.keys(this.drinkRequirements)){
        if(drinkType==drink){
            isExsist = true;   
        }
     }
     if(isExsist){
       let drink = this.drinkRequirements[drinkType];
       this.money += drink.beanRequirement * drink.price;
       coffeeShop.makeDrink(drinkType); 
     }else{
        console.log("Sorry, we don’t make");
     }
    },
  
    makeDrink: function (drinkType) {
      // TODO: Finish this method
        if(this.beans < this.drinkRequirements[drinkType].beanRequirement){
           let numBeans = this.drinkRequirements[drinkType].beanRequirement - this.beans;
           this.buyBeans(numBeans);
        }
            console.log("your drink is ready! it needs " +
             this.drinkRequirements[drinkType].beanRequirement + " beans");
        
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
     
      
    }
  }
  
  coffeeShop.buyDrink("latte");
  coffeeShop.buyDrink("americano");
  coffeeShop.buyDrink("filtered");
  coffeeShop.buyDrink("doubleShot");
  coffeeShop.buyDrink("frenchPress");
  coffeeShop.buyDrink("bb");
  
//   coffeeShop.makeDrink("latte"); 
//   coffeeShop.makeDrink("americano");
//   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
//   coffeeShop.makeDrink("doubleShot");
//   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"