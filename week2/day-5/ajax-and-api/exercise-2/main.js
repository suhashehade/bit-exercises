const fetch = function (queryType, queryValue) {
  $.ajax({
    method: "GET",
    url:
      "https://www.googleapis.com/books/v1/volumes?q=" +
      queryType +
      ":" +
      queryValue,
    success: function (data) {
      if (queryType === "title") {
        console.log(
          data.items[0].volumeInfo.title +
            " book by " +
            data.items[0].volumeInfo.authors[0]
        );
      } else {
        console.log(data.items[0].volumeInfo.title);
      }
    },
    error: function (xhr, text, error) {
      alert("there is an issue");
    },
  });
};

fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");
