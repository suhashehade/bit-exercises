$("body").append(`<div class="box"></div>`);
$("body").append(`<div class="box"></div>`);


$("body").on("mouseenter", ".box", function(){
    $(this).css("background-color" ,"red")
})

$("body").on("mouseleave", ".box", function(){
    $(this).css("background-color", "#8e44ad");
})