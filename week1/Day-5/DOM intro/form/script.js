const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const salaryInput = document.getElementById("salary");
const birthdayInput = document.getElementById("birthday");
const phoneInput = document.getElementById("phone");
const sumbit = document.getElementById("submit");


let validate = function(){
   let name = nameInput.value;
   let salary = salaryInput.value;
   let birthday = birthdayInput.value;
   let phone = phoneInput.value;
   let message = "";
   const messageLabel = document.createElement("label");
   messageLabel.setAttribute("class","message");
   messageLabel.style.color = "red";
   messageLabel.style.textTransform = "lowercase";
   if(name.length <= 2){
      message += "the name should be more than 2 letters!" + "\n";
   }else{
    if(salary <= 10000 && salary >= 16000){
        message += "the salary must greater than 10000 and less than 16000! \n" + "\n";
     }else{
        if(birthday == ""){
            message += "the birthday not to be null!" + "\n";
         }else{
            if(phone.length != 10){
                message += "the phone number should be 10 numbers only!" + "\n";
             }else{
                 form.style.display = "none";
                 const welcomeHeader = document.createElement("h1");
                 welcomeHeader.innerHTML = "Welcome!";
                 document.body.appendChild(welcomeHeader);
             }
         }
     }
   }
   messageLabel.innerHTML = message;
   form.appendChild(messageLabel);
   

   
   
}




