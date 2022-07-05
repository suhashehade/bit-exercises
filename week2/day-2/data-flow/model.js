let posts = [
  {
    name: "Aya",
    text: "Good Morning",
  },
  {
    name: "Evana",
    text: "Hi",
  },
];

const render = function () {
  for (let post of posts) {
    $(".posts").append(`<div>${post.name}: ${post.text}</div>`);
  }
}





$("#btn").on("click", function () {
  let post = {
    name: $("#name").val(),
    text: $("#text").val(),
  };
  $(".posts").html("");
  $("#name").val("");
  $("#text").val("");
  posts.push(post);
  render();
});


