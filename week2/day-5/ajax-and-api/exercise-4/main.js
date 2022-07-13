$.ajax({
  method: "get",
  url: "https://api.giphy.com/v1/gifs/trending?api_key=qkkhGIHY3MIJwTacZwLHHyARz5ZJRmmb",
  success: function (result) {
    $("body").append(`
           <iframe src="${result.data[0].embed_url}" height="200" width="300" title="${result.data[0].title}"></iframe>
       `);
  },
  error: function (xhr, text, error) {
    alert("error");
  },
});
