// https://randomuser.me/api/





let source = $("#people-template").html();
let template = Handlebars.compile(source);
let containerDiv = $("#container");


const generateUser = function(){
     let users = [];
     for(let i = 1; i <= 10; i++){
        $.ajax({
            method: "GET",
            url: "https://randomuser.me/api/",
            success: function (data) {
                let user = data.results[0];
                users.push(user)
            },
            complete: function(xhr, textStatus){
                displyUsers(users)
            },
            error: function (xhr, text, error) {
              alert("there is an issue");
            },
          });
     }
    
}

const displyUsers = function(users){
   let userInfoDiv = template({users});
   containerDiv.html("");
   containerDiv.append(userInfoDiv);   
}

generateUser();











   
