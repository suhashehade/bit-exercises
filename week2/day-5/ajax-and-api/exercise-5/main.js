const fetch = function (searchQuery) {
  $.ajax({
    method: "get",
    url: `https://api.giphy.com/v1/gifs/search?api_key=qkkhGIHY3MIJwTacZwLHHyARz5ZJRmmb&q=display_name:${searchQuery}`,
    success: function (result) {
      $("iframe").attr("src", result.data[0].embed_url);
    },
    error: function (xhr, text, error) {
      alert("error");
    },
  });
};

$("#search_btn").on("click", function () {
  let searchQuery = $("#search_field").val();
  fetch(searchQuery);
});
