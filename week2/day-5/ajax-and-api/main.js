// $.get("https://www.googleapis.com/books/v1/volumes?q=intitle:name%20of%20the%20wind", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })

// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//    console.log(users[users.length - 1].company.catchPhrase);
// })

const displayData = function(data){
    console.log(data);
}

const fetch = function(isbn){
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
        success: displayData,
        error: function(xhr, text, error){
            alert("there is an issue");
        }
    });
}

$("button").on("click", function(){
    fetch();
})


