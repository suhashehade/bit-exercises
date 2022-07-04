$("button").on("click", function () {
  $("#list").append(`<li>${$("input").val()}</li>`);
  $("input").val("")
});
