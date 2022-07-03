const container = document.getElementById("container");

let colors = ["red" , "blue" , "green" , "yellow" ,"brown" , "purple" , "pink" , "black" , "orange"];

let boxes = [];

for(let i = 1 ; i <= 5 ; i++){
    let box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.margin = "10px";
    box.style.backgroundColor = "red";
    box.setAttribute("id",`box-${i}`);
    container.appendChild(box);
    
    box.onmouseover = function(){
        let randomIndex = Math.trunc(Math.random() * colors.length);
        this.style.backgroundColor = colors[randomIndex];
        
        const box1 = document.getElementById("box-1");
        const box2 = document.getElementById("box-2");
        const box3 = document.getElementById("box-3");
        const box4 = document.getElementById("box-4");
        const box5 = document.getElementById("box-5");
        if(box1.style.backgroundColor == box2.style.backgroundColor &&
            box1.style.backgroundColor == box3.style.backgroundColor &&
            box1.style.backgroundColor == box4.style.backgroundColor &&
            box1.style.backgroundColor == box5.style.backgroundColor){
                const h1 = document.createElement("h1");
                h1.innerHTML = "Nice job!"
                container.appendChild(h1);
            }
         
    } 
}









