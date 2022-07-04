// let h1 = $("h1");
// let redDiv = $(".red-div");
// let firstLi = $("ul li:first-child");
// let secondLi = $("ul li:last-child");
// let brownDiv = $("#brown-div");

// h1.css("color", "blue");
// redDiv.css("background-color", "red");
// firstLi.css("color", "green");
// secondLi.css("color", "pink");
// brownDiv.css("background-color", "brown");


// let box1 = $("#b1");
// let box2 = $("#b2");
// box1.addClass("box");
// box2.addClass("box");



// $('#my-input').val("suha");

// let color = $("div").data().color 
// console.log(color) //prints #2980b9
// color = $("div").attr("data-color");
// console.log(color) //prints #2980b9

// let expirationDate = $("div").data().expirationdate;
// console.log(expirationDate);
// let barcode = $("div").data().barcode ;
// console.log(barcode);

// $("div").on("mouseenter", function(){
//     $(this).css("background-color", "blue");
// });


// $("button").click(function(){
//     let text = $("#my-input").val();
//     alert(text)
// });


// $(".box").on("mouseenter", function(){
//     $(this).css("background-color", "blue");
// })


// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)


// $(".feedme").on("click", function(){
//     let divCopy = `<div> ${$(this).text()} </div> ` //use template literals and $(this)
    
//     $("body").append(divCopy)
//   })

//const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]



// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
// ]

// for(let name of names){
//     $("body").append(`<div>${name.first} - ${name.last}</div>`)
// }


// $(".feedme").on("mouseenter", function(){
//     $(this).remove();
// })

let text = "hi";
$("button").on("click", function(){
    $("#blogs").append(`<div class="blog"> hi, I'm here </div>`);
    // $(".blog").on("click", function() {
    //     alert("hi");
    //   });
})

$("#blogs").on("click", ".blog", function(){
    $(this).text("blargh"); 
})
  